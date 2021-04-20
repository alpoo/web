
const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports={
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('@',resolve('./src'))
        .set('components',resolve('./src/components'))
        .set('assets',resolve('./src/assets'))
        .set('commonjs',resolve('./src/commonjs'))
        .set('network',resolve('./src/network'))
        .set('common', resolve('./src/components/common'))
        .set('image',resolve('./static/image'))
    }
}