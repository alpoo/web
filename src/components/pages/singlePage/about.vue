<template>
    <div>
        <div class="flex-center title wow fadeInDown" >
            OUR COMPANY
        </div>
        <el-row >
            <el-col :span="10" :offset="3" >
                <!-- data-wow-delay="0.5s" -->
                <div class="half_center text"  >
                    <h3>关于我们 - 上海鸣野信息科技有限公司</h3>
                    <p>
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
            </el-col>
            <el-col :span="8">
                <div data-wow-delay="500ms" class="half_center img wow fadeIn" style="background:url('~image/about.jpg');">
                    <img class="wow fadeIn" src="~image/about.jpg" />
                </div>
            </el-col>
        </el-row>
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
        }
    }
}
</script>
<style>
/* font-family: Comic Sans MS, 'Comic Sans MS', Arial, sans-serif;*/
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