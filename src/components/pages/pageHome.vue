<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from 'common/header'
import Footer from 'common/footer'
export default{
    components:{
        Header,
        Footer,
        },
    name:'home',
    data(){
        return{
            activeIndex:"1-1",
        }
    },
    mounted(){
         new this.$wow.WOW({
             live:true
         }).init()
    },
    methods:{
    }
}
</script>