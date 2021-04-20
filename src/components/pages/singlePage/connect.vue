<template>
    <div>
      <div class="flex-center title wow fadeInDown">CONTACT US</div>
      <div class="flex-center">
        <div class="connect wow fadeInDown">
            <div class="wow swing" >
                  <!-- <img src="~image/position.png" alt="" style="width:25px;height:25px;"> -->
                  <div class="connect-title" style="text-align:left!important">联系我们</div>
                  <div class="text " >
                      <ul>
                          <li >
                            联系人：李女士
                          </li>
                          <li>手机：13391389262</li>
                          <li> 电子邮箱：lx@knewcode.com</li>
                          <li> 公司地址：上海市闵行区紫竹科学园区紫月路506号2号楼三楼</li>
                          <li> 微信：
                          </li>
                          <img style="width:180px;height:180px;margin-left:60px;margin-top:-23px" src="~image/wx.jpg">
                      </ul>
                  </div>
            </div>
            <div>

            </div>
        </div>
        <!-- 地图 -->
        <div class="amap-page-container wow swing" >
              <el-amap vid="amapDemo" :center="center" :zoom="zoom" class="amap-demo">
              <el-amap-marker :position="marker.position" :title='marker.title' :label='marker.label'  :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
              </el-amap>
          </div>
      </div>
    </div>
</template>
<script>
export default{
    name:'connect',
    data(){
      return {
        zoom: 16,
        center: [121.457286,31.018851],
        marker: {
          position: [121.457286,31.018851],
          title:"上海鸣野信息科技",
          label:{
            content:"上海鸣野信息科技",
          }
        },
      };
    },
   mounted(){
      new this.$wow.WOW({
          live:true
      }).init()
    },
}
</script>
<style >
.text{
    text-align: left !important;
    font-size: 18px;
    line-height: 25px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.connect-title{
  font-size: 26px;
  font-weight: bold;
  margin-left: 43px;
  position: relative;
}
.connect-title:after{
  content: " ";
  display: block;
  position: absolute;
  height: 6px;
  width: 40px;
  border-bottom:solid 3px #1661ab;
}
.connect{
  width: 550px;
  height:400px;
  margin: 0 10px;
}
.el-vue-amap-container.amap-demo{
    width: 500px;
    height: 400px;
}
</style>