# Button组件
常用的操作按钮。
## 基础用法
基础的按钮用法。

## 按钮
<code-container>
::: slot source
<wt-button type='info' size="large">按钮</wt-button>
<wt-button type='danger'>按钮</wt-button>
<wt-button type='info' size="small">按钮</wt-button>

:::
使用type属性来定义 Button 的类型'warning','success','danger','info','primary'。<br>
使用size属性来定义 Button 的大小'large', 'medium', 'small'。

::: slot highlight
```html
<template>
    <wt-button type='info' size="large">按钮</wt-button>
    <wt-button type='danger'>按钮</wt-button>
    <wt-button type='info' size="small">按钮</wt-button>
</template>
```
:::
</code-container>
<div>
    <wt-button type='info'>按钮123</wt-button>
    <wt-button-test></wt-button-test>
</div>



