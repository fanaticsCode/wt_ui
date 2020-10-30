<template>
    <div >
        <button>
             <span v-if="this.$slots.default">
                <slot></slot>
             </span>
        </button>

        <div id="time-shaft">
            <div v-for="(item,index) in dataShaft">
                <span>{{ item }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    const test = '';
    export default {
        name: "wt-button-test",
        props:{
            dateList:{
                type:Object,
                default:()=>({
                    startDate:'2019-05-01',
                    endDate:'2029-10-22',
                })
            },
        },
        watch:{
            dateList:{
                deep:true,
                immediate:true,
                handler(val){
                    let startYear = new Date(this.dateList.startDate).getFullYear();
                    let endDate = new Date(this.dateList.endDate).getFullYear();
                    let dateSpace = endDate - startYear;
                    /*结束年份大于开始年份*/
                    if(dateSpace > 0){
                        for(let i = 0; i <= dateSpace; i++){
                            let temp = null;
                            if(i == 0){
                                temp = this.flagMonth.slice(new Date(this.dateList.startDate).getMonth());
                            }else if(i == dateSpace){
                                temp = this.flagMonth.slice(0,new Date(this.dateList.endDate).getMonth()+1);
                            }else{
                                temp = this.flagMonth;
                            }
                            this.dataShaft.push(
                                startYear+i,
                                ...temp
                            );
                        }
                    }
                    if(dateSpace == 0){
                        /*同年份 - 闭区间 所以加一*/
                        this.dataShaft.push(startYear,...this.flagMonth.slice(new Date(this.dateList.startDate).getMonth(),new Date(this.dateList.endDate).getMonth() + 1));
                    }
                }
            }
        },
        data(){
            return{
                dataShaft:[],
                flagMonth:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
            }
        },
        created(){
            console.log('slots',this.$slots);
        }
    }
</script>

<style lang="scss" scoped>
#time-shaft{
    border: 1px red solid;
    width: 100px;
    min-height: 600px;
    background-color: #eee;
}
</style>