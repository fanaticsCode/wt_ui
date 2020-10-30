<template>
    <div class="scroll">

        <wt-scroll
                dom-id="lp-scroll"
                @scrollReady="cb=>lpScroll=cb"
                :bar-width="20"
                :height="300">
            <div style="background: #000; height: 1000px; width: 200px;">
                
            </div>
        </wt-scroll>
    </div>

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

<style lang='less' scoped>
    .scroll{
        width: 400px;
        height: 600px;
        margin: 50px auto;
        border: 1px solid #03A9F4;
        ul{
            li{
                line-height: 30px;
                border-bottom: 1px solid #dfecf7;
            }
        }
    }
</style>