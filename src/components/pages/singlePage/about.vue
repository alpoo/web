<template>
    <div>
        <div class="flex-center title wow fadeInDown" >
            OUR COMPANY
        </div>
        <!-- 关于我们 -->
        <el-row>
        <el-col :span="10" :offset="3" >
                <div class="connect-title" style="margin-bottom:50px;">关于我们 - 上海鸣野信息科技有限公司</div>
        </el-col>
        </el-row >
        <el-row  >
            <el-col :span="10" :offset="3" >
                <div class="wow fadeIn">
                    <div class="half_center text" data-wow-delay="200ms" >
                        <p style="padding-left:20px">
                            位于上海闵行紫竹科技园区，创新型软件技术企业。
                        </p>
                        <ul>
                            <li>
                                涵盖领域包括：水务、能源、软件定制、市政、工业制造、传媒、汽车电子等。
                            </li>
                            <br/>
                            <li>
                            为客户提供管理软件和上位机软件的软件开发、软件定制、技术咨询等业务，在行业具有良好的口碑，得到服务客户的信任和认可。
                            </li>
                            <br/>
                            <li>
                            随着国家倡导“中国制造2025”“工业4.0”智能制造，我们为客户提供水务系统定制管理软件、工业领域的非标自动化软件、PLC上位机软件、单片机上位机软件开发、上位机控制软件、上位机检测采集软件等、还有ECU汽车电子，智能设备、智能仪器仪表等行业上位机软件。
                            </li>
                            <br/>
                        </ul>
                    </div>  
                </div>
            </el-col>
            <el-col :span="7" :offset="1">
                <div data-wow-delay="500ms" class="half_center img wow fadeIn" style="background:url('~image/about.jpg');">
                    <img class="wow fadeIn" src="~image/about.jpg" />
                </div>
            </el-col>
        </el-row>
        <!-- 关于我们 -->
        <!-- 企业文化 -->
        <el-row>
        <el-col :span="10" :offset="3" >
                <div class="connect-title" style="margin-bottom:50px">企业文化</div>
        </el-col>
        </el-row>
        <el-row class="wow bounceIn">
            <el-col :span="9" :offset="3" class="culture">
                <div class="img-box about">
                    <img class='bg' src="~image/culture1.png"/>
                </div>
                    <img class="imgsize" src="~image/square.png">
            </el-col>
            <el-col :span="9" :offset="2" class="culture">
                <div class="slogan">
                    <i  class="fa fa-quote-left isize">创新</i>
                    <div class="txt">以自主创新为动力，不断推出更高品质的产品。</div>
                </div>
            </el-col>
        </el-row>
        <el-row class="wow bounceIn" style="margin-top:100px">
            <el-col :span="8" :offset="4" class="culture">
                <div class="slogan">
                    <i  class="fa fa-quote-left isize">求精</i>
                    <div class="txt">真评估用户反馈建议，从客户需求与利益出发，以改进服务。</div>
                </div>
            </el-col>
            <el-col :span="9" :offset="2" class="culture">
                <div class="img-box about dif">
                    <img class='bg' src="~image/culture2.png"/>
                </div>
                    <img class="difsize" src="~image/square.png">
            </el-col>
        </el-row>
        <el-row class="wow bounceIn" style="margin-top:100px">
            <el-col :span="9" :offset="3" class="culture">
                <div class="img-box about">
                    <img class='bg' src="~image/culture3.png"/>
                </div>
                    <img class="imgsize" src="~image/square.png">
            </el-col>
            <el-col :span="9" :offset="2" class="culture">
                <div class="slogan">
                    <i  class="fa fa-quote-left isize">共赢</i>
                    <div class="txt">用户也从中得到回报，与客户的互动合作推进了民族自动化软件的成长。</div>
                </div>
            </el-col>
        </el-row>
        <!-- 企业文化 -->

    </div>
</template>
<script>
export default{
    name:'about',
    data(){
        return{
            topTo:false,
        }
    },
    mounted(){
         new this.$wow.WOW({
             live:true
         }).init()
    },
    methods:{
        scrollTo(){
        },
    }
}
</script>
<style>
.slogan .txt{
    margin-top: 10px;
    line-height: 30px;
    font-size: 19px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-shadow: 1px 1px 2px #aac0db;
}
.slogan i{
    letter-spacing: 5px;
    font-size: 25px;
    background-image:linear-gradient(165deg, #085ac5, #f8f4f6);
    margin-right: 20px;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.imgsize{
    width: 35px;
    height: 35px;
    position: absolute;
    top: 28px;
    left:55%
}
.about{
    width: 80%;
    height: 100px;
    position: relative;
}
.about::before{
    content:'';
    height: 2px;
    width: 30%;
    background: #e2e1e1;
    position: absolute;
    top: 50px;
    right:-30%;
}

.dif::before{
    content:'';
    height: 2px;
    width: 26%;
    background: #e2e1e1;
    position: absolute;
    top: 50px;
    right:98%;
}
.difsize{
    width: 35px;
    height: 35px;
    position: absolute;
    top: 26px;
    right:45%;
}
.half_center{
    width:90%;
    height: 400px;
    margin: 0 auto;
}
.half_center.text{
    text-align: left !important;
    font-size: 17px;
    /* background: chocolate; */
    margin-top: -20px;
}
.half_center.img {
    width: 100%;
    height: 350px;
    background-repeat: no-repeat;
    /* background-size: contain; */
    background-position: center;
    float:right;
}
@media screen  and (max-width:1400px){
    .half_center{
    width:100%;
    height: 400px;
    margin: 0 auto;
  }
    .half_center.text{
    text-align: left !important;
    font-size: 16px;
  }
}
</style>