<template>
    <p :style="{border:btnColor,}">test</p>
</template>

<script>
    export default {
        props:['color'],
        computed:{
            btnColor(){
                return `1px ${this.color} solid`;
            },
        },
    }
</script>

<style scoped>
p{
    height: 60px;
    line-height: 60px;
    text-align: center;
    width: 150px;
}
</style>