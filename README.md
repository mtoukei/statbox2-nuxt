# 設定
## .eslintrc.js
- globalsにd3を追加
## prettierrc
- printWidthを150で設定。細かく改行されるのを防ぐ。標準は80
## nuxt.config.js
- ビルドしたときにリンク切れさせないために
```
      const base = process.env.NODE_ENV === 'production' ? '/statbox2-nuxt/dist/' : '/'
      module.exports = {
       router: {
         base
       },
```
- 元のソースを表示
```
      if (ctx.isDev && ctx.isClient) {
            config.devtool = 'eval-source-map'
      }
```
## package.json

