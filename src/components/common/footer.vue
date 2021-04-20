<template>
    <div>
        <div class="bottom flex-center">
            <div class="bottomshow flex-center">
                <div class="bottom-item " >
                    <div class="bottom-title"> 
                <router-link to='/about'>关于我们</router-link>
                    </div>
                    <ul style="list-style:none">
                        <li>创新型企业</li>
                        <li>企业文化</li>
                        <li>竞争优势</li>
                    </ul>
                </div>
                  <div class="bottom-item">
                    <div class="bottom-title"> 
                <router-link to="/product">产品展示</router-link>
                    </div>
                    <ul style="list-style:none">
                        <li>定额系统</li>
                        <li>收费系统</li>
                        <li>上位机软件定制</li>
                    </ul>
                </div>
                <div class="bottom-item">
                    <div class="bottom-title"> 
                <router-link to='/partner'>合作伙伴</router-link>
                    </div>
                    <ul style="list-style:none">
                        <li>欧锐信息</li>
                        <li>中铁新能源</li>
                        <li>顺微电子科技</li>
                        <li>上海市供水管理处</li>
                        <li>等</li>
                    </ul>
                </div>
                  <div class="bottom-item">
                    <div class="bottom-title"> 
                <router-link to='/connect'>联系我们</router-link>
                    </div>
                    <ul style="list-style:none">
                        <li>
                            <img class="iconSize " src="~image/person.png">
                            联系人：李女士</li>
                        <li>
                        <img class="iconSize wow shakeX" src="~image/phone.png">
                            手机： 13391389262</li>
                    </ul>
                </div>
            </div>
        </div>
        <div style="text-align:center;background-color:#ddd;padding-bottom:5px;font-size:14px;border-top:solid 2px #ccc;padding-top:5px"> 沪ICP备15057179号</div>
    </div>  
</template>
<script>
export default{
    name:'Footer'
}
</script>
<style scoped>
.iconSize{
    width:15px;
    height: 15px;
    display: inline-block;
}
.bottom-item ul,li{
    /* list-style: none; */
    padding: 3px;
}
.bottom-item a{
    text-decoration: none;
    color: #707272;
}
.bottom-item a:hover{
    text-decoration:underline;
}
.bottom-item{
    flex: 1;
    height: 80%;
    margin:10px;

}
.bottom-title{
    margin: 10px;
    font-weight: bold;
}
.bottomshow{
    width:50%;
    height: 100%;
}
@media screen and (max-width:1500px) {
    .bottomshow{
    width:75%;
    height: 100%;
    }
}
.bottom{
    margin-top: 150px;
    height: 190px;
    background-color: #ddd;
    position: relative;
    font-size: 13px;
}
@media (max-width: 1024px){
    .icon{
        font-size: 23px;
    }
    .icon img{
        width:23px;
        height: 23px;
    }
    .spans{
        opacity: 0;
    }
}
</style>