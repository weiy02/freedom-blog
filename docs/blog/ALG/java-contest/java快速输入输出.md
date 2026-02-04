---
title: java快速输入输出
date: 2026-01-28
categories:
  - -算法
    - Java竞赛
tags:
  - Java竞赛技巧
  - 快速IO
---

```java
// import java.io.BufferedReader;
// import java.io.InputStreamReader;
// import java.io.IOException;
// import java.io.BufferedWriter;
// import java.io.OutputStreamWriter;
import java.io.*;
public class quickIO {
    public static void main(String[] args) throws IOException{
        BufferedReader cin = new BufferedReader(new InputStreamReader(System.in));
        String str = cin.readLine();
        BufferedWriter cout = new BufferedWriter(new OutputStreamWriter(System.out));
        int a = 10;
        int b = 100;
        if(a<=b) a++;
        cout.write(str);
        cout.flush();
    }
}
```