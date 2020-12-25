---
tags: 
  - 3C
  - 教學
  - 紀錄
title: Calibre DeDRM 插件安裝失敗解法
categories:
  - 科技宅少女
toc: true
date: 2020-11-12 08:24:49
urlname: how-to-fix-calibre-dedrm-plugin
description: 目前最大宗的 Amazon, 樂天 KOBO, 台灣的 Readmoo 還有 Google Play Books, 電子書一家一個平台跟行動支付各自開發讓使用者一樣無所適從。我照著 這篇(包括留言) 操作，卻還是失敗不能用，出現下面的錯誤訊息。
thumbnail: https://lh3.googleusercontent.com/pw/ACtC-3edXCLZK_IcIb45xIUPsRJd43_iGbghDrH2JCHuO0YqbtTw4gscsvD_KwWfa468mU3zocPPMh0uu4fxOfo2uppQSQEVNXV5Oah9eBAv3ahuMyaVlP4T_Rjk_k8q3cRFmf4iC2y-H1Ycg-C9AR-80Ls=w1250-h536-no?authuser=1
---

趁著 1111 電商折扣季入手了 KOBO libra H2O, 目前最大宗的 Amazon, 樂天 KOBO, 台灣的 Readmoo 還有 Google Play Books, 電子書一家一個平台跟行動支付各自開發讓使用者一樣無所適從。我照著 [Budalogy - 如何利用calibre去除DRM，讓kindle也可以讀kobo](https://budafang.blogspot.com/2018/02/calibredrmkindlekobo.html) 這篇(包括留言) 操作，卻還是失敗不能用，出現下面的錯誤訊息。<!-- more -->

```
SyntaxError:invalaid syntax(calibre-plugins.dedrm._init_line168)
File "calibre_plugins.dedrm.__init__", line 168
print u"{0} v{1}: Copying needed library files from plugin's zip".format(PLUGIN_NAME, PLUGIN_VERSION)
^
SyntaxError: invalid syntax
```

又花點時間解決，原來是因為 Calibre 的最新版是 python3, 但 DeDRM plugin 還沒跟上，所以才會造成插件怪怪的失敗。

解決辦法很簡單，只要先繼續用 Calibre 的舊版就行囉！([直接下載多數人推薦的 version 4.23](https://download.calibre-ebook.com/4.23.0/))