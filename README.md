# hugo-osan-theme

## 使い方
```
# サイトの作成
$ hugo new site new-site --format yml

$ cd new-site

# 依存パッケージの追加
$ pnpm init
$ pnpm add -D swup @swup/head-plugin

# テーマの追加
$ git clone https://github.com/minetaro12/hugo-osan-theme themes/hugo-osan-theme

# テーマの追加(Submodule)
$ git submodule add -b master https://github.com/minetaro12/hugo-osan-theme themes/hugo-osan-theme

# サンプル設定ファイルのコピー
$ cp themes/hugo-osan-theme/example.config.yml config.yml

# テンプレートファイルのコピー
$ cp themes/hugo-osan-theme/archetypes/default.md archetypes/default.md

# 記事の作成
$ hugo new posts/hello.md
```

## アーカイブページの作成

`content/archives.md`

```
---
title: "Archives"
layout: "archive"
---
```

## 検索ページの作成(pagefindが必要です)

`content/search.md`

```
---
title: "Search"
layout: "search"
---
```

## Thanks
- https://github.com/feathericons/feather