// module.exports = {
//     // 资源路径
//    publicPath: '/maizuo/hemugao/',
//    // 打包路径
//    outputDir: 'hemugao',
//    // 关闭eslint检查
//    lintOnSave: false
// }
const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
module.exports = {
    // 资源路径 
    publicPath: '/web04/hemugao-fresh/dist/',
    // 打包路径
    // outputDir: 'hemugao',
    // 关闭eslint检查
    lintOnSave: false,

    css: {
        loaderOptions: {
            // 后处理器配置
            postcss: {
                plugins: [
                    // 配置样式前缀
                    autoprefixer(),
                    // 把px转为rem
                    pxtorem({
                        rootValue: 37.5,
                        propList: ["*"]
                    })
                ]
            }
        }
    }
}