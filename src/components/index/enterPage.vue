<template>
    <div class="load">
      <div class="box flex-center">
        <div class="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <svg width='100%' height='50vh'>
        <symbol id="id">
            <text dy="1em" font-size='45px' style="font-family:'Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;'" >上海鸣野信息科技</text>
        </symbol>
        <use class="text" xlink:href="#id"></use>
        <use class="text" xlink:href="#id"></use>
        <use class="text" xlink:href="#id"></use>
        <use class="text" xlink:href="#id"></use>
        <use class="text" xlink:href="#id"></use>
      </svg>
    </div>
</template>
<script>
export default{
    name:'loading',
    mounted(){
        setTimeout(()=>{
            this.$router.push('/indexHome')
        },3000)
    }
}
</script>
<style>
.load body{
    width: 100%;
    height: 100%;
    background: #3a7bd5;
    background: -webkit-linear-gradient(to right, #3a6073, #3a7bd5);
    background: linear-gradient(to right, #3a6073, #3a7bd5); 
    position: relative;
}

svg{
  position: fixed;
  transform: translate(-12%,-10%);
  top: 50%;
  left: 50%;
}
.box{
  width: 50vw;
  height: 100vh;
  position: relative;
}
/* loading */
.loading{
    width: 150px;
    height: 15px;
    margin: 0 auto;
    margin-top:100px;
    position: absolute;
    right: 0;
    bottom: 40%;
    left: 90%;
}
.loading span{
    display: inline-block;
    width: 15px;
    height: 100%;
    margin-right: 5px;
    border-radius: 50%;
    background: #004e92;
    animation: load 1.04s ease infinite;
}
.loading span:last-child{
    margin-right: 0px; 
}
@keyframes load{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
.loading span:nth-child(1){
    animation-delay:0.13s;
}
.loading span:nth-child(2){
    animation-delay:0.26s;
}
.loading span:nth-child(3){
    animation-delay:0.39s;
}
.loading span:nth-child(4){
    animation-delay:0.52s;
}
.loading span:nth-child(5){
    animation-delay:0.65s;
}
/* svg */
.text {
      font: 1em/1 Arial Rounded MT Bold;
      text-transform: uppercase;
      fill: none;
      stroke-width: 1.5;
      stroke-linejoin: square;
      stroke-dasharray: 70 200;
      stroke-dashoffset: 0;
      animation: stroke 6s infinite;
		}
		.text:nth-child(5n + 1) {
		  stroke: #004e92;
		  animation-delay: -1.5s;
		}
		.text:nth-child(5n + 2) {
		  stroke: #004e92;
		  animation-delay: -3s;
		}
		.text:nth-child(5n + 3) {
		  stroke: #004e92;
		  animation-delay: -4.5s;
		}
		.text:nth-child(5n + 4) {
		  stroke: #004e92;
		  animation-delay: -6s;
		}
		.text:nth-child(5n + 5) {
		  stroke: #004e92;
		  animation-delay: -7.5s;
		}
		@keyframes stroke {
		  100% {
		    stroke-dashoffset: -400;
		  }
		}
</style>