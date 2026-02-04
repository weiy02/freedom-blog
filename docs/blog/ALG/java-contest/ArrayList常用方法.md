---
title: ArrayList
date: 2026-01-28
categories:
  - -算法
    - Java竞赛
tags:
  - Java竞赛技巧
---
# ArrayList
```java
import java.util.ArrayList;

public class arrayList {
    public static void main(String[] args) {
        //init class
        ArrayList<String> str = new ArrayList<String>();
        
        //add element
        str.add("hello");
        System.out.println(str);

        //access element
        String s = str.get(0);
        System.out.println(s);

        //set element
        str.set(0, "unhello");
        System.out.println(str.get(0));

        //delete elemenet
        str.remove(0);
        System.out.println(str);

        System.out.println(str.size());
    }
}
```


## ArrayList与List的区别

```java
ArrayList<DataType> objectName = new ArrayList<>();//左右侧类型均为实现类
List<DataType> objectName = new ArrayList<>();//左侧为接口右侧是实现类，只能调用List接口中的方法
```

## 标题二

**方法的重载方法的递归**

## 标题三

> 推送
> 构建静态文件：yarn docs:build
> 提交代码：yarn deploy