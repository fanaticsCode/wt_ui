//组件的入口
const install = (Vue) => {
    /*
        实际上是 webpack 的方法,vue 工程一般基于 webpack,所以可以使用
        require.context(directory,useSubdirectories,regExp)
        接收三个参数:
            directory：说明需要检索的目录
            useSubdirectories：是否检索子目录
            regExp: 匹配文件的正则表达式,一般是文件名
    */
    
    const requireComponent = require.context('.',true,/\.vue$/);
    requireComponent.keys().forEach((fileName)=>{
        let config = requireComponent(fileName);
        Vue.component(config.default.name,config.default);
    });
}

export default{
    install
}