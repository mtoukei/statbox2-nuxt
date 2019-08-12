# 設定
## .eslintrc.js
- globalsにd3を追加
## prettierrc
- printWidthを150で設定。細かく改行されるのを防ぐ。標準は80
## nuxt.config.js
- ビルドしたときにリンク切れさせないために

     
    router: {
      base: process.env.BASE_DIR
    },
- 元のソースを表示  

    
    extend(config, { isDev, isClient }) {
       config.devtool = 'eval-source-map'
    }    
    
## package.json
- ビルドを修正　ビルドしたときにリンク切れさせないために  

    
    "build": "cross-env BASE_DIR=/statbox2-nuxt/ nuxt build",
