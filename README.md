# tasukaru_banana

たすかるバナナ（エアコン・ハウスクリーニング）のホームページです。

- 最終案（`src/`）が公開するページです。CSS と JavaScript を埋め込んだ 1 枚の `index.html` にビルドします
- 案A〜C（`drafts/`）は検討用に残しているデザイン案です。ヘッダー右上の「最終案 / 案A / 案B / 案C」で切り替えられます
- もとは Figma Make で作成したデザイン（React）を、HTML / CSS / JavaScript で書き直したものです

## フォルダ構成

```
src/                 最終案のソース（ここを編集する）
  index.html         ページ本体。CSS・JS の差し込み位置に目印がある
  styles.css         Tailwind CSS の設定と独自の CSS（アニメーションなど）
  main.js            メニュー開閉・よくある質問・スクロール表示
assets/              画像（最終案・案A〜Cで共通）
drafts/              案A〜C（完成品。ビルドせずそのままコピーする）
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

ビルドコマンドは `npm run build`、公開するフォルダは `dist` です。

### GitHub Pages（確認用）

`main` に push すると、GitHub Actions（`.github/workflows/pages.yml`）がビルドして公開します。

- 初回だけ、リポジトリの Settings → Pages → Source を「GitHub Actions」に変更してください
- 公開先：https://shoheyosaka.github.io/tasukaru_banana/

### Cloudflare Pages（本番・予定）

Cloudflare Pages でこのリポジトリを接続し、次のように設定します。

- Build command：`npm run build`
- Build output directory：`dist`

## 公開前に差し替えるもの

- `<meta name="robots" content="noindex">`（検索エンジンに載せない設定）を外す
- ヘッダーのデザイン案の切り替え（最終案 / 案A / 案B / 案C）を外す
- LINE のリンク（今は `#`）と QR コード
- メールアドレス（今は `info@example.com`）
- メイン画像・チーム写真・サービス画像・代表者写真（今は仮の枠）
