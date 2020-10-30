<template>
    <button :class="btnClass">
         <span v-if="this.$slots.default">
            <slot></slot>
         </span>
    </button>
</template>

<script>
    const prefixCls = 'wt-button'
    export default {
        name: "wt-button",
        data(){
            return{
                dataShaft:[],
            }
        },
        props:{
            type:{
                type:String,
                validator(type){
                    if(type && !['warning','success','danger','info','primary'].includes(type)){
                        console.error("type类型必须为"+["warning","success","danger","info","primary"].join("、"));
                    }
                    return true;
                },
                default:'primary',
            },
            size: {
                type: String,
                validator(size) {
                    if(size && !['large', 'medium', 'small'].includes(size)){
                        console.error("size类型必须为"+['large', 'medium', 'small'].join("、"));
                    }
                    return true;
                },
                default:'medium',
            },
            loading:{
                type:Boolean,
                default: false,
            },
        },

        computed:{
            btnClass(){
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.type}`,
                    `${prefixCls}-${this.size}`
                ]
            },
        },

    }
</script>

<style lang="scss" scoped>
    @import "../../styles/var";
    $height: 40px;
    $font-size: 14px;
    $color: #606266;
    $border-color: #dcdfe6;
    $background: #ecf5ff;
    $active-color: #3a8ee6;
    .wt-button{
        border-radius: $border-radius;
        border: 1px solid $border-color;
        color: $color;
        background: #fff;
        cursor: pointer;
        font-size: $font-size;
        height: $height;
        line-height: 1;
        /*padding: 12px 20px;*/
        display: inline-flex;
        justify-content: center;
        vertical-align: middle;
        min-width:100px;
        display: inline-block;
        &:hover {
            border-color: $border-color;
            background-color: $background;
        }
        @each $type,$color in (
                primary:$primary,
                success:$success,
                info:$info,
                warning:$warning,
                danger:$danger
        ){
            &-#{$type}{
                background:#{$color};
                border:1px solid #{$color};
                color:#fff;
                fill:#fff
            }
        }
        @each $type,$size in (
            large:150px 60px 18px,
            medium:100px 40px 14px,
            small:70px 25px 12px,
        ){
            &-#{$type}{
                width: nth($size,1);
                height: nth($size,2);
                font-size: nth($size,3);
            }
        }
        @each $type,$color in (
                primary:$primary-hover,
                success:$success-hover,
                info:$info-hover,
                warning:$warning-hover,
                danger:$danger-hover
        ){
            &-#{$type}:hover{
                background:#{$color};
                border:1px solid #{$color};
                color:#fff;
                fill:#fff
            }
        }
        @each $type,$color in (
                primary:$primary-active,
                success:$success-active,
                info:$info-active,
                warning:$warning-active,
                danger:$danger-active
        ){
            &-#{$type}:active,&-#{$type}:focus{
                background:#{$color};
                border:1px solid #{$color};
                color:#fff;
                fill:#fff
            }
        }
    }


</style>