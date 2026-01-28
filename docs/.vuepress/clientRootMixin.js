export default {
  mounted() {
    if (typeof document === 'undefined') return

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
  }
}

