import Vue from 'vue';
// import Element from 'element-ui'; // 引入elementUi
// import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css' //样式文件

Vue.directive('highlight',function (el){
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
        hljs.highlightBlock(block);
    })
})

import Wtui from '../../../src/packages/index';
export default ({
    Vue,
}) => {
    Vue.use(Wtui);
}