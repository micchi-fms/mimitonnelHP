# ミミトンネルのHP

## 表示内容
- 作品概要
-- 文章
-- 写真
- デモ映像
- 展示履歴
--予選
--決勝
- メディア
- メンバー

## タスク
- [ ] TOPページスマホ対応にしないといけない
- [ ] スライドを少なくして簡潔なサイトにする
- [ ] SEO対策
- [ ] ミミトンネルの音も聞けるといいよね(動画、インタラクティブサイト？)
- [ ] スマホ用サイト
## 各バージョン

以下のバージョンで動作します

```
Node.js: v4.5.0
```

## 構造
```
├─ build	  // コンパイル先ディレクトリ
│
├─ gulp   // gulpファイル
│   ├── config.js  // パス等設定ファイル
│   ├── tasks      // 実行されるタスク
│   └── util
│
│
├── src    // 開発用ディレクトリ
│   ├── copy    // コピー
│   ├── img    // そのままbuild/imgへコピーされる
│   ├── js     // main.jsをコンパイルしてbuildへ
│   │   └──lib //minMatrix.jsとか入ってる
│   ├── sass   // sassファイルをコンパイルしてbuildへ
│   └── index.ejs //テンプレ
└─index.js //build直下をサーバーにする
```

### ビルドツール

* Gulp              （ タスクランナー )
* gulp-ejs          （ ejs -> html コンパイル )
* gulp-ruby-sass    （ sass -> css コンパイル )
* browserify        （ jsファイルを統合 )
* js-hint           （ jsファイルのチェック )
* BrowserSync       （ ローカルサーバーを起動 )

## インストール
```
>npm install
```
## 実行
###srcファイルをコンパイル
```
>gulp
```

###本番向けビルド（buildディレクトリから不要なファイルを削除して、jsファイルをminifyする）
```
>npm run build
```

###Node.jsでサーバーを立てる
```
>node index.js
```
