---
title: Line 換手機備份從 iOS 轉 Android 教學
categories:
  - 科技宅少女
tags:
  - 3C
  - 懶人包
  - 購物心得
  - 教學
toc: true
date: 2019-11-03 19:40:15
urlname: line-backup-from-ios-to-android
keywords: line, 備份, ios 轉 android, 教學, Backuptrans, 蘋果換安卓
description: 希望前四大段可以幫助你快速的判斷這篇Line 換手機備份從 iOS 轉 Android 教學文，與你的狀況是不是符合。如果有任何疑問，歡迎隨時留言發問喔，我會盡所能幫你解答 🌞
thumbnail: https://lh3.google.com/u/2/d/18UUS_pPogcy_UDicRf8CvYhsS8JRL0am=w1920-h930-iv1
---

希望前四大段可以幫助你快速的判斷這篇教學文，與你的狀況是不是符合。如果有任何疑問，歡迎隨時留言發問喔，我會盡所能幫你解答 🌞

## 本文實測設備
`iPhone 8 plus` ios 系統 Line 備份轉移至 `Samsung s10e` Android 系統 8.0 以上

## 目前 Line 轉移備份的可行作法
- ios ➯ ios : Line 內建，路徑是 `設定 > 聊天 > 備份聊天記錄 > 馬上進行備份`
- Android ➯ Android : Line 內建，路徑是 `設定 > 聊天 > 備份及復原聊天記錄 > Google 帳號 > 備份至 Google 雲端硬碟` 
- ios ⇌ Android : 需購買電腦軟體 `Backuptrans Android iPhone Line Transfer +` 
台幣:heavy_dollar_sign:723 (這是 2019/09 購入 Personal Edition 方案含國外手續費的價格) 

## ios ⇌ Android 轉移前須知重點<!-- more -->
- 該軟體 Personal Edition 方案序號只能用在一台電腦上，不能轉移到別台電腦進行作業
- 轉移至 Android 8.0 以上手機，必須 `手動點開一位一位朋友的聊天視窗` ，個別恢復已備份的聊天內容!!! 若不想這麼麻煩，要先轉移到 Android 8.0 以下的手機，再用安卓間互轉的方式轉移。
- 多人聊天紀錄無法還原 (群組可以)
- 照片沒過期的話會一起轉移
- 語音訊息無法轉移

## 轉移流程
看完前述的重點依然要繼續往下的話，讓我們來看看轉移的整個流程步驟是怎麼樣～甭緊張，雖然乍看很複雜，但冤枉路我都走完了，仔細的慢慢操作，應該不困難！

1. 購買、安裝 Backuptrans 軟體
2. 連接 iPhone 進行備份
3. 登入新手機的 Line, 同時舊手機的 Line 被登出清空
4. 移動備份檔至 Android 手機資料夾
5. 手動依照想恢復的朋友對話，一個一個設定讀取
6. 備份轉移成功 :heart_eyes_cat: :blue_heart: 

### 1. 購買、安裝 Backuptrans 軟體
最便宜的版本是 Personal Edition 可轉三次方案，價錢與方案就差在轉移次數，沒有其他需求的話可直接購買這個版本。Mac 版比 Windows 版貴一些些。

- [windows 版本](https://www.backuptrans.com/android-iphone-line-transfer-plus.html) USD $34.95
- [mac 版本](https://www.backuptrans.com/android-iphone-line-transfer-plus-for-mac.html) USD $29.95

<figure>
  <img src="https://drive.google.com/uc?view&id=1zvCtBLh0NcQZhOSdGNP_y4mBZ5zQuRnr" alt="Backuptrans 所提供的購買方案"/>
  <cite>Photo: <a target="_blank" href="https://www.vaginamuseum.co.uk/">鹿鹿生活日誌</a></cite>
</figure>

### 2. 連接 iPhone 進行備份
這個步驟比較簡單
1. 手機畫面維持在桌面
2. 確認手機的line正確登入
3. 接下來就開始等待進行備份囉，電腦畫面會出現 `Loading data from Device...` 
這部分雖然簡單，但我一開始卡超久的，因為進度條很久都沒往前，一直停在 0% . 前幾次嘗試都以為是我設定有問題，沒連接上。後來才發現，只是跑很慢而已，耐心地等就沒問題了！
4. 備份完成時，就能在該軟體上看到所有的對話紀錄

### 3. 登入新手機的 Line, 同時舊手機的 Line 被登出清空
1. 舊手機 Line 開啟移動帳號功能
2. 在新手機完成登入。

這時候看到空白一片的聊天記錄會感覺怕怕的哈哈哈，我懂，不要怕！繼續往下，快完成了。

### 4. 將備份好的紀錄搬到 Android 的資料夾中
1. 先開啟 Android USB 偵錯模式
因我是用 Samsung 手機，開啟的路徑會是 `設定 > 關於裝置  > 軟體資訊 > 版本號碼，連續點擊 7 次，直到出現「開發者模式已啟用」`
不同廠牌的設定方式應該小有不同，可以 google 『廠牌 + USB 偵錯模式』找到設定方式。

2. 把備份好的 iPhone 紀錄搬移到 Android 的資料夾
    <figure>
      <img src="https://lh3.google.com/u/0/d/1Sb9unr_9WWcIf0L4By033wXwfjnnzqZT=w1440-h713-iv1" alt="在 local 備份上點右鍵，選擇 Export to Line backup file"/>
      <cite>Photo: <a target="_blank" href="https://www.backuptrans.com/tutorial/transfer-line-chats-manually-for-android.html">backuptrans</a></cite>
    </figure>

    2.1 如下面官網示意圖，在 local 備份上點右鍵，選擇 `Export to Line backup file`

    2.2 出現視窗請你選擇你新手機上面的正確 Line 帳號 (如果電腦 local 中只有一個剛剛操作的備份檔，那正常只會有那一個選項)，選完點 OK，會跳出存檔視窗，存在哪邊都可以，但千萬 `不要更改檔名` !!! 匯出完成後，即可關掉軟體。

3. 把匯出的檔案打開，將裡面的 `LINE_Backup` 複製到 Android 的資料夾中
如果裡面已存在同檔名的 LINE_Backup，務必要把原有的資料夾改名或移除，否則會失敗。

<figure>
      <img src="https://lh3.google.com/u/0/d/1dmki2Xl7mO6t_PUwGoB5HNBmfuturXRs=w885-h713-iv1" alt="將裡面的LINE_Backup複製到 Android 的資料夾中"/>
      <cite>Photo: <a target="_blank" href="https://www.backuptrans.com/tutorial/transfer-line-chats-manually-for-android.html">backuptrans</a></cite>
</figure>

### 5. 手動依照想恢復的朋友對話，一個一個設定讀取
真正的苦工開始了，點選想匯入備份紀錄的朋友， `右上方的Ｖ符號 > 聊天設定 > 匯入聊天記錄` 慢慢的一個個匯入完，就大功告成囉 :+1: (即使聊天視窗內已經在新手機有一些對話內容，經測試，還是可以順利匯入聊天記錄喔)

<figure>
      <img src="https://lh3.google.com/u/0/d/1LlTOFswkChy6mi24C78Ewsr48HbO1Toq=w885-h713-iv2" alt="匯入聊天記錄"/>
      <cite>Photo: <a target="_blank" href="https://butimalone12.pixnet.net/blog/post/460056525">失物招領</a></cite>
</figure>

---

#### 參考網址
- https://butimalone12.pixnet.net/blog/post/460056525
- https://steachs.com/archives/48853
- https://steachs.com/archives/29432