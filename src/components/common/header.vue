
<template>
    <div class="backimg" :style="{backgroundImage:'url('+require(`image/index-image/tech${i}.jpg`)}">
        <tab></tab>
        <div style="height:100px"></div>
        <div>
            <section class="flex-center section bg-home home-half">
            <div >
                <h4 class="home-small-title">MingYe Technology</h4>
                <h1 class="home-title animate__animated animate__fadeInDown">Your request is the direction of our efforts.</h1>
                <h1 class="home-title">让客户满意，是我们最终的追求。</h1>
            </div>
            <div class="wave-effect wave-anim">
            <div class="waves-shape shape-one">
                <div
                class="wave wave-one"
                ></div>
            </div>
            <div class="waves-shape shape-two">
                <div
                class="wave wave-two"
                ></div>
            </div>
            <div class="waves-shape shape-three">
                <div
                class="wave wave-three"
                ></div>
            </div>
            </div>
            </section>
        </div>
    </div>
</template>
<script>
import tab from 'common/tab'
export default {
    name:'Header',
    components:{
        tab
    },
    data(){
        return{
        i:4,
        }
    },
    created(){
        // setInterval(()=>{
        //     this.i++;
        //     if(this.i>4)this.i=1
        // },5000)
    },
    mounted(){
    }
}
</script>
<style scope>
.backimg{
background-repeat: no-repeat;
background-size: cover;
}
</style>


