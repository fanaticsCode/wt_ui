<template>
    <div style="border: 1px red solid; height: 60px; width: 160px;"></div>
</template>

<script>
    export default {
        name: "wt-button",
        created(){
            console.log('slots',this.$slots);
        }
    }
</script>

<style scoped>

</style>