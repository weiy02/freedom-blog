export default {
  mounted() {
    if (typeof document === 'undefined') return

    // ---- 鼠标点击粒子效果（全局）----
    // 说明：
    // - 使用 DOM span + requestAnimationFrame，避免引入额外依赖
    // - 轻量、自动销毁、不会阻挡点击（pointer-events: none）
    this.__clickFx = this.__initClickParticles?.() || this.__initClickParticles()

    // 创建阅读模式切换按钮（全局）
    const btn = document.createElement('div')
    btn.className = 'reading-mode-toggle'
    btn.innerText = '阅'
    btn.title = '切换阅读模式'

    btn.onclick = () => {
      const html = document.documentElement
      const isReading = html.classList.toggle('reading-mode')
      if (isReading) {
        localStorage.setItem('reading-mode', 'on')
      } else {
        localStorage.removeItem('reading-mode')
      }
    }

    document.body.appendChild(btn)

    // 持久化阅读模式
    if (localStorage.getItem('reading-mode') === 'on') {
      document.documentElement.classList.add('reading-mode')
    }
  },

  beforeDestroy() {
    // VuePress v1：路由切换时组件会销毁/重建，记得解绑全局事件
    if (this.__clickFx && typeof this.__clickFx.destroy === 'function') {
      this.__clickFx.destroy()
    }
    this.__clickFx = null
  },

  methods: {
    __initClickParticles() {
      if (typeof document === 'undefined') return { destroy() {} }

      const container = document.createElement('div')
      container.className = 'click-particles-container'
      document.body.appendChild(container)

      const colors = ['#ff5c8a', '#ffb703', '#3eaf7c', '#4dabf7', '#b197fc', '#ffd6a5']
      const rand = (min, max) => Math.random() * (max - min) + min

      const particles = new Set()
      let rafId = 0

      const createParticle = (x, y) => {
        const el = document.createElement('span')
        el.className = 'click-particle'
        el.style.left = `${x}px`
        el.style.top = `${y}px`
        el.style.background = colors[(Math.random() * colors.length) | 0]

        // 初始参数
        const p = {
          el,
          x,
          y,
          vx: rand(-1.8, 1.8),
          vy: rand(-3.2, -1.2),
          g: rand(0.04, 0.08),
          life: 0,
          maxLife: rand(28, 45),
          scale: rand(0.8, 1.4),
          rot: rand(0, 360),
          vr: rand(-10, 10)
        }

        el.style.transform = `translate(-50%, -50%) scale(${p.scale}) rotate(${p.rot}deg)`
        container.appendChild(el)
        particles.add(p)
      }

      const tick = () => {
        rafId = requestAnimationFrame(tick)
        if (!particles.size) return

        for (const p of particles) {
          p.life += 1
          p.vy += p.g
          p.x += p.vx * 6
          p.y += p.vy * 6
          p.rot += p.vr

          const t = p.life / p.maxLife
          const alpha = Math.max(0, 1 - t)
          p.el.style.left = `${p.x}px`
          p.el.style.top = `${p.y}px`
          p.el.style.opacity = String(alpha)
          p.el.style.transform = `translate(-50%, -50%) scale(${p.scale * (1 - t * 0.2)}) rotate(${p.rot}deg)`

          if (p.life >= p.maxLife) {
            particles.delete(p)
            if (p.el && p.el.parentNode) p.el.parentNode.removeChild(p.el)
          }
        }
      }

      const onClick = (e) => {
        // 兼容触控/鼠标：优先 clientX/clientY
        const x = e.clientX
        const y = e.clientY

        // 每次点击生成 10~16 个粒子
        const n = ((Math.random() * 7) | 0) + 10
        for (let i = 0; i < n; i += 1) createParticle(x, y)

        if (!rafId) tick()
      }

      document.addEventListener('click', onClick, { passive: true })

      return {
        destroy() {
          document.removeEventListener('click', onClick)
          if (rafId) cancelAnimationFrame(rafId)
          rafId = 0
          for (const p of particles) {
            if (p.el && p.el.parentNode) p.el.parentNode.removeChild(p.el)
          }
          particles.clear()
          if (container && container.parentNode) container.parentNode.removeChild(container)
        }
      }
    }
  }
}

