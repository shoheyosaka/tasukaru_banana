# tasukaru_banana

たすかるバナナ（エアコン・ハウスクリーニング）のホームページです。

- 最終案（`src/`）が公開するページです。CSS と JavaScript を埋め込んだ 1 枚の `index.html` にビルドします
- 案A〜C（`drafts/`）は検討用に残しているデザイン案です。本番には公開しません。見るときは `node scripts/build.mjs --drafts` でビルドし、`dist/a.html` などを開きます
- もとは Figma Make で作成したデザイン（React）を、HTML / CSS / JavaScript で書き直したものです

## フォルダ構成

```
src/                 最終案のソース（ここを編集する）
  index.html         ページ本体。CSS・JS の差し込み位置に目印がある
  styles.css         Tailwind CSS の設定と独自の CSS（アニメーションなど）
  main.js            メニュー開閉・よくある質問・スクロール表示
assets/              画像（最終案・案A〜Cで共通）
drafts/              案A〜C（記録用。--drafts を付けたときだけ dist/ にコピーする）
scripts/build.mjs    dist/ を作るスクリプト
dist/                公開用ファイル（ビルドで生成。git には含めない）
```

## 必要なもの

- Node.js 20 以上（`.node-version` は 22）

初回だけ、リポジトリのフォルダで次を実行します。

```sh
npm install
```

## 編集と確認

```sh
npm run dev
```

ファイルを保存するたびに `dist/` が作り直されます。`dist/index.html` をブラウザで開いて確認してください（macOS なら `open dist/index.html`）。一度だけビルドするときは `npm run build` です。

- 見た目は Tailwind CSS のクラス（`text-sm`、`bg-[#FFD23F]` など）で書いています。ビルド時に、`src/index.html` と `src/main.js` で使っているクラスだけを CSS にして埋め込みます
- `src/index.html` をそのままブラウザで開くと CSS が当たっていない状態で表示されます。確認は必ず `dist/` で行ってください
- 案A〜C（`drafts/`）は完成済みの HTML で、`drafts/css/style.css` も生成済みです。案A〜Cに新しい Tailwind のクラスを足しても反映されないので、修正は最終案で行ってください

### 主な色

| 用途 | 色 |
| --- | --- |
| メインの文字・濃い面 | `#3F3426`（こげ茶） |
| アクセント | `#FFD23F`（バナナイエロー） |
| 白地に置く黄色系の文字 | `#A87700` |
| 淡い面・枠線 | `#F1E8D2` |
| ページの背景 | `#FFFBF0` |
| LINE ボタン | `#06C755` |

## 公開

お客様の Cloudflare アカウントの Cloudflare Pages（プロジェクト名 `tasukaru-banana`）で公開しています。

- Build command：`npm run build`
- Build output directory：`dist`
- Production branch：`main`
- 公開先：https://tasukaru-banana.pages.dev （独自ドメインは設定予定）

`main` に push すると本番に反映されます。修正は作業用のブランチで行い、push すると Cloudflare が確認用の URL を作るので、お客様に OK をもらってから `main` にマージします。
