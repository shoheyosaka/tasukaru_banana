# tasukaru_banana
たすかるバナナのコーポレートサイトのサンプルページです。 本番公開用ではなく、社内での共有・確認を目的としています。

- Figma Make で作成したデザイン（React）を、HTML / CSS / JavaScript で書き直したものです
- ビルドツールやパッケージのインストールは不要です
- 文言はほぼ同じで、デザインだけが異なる案を複数用意しています。ヘッダー右上の「A案 / B案 / C案」で切り替えられます


## ローカルでの確認方法
ブラウザで直接開く（いちばん手軽）
`cd tasukaru_banana`
`open index.html`
open は macOS のコマンドです。Windows の場合は start index.html、またはエクスプローラーから index.html をダブルクリックしてください。

## GitHub Pages での公開
GitHub のリポジトリで Settings → Pages を開く
Source で「Deploy from a branch」を選ぶ
Branch で main、フォルダで / (root) を選んで Save
数分後、https://<ユーザー名または組織名>.github.io/tasukaru_banana-hp/ で閲覧できるようになります
