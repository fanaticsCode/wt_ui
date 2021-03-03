<template>
  <div>
    <div id="scroll_box" class="scroll_box">
      <div id="scroll_warper" class="scroll_warper" ref="scrollWarper">
        <!--        需要滚动的内容要放在scroll_con内-->
        <div id="scroll_con">
          <div>001</div>
          <div>002</div>
          <div>003</div>
          <div>004</div>
          <div>005</div>
          <div>006</div>
          <div>007</div>
          <div>008</div>
          <div>009</div>
          <div>010</div>
          <div>011</div>
          <div>012</div>
          <div>013</div>
          <div>014</div>
          <div>015</div>
          <div>016</div>
          <div>017</div>
          <div>018</div>
          <div>019</div>
          <div>020</div>
          <div>021</div>
          <div>022</div>
          <div>023</div>
          <div>024</div>
          <div>025</div>
          <div>026</div>
          <div>027</div>
          <div>028</div>
          <div>029</div>
          <div>030</div>
          <div>031</div>
          <div>032</div>
          <div>033</div>
          <div>034</div>
          <div>035</div>
          <div>036</div>
          <div>037</div>
          <div>038</div>
          <div>039</div>
          <div>040</div>
          <div>041</div>
          <div>042</div>
          <div>043</div>
          <div>044</div>
          <div>045</div>
          <div>046</div>
          <div>047</div>
          <div>048</div>
          <div>049</div>
          <div>050</div>
          <div>051</div>
          <div>052</div>
          <div>053</div>
          <div>054</div>
          <div>055</div>
          <div>056</div>
          <div>057</div>
          <div>058</div>
          <div>059</div>
          <div>060</div>
          <div>061</div>
          <div>062</div>
          <div>063</div>
          <div>064</div>
          <div>065</div>
          <div>066</div>
          <div>067</div>
          <div>068</div>
          <div>069</div>
          <div>070</div>
          <div>071</div>
          <div>072</div>
          <div>073</div>
          <div>074</div>
          <div>075</div>
          <div>076</div>
          <div>077</div>
          <div>078</div>
          <div>079</div>
          <div>080</div>
          <div>081</div>
          <div>082</div>
          <div>083</div>
          <div>084</div>
          <div>085</div>
          <div>086</div>
          <div>087</div>
          <div>088</div>
          <div>089</div>
          <div>090</div>
          <div>091</div>
          <div>092</div>
          <div>093</div>
          <div>094</div>
          <div>095</div>
          <div>096</div>
          <div>097</div>
          <div>098</div>
          <div>099</div>
          <div>100</div>
        </div>
      </div>
      <!--滚动条-->
      <div class="scroll_bar" id="scroll_bar">
        <!--        小条-->
        <div class="scroll_bar_item" id="scroll_bar_item"></div>
      </div>
    </div>
  </div>
</template>
<script>
  /*安装
  * npm install @better-scroll/core --save
  * npm install @better-scroll/mouse-wheel --save
  * */
  /*引入better-scroll 支持鼠标滚动需要再安装下载 better-scroll插件 MouseWheel*/
  import BScroll from '@better-scroll/core';
  import MouseWheel from '@better-scroll/mouse-wheel';
  console.log(BScroll);
  // /*通过use使用插件*/
  BScroll.use(MouseWheel);
  export default {
    name: "wt-button-test",
    data() {
      return {};
    },
    mounted() {
      /*获取滚动条*/
      let scrollBar = document.querySelector("#scroll_bar");
      /*获取滚动条小条*/
      let scrollBarItem = document.querySelector("#scroll_bar_item");
      /*获取滚动条小条可移动最大距离*/
      let barScrollHeight = scrollBar.offsetHeight - scrollBarItem.offsetHeight;
      /*获取内容盒子*/
      let scrollCon = document.querySelector("#scroll_con");
      /*获取展示盒子*/
      let scrollWarper = document.querySelector("#scroll_warper");
      /*获取内容盒子可移动最大距离*/
      let ConScrollHeight = scrollCon.scrollHeight - scrollWarper.getBoundingClientRect().height;
      //创建实例
      let scroll = BScroll(this.$refs.scrollWarper, {
        scrollY: true,//Y轴滚动
        bounce: false,//触顶底回弹
        mouseWheel: true,//开启鼠标滚动，可设为{}并配置
        probeType: 3//监听滚动
      });

      //鼠标滚动进度条滚动
      function onScroll(pos) {
        //获取内容盒子滚动距离
        let top = Math.abs(pos.y);
        /*计算比例  已滚动距离 / 最大滚动距离     */
        let scale = top / ConScrollHeight;
        /*设置小条的位置       比例 * 小条最大滚动距离    */
        scrollBarItem.style.top = scale * barScrollHeight + 'px';
      }
      // 监听当前实例上的钩子函数。如：scroll、scrollEnd 等。
      scroll.on('scroll', onScroll);
      //滚动条点击移动
      scrollBarItem.onmousedown = function (ev) {
        let e = ev || event;
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          window.event.returnValue = false;
        }
        let bct = e.clientY - scrollBarItem.offsetTop;
        document.onmousemove = function (e) {
          let ev = e || event;
          let top = ev.clientY - bct;

          top = top <= 0 ? 0 : top;
          top = top >= barScrollHeight ? barScrollHeight : top;
          let scale = -(top / barScrollHeight);
          scrollBarItem.style.top = top + 'px';
          /*设置内容盒子滚动距离*/
          /*scrollTo(x, y, time, easing, extraTransform)*/
          scroll.scrollTo(0, scale * ConScrollHeight);
        };
      };
      // 鼠标抬起取消移动事件
      document.onmouseup = function () {
        document.onmousemove = null;
      };
    },
    methods: {}
  };
</script>
<style scoped>
  body {height: 3000px;padding: 100px}

  .scroll_box {
    width: 320px;
    height: 200px;
    display: flex;
  }

  .scroll_warper {
    width: 300px;
    height: 200px;
    overflow: hidden;
  }

  .scroll_bar {
    height: 100%;
    width: 5px;
    background-color: #1B1B1B;
    position: relative;
    right: 0;
    top: 0;
    border-radius: 5px;
  }

  .scroll_bar_item {
    position: absolute;
    height: 20px;
    width: 5px;
    background-color: red;
    border-radius: 5px;
  }
</style>
