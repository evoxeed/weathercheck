module.exports = {
    transpileDependencies: [
        'vuetify'
    ],

    pluginOptions: {
        svgSprite: {
            dir: "src/assets/icon",
            test: /\.(svg)(\?.*)?$/,
            loaderOptions: {
                extract: true,
                spriteFilename: "img/icons.[hash:8].svg", // or 'img/icons.svg' if filenameHashing == false
            },
            pluginOptions: {
                plainSprite: true,
            },
        },
    },

    chainWebpack: config => {
      config.module
        .rule('svg-sprite')
        .use('svgo-loader')
        .loader('svgo-loader')
    }
}
