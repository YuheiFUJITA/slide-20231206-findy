---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: true
info: |
  # GitHubとVitePressによる<br>開発ドキュメント運用

  [ドキュメント管理を制する 陳腐化を防ぐための実践事例 Lunch LT \- connpass](https://findy.connpass.com/event/302508/)で発表した資料です。

drawings:
  persist: false
transition: slide-left
title: Welcome to Slidev
---

# GitHubとVitePressによる<br>開発ドキュメント運用

2023-12-06@Findy

Yuhei FUJITA

---
layout: center
---

![GitHub Repository](/images/github-repository.png)

---

# 自己紹介

<div class="grid grid-cols-4 gap-4">
<div>

![icon](https://github.com/YuheiFUJITA.png)

![Twitter QRコード](/images/qrcode_twitter.com.png)

</div>
<div class="col-span-3">

- 名前: Yuhei FUJITA（藤田 悠平）
- X(Twitter): [@Yuhei_FUJITA](https://twitter.com/Yuhei_FUJITA)
- GitHub: [@YuheiFUJITA](https://github.com/YuheiFUJITA)
- 所属: [株式会社バリューデザイン](https://www.valuedesign.jp/) / [アララ株式会社](https://www.arara.com/)
- 業務: 主に開発
- コミュニティ運営: [Vue Fes](https://vuefes.jp/) / [PWA Night](https://pwanight.connpass.com/) / [VS Code Meetup](https://vscode.connpass.com/)
- 趣味: [キャンプ](https://twitter.com/Yuhei_FUJITA/status/1604238002578165761) / [フィルムカメラ](https://www.instagram.com/yuhei_fujita.film/)

</div>
</div>

---

# 会社紹介

<div class="grid grid-cols-3 gap-4">
<div class="col-span-1">

![Alt text](/images/valuedesign.png)

![Alt text](images/qrcode_www.valuedesign.jp.png)

</div>
<div class="col-span-2">

## お客様の売上を拡大する、<br>No.1のパートナーでありたい

|||
|---|---|
|会社名|株式会社バリューデザイン|
|所在地|東京都中央区京橋3-1-1 東京スクエアガーデン14階|
|設立|2006-07-26|
|代表取締役社長|林　秀治（Shuji Hayashi）|

</div>
</div>



---
layout: statement
---

# そもそもなぜドキュメントは<br>陳腐化するのか？

ドキュメントの重要性は理解しているのに…

---

# 陳腐化する理由

## 1. <span class="yellow">議論と更新</span>が別れているから

- すべての議論が終わってから更新しようとする
- テストコードを後から書くのと同じ

## 2. ドキュメントの<span class="yellow">更新コスト</span>が大きいから

- Excel方眼紙やパワポのスライドは楽に見えて編集が大変
- バージョン管理まで考えると更新が面倒になる

## 3. <span class="yellow">直近の自分たち</span>は困らないから

- 記憶が新しいうちはドキュメントを見なくてもある程度はできる
- ドキュメントが活きてくるのは後から

---

# 今まで見てきたよくないドキュメント

## 1. 読めない

- Excel方眼がメンテされなくなって文字がはみ出してる…
- なぜかパワポで作られた激重のスライド…

## 2. 見つからない

- Googleドライブで検索したら似たファイルが大量にヒット…
- ファイル形式によって管理場所が違う…

## 3. 知らない間に更新されている

- Pull Requestを作成しているうちに仕様が変わっていた…
- 共同編集のせいでファイルの変更履歴が最早カオス…

---
layout: statement
---

# 良いドキュメントとは<br>何なのか？

---

# 良いドキュメントの条件

## 1. 更新が容易であること

- ドキュメントの更新をしたいのであって見た目を調整したいわけではない
- ファイルサイズが大きくなって重たいファイルは誰も開きたくない

## 2. 可読性が高いこと

- ドキュメントは書く時間/人数よりも読む時間/人数のほうがが圧倒的に多い
- 読みやすいドキュメントは理解もしやすい

## 3. 履歴に経緯が紐づいていること

- 「なぜこの仕様になったのか」はドキュメントだけでは読み取れない
- その使用になった経緯がわからないと次変更するときに判断が難しい

---
layout: statement
---

# ドキュメントは<br>書くためでも<br>更新するためでもなく<br><span class="yellow">未来の誰かが読む</span>ためにある

---
layout: statement
---

# Markdown<br>+<br>GitHub<br>+<br>VitePress

---
layout: iframe-right
url: https://vitepress.dev/
---

# VitePress

- Markdownから<br>ドキュメントサイトを生成
- 静的サイトホスティングで<br>公開できる
- Markdown拡張で<br>カスタマイズできる
- Vue.jsでカスタマイズできる

---

# VitePressの使い方

<div class="grid grid-cols-2 gap-4">
<div>

## 1. プロジェクトの作成

```bash
npm init
```

## 2. VitePressのインストール

```bash
npm add -D vitepress
```

## 3. VitePressの初期化

```bash
npx vitepress init
```

## 4. ローカルサーバーの起動

```bash
npm run docs:dev
```

</div>
<div>

![VitePressのセットアップ](/images/vitepress-get-started.gif)

</div>
</div>

---

# フォーマットにMarkdownを採用した理由

## 1. <span class="yellow">git</span>との相性が良い

- テキストベースなので差分がわかりやすい
- `git diff` を見れば変更内容がわかる

## 2. <span class="yellow">書くこと</span>に専念できる

- フォーマットやスタイルを気にする必要がない
- Wordの改ページのような本来意識しなくてよいことから開放される

## 3. <span class="yellow">CI</span>を組み込める

- textlintやPrettierなどのツールを使って自動でチェックできる
- 表記ゆれなども一元管理できる

---

# 管理方法にGitHubを採用した理由

## 1. <span class="yellow">Issue/Pull Request駆動</span>のドキュメント更新

- Issue/Pull Requestを議論の場にできる
- Issue/Pull Requestのコメントがそのまま変更の経緯として紐づく

## 2. Release Noteによる<span class="yellow">バージョン管理</span>

- Pull Requestをまとめることで差分の概要がわかりやすい
- ファイル名にバージョンをつけて管理する運用から脱却できる

## 3. GitHubによる<span class="yellow">従来の開発体験</span>の継承

- 新しい知識が不要なので導入が容易
- コーディングと同じフローを踏める

---

# 生成ツールにVitePressを採用した理由

## 1. 運用コストが<span class="yellow">ほぼゼロ</span>

- GitHub PagesやS3 + Cloud Frontでホスティングできる

## 2. <span class="yellow">拡張性</span>が高い

- `markdown-it`を使ってMarkdownの拡張ができる
- Vue.jsでカスタマイズできる

## 3. <span class="yellow">標準で</span>必要十分な機能が揃っている

- Algoliaと連携して検索機能が使える
- git/GitHubとの連携が便利（更新日時の表示など）
- 最近AI Chat機能が追加された

---
layout: iframe
url: https://yuheifujita.github.io/slide-20231206-findy/vitepress/
---

# 導入してみた感想

## 1. 一箇所にまとまっているので見つけやすい

- ドキュメントも環境構築手順も同じ場所にあるので見つけやすい

## 2. 更新が苦にならない

- 変更したければその場でIssue/Pull Requestを作成して<br>レビューしながら更新できる

## 3. 変更があってもcommitやPull Requestを見ればわかる

- 議論がコメントで残っているので変更の経緯がわかる
- Slack連携しておけばPull RequestがMergeされたら通知が来る

---

# 課題

## 1. git/GitHubの知識が必要

- 企画や営業などの非エンジニアにはハードルが高い

## 2. すべてをVitePressで解決できるわけではない

- Markdownで表現しきれないドキュメントは別途用意する必要がある

## 3. 最低限のルール作りは必要

- 「急ぎだから `main` に直接コミットして」とかし始めると崩壊する
- 口頭による議論は結局残らない

---

# まとめ

- Markdown + GitHub + VitePressとドキュメントは相性がよさそう
  - 書きやすさ・管理のしやすさ・読みやすさがいい感じ
- これですべてを解決できるわけではない
  - 無理にこの方法にこだわる必要はない
  - 技術者目線にかなり偏っている点には注意
- ドキュメントの最終目的は読まれること
  - 書いて更新して終わりではない
  - 未来の誰かが読むために書く
