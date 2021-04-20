<template>
    <div style="width:100%;">
        <!-- <el-row>
            <el-col :span="9" class="flex-center">
            <div class="icon">
                <img src="~image/1.png" alt="">
                <span>上海鸣野信息科技</span>
            </div>
            </el-col> 
            <el-col :span="12" class="spans flex-center">
                <router-link to='/indexHome'>网站首页</router-link>
                <router-link to='/pageHome/about'>关于我们</router-link>
                <router-link to="/pageHome/product">产品展示</router-link>
                <router-link to='/pageHome/partner'>合作伙伴</router-link>
                <router-link to='/pageHome/news'>行业资讯</router-link>
                <router-link to='/pageHome/connect'>联系我们</router-link>
            </el-col>
        </el-row> -->
        <div class="solvetab"> 
            <div :class="{'tab':true,'flex-center':true,'scroll':barshow}">
                <div class="icon"  style="width:30%;">
                    <img src="~image/1.png" alt="">
                    <span>上海鸣野信息科技</span>
                </div>      
                <div class="spans flex-center" style="width:60%">
                    <router-link to='/indexHome'>网站首页</router-link>
                    <router-link to='/pageHome/about'>关于我们</router-link>
                    <router-link to="/pageHome/product">产品展示</router-link>
                    <router-link to='/pageHome/partner'>合作伙伴</router-link>
                    <router-link to='/pageHome/news'>行业资讯</router-link>
                    <router-link to='/pageHome/connect'>联系我们</router-link>
                </div>
            </div>
        </div> 
    </div>
</template>
<script type="text/javascript">
export default {
    data(){
        return{
            barshow:false,
        }
    },
    created(){
    },
    mounted(){
        window.addEventListener('scroll',this.scrollFun)
    },
    methods:{
        scrollFun(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let tab = document.getElementsByClassName("tab")
        if(scrollTop >=100){
            // tab[0].style.background = "#fff";
            this.barshow = true
        }else{
            tab[0].style.background = ""
            this.barshow = false
        }
        },
    }
}
</script>
<style>
img{
    width: 50px;
    height: 50px;
}
.solvetab{
    height: 80px;
    width: 100%;
}
.tab{
    width:100%;
    height: 100px;
    position: fixed;
    top: 0;
    z-index: 999;
    transition: background-color .5s linear;
}
.spans{
    height:150px;
}
.spans a{
    color: #dbe9f0;
    text-decoration: none;
    align-self: center;
    font-weight:550;
    margin:5px ;
    flex: 1;
    height: 35px;
    line-height:35px;
    letter-spacing: 2px;
    text-align: center;
}
.scroll{
    background-color: rgba(255, 255, 255, 1);
}
.scroll .icon{
    color: #1661ab;
}
.scroll a{
    color: #1661ab;
}
.spans a:hover{
    border-radius: 20px;
    font-size: 17px;
    border: 2px solid #2775b6;
    border-radius: 20px;
    background-color: #fff;
    color:#1661ab;
}
.spans .router-link-active {
    background-color:#d0dfe6;
    text-decoration: none;
    font-size: 17px;
    border: 2px solid #2775b6;
    border-radius: 20px;
    background-color: #fff;
    color:#1661ab;
}
</style>
