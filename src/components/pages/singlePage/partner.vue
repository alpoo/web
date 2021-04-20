<template>
    <div>
        <div class="flex-center title wow fadeInDown"> OUR PARTNTERS</div>
        <div class="partners">
            <div class="item wow fadeIn" data-wow-delay='200ms'>
                <img src='~image/partners/1.jpg'>
            </div>
            <div class="item wow fadeIn" data-wow-delay='200ms'>
                <img src='~image/partners/9.jpg'>
            </div>
            <div class="item wow fadeIn" data-wow-delay='200ms'>
                <img src='~image/partners/2.jpg'>
            </div>
            <div class="item wow fadeIn" data-wow-delay='400ms'>
                <img src='~image/partners/4.jpg'>
        </div>
        </div>
        <div class="partners">
        <div class="item wow fadeIn" data-wow-delay='600ms'>
                <img src='~image/partners/6.jpg'>
        </div>  
            <div class="item wow fadeIn" data-wow-delay='600ms'>
                <img src='~image/partners/7.jpg'>
        </div>
        <div class="item wow fadeIn" data-wow-delay='600ms'>
                <img src='~image/partners/8.jpg'>
        </div>
        <div class="item wow fadeIn" data-wow-delay='600ms'>
                <img src='~image/partners/3.jpg'>
        </div>
        <div class="item wow fadeIn" data-wow-delay='400ms'>
                <img src='~image/partners/5.jpg'>
        </div>
        </div>
            <!-- <div class="partners">
        
            </div> -->
     
    </div>
</template>
<script>
export default{
    name:'partner',
    mounted(){
     new this.$wow.WOW({
             live:true
         }).init()
    }
}
</script>
<style>
.title{
    letter-spacing: 2px;
    font-size: 23px;
    text-shadow: 2px 4px #ccc;;
    height: 120px;
    line-height: 120px;
}
.partners{
    height: 100px;
    width:70%;
    display: flex;
    margin: 20px auto;
}
.partners .item{
    flex: 1;
    margin: 5px;
    border:solid 1px #ccc;
}
.partners .item img{
    width: 100%;
    height: 100%;
}
.partners .item :hover{
    transform: scale(1.01);
    box-shadow: 0 0 8px 5px #ccc;
}
</style>