<!-- About.vue 페이지에현재url을출력하고, 라우터객체를콘솔에도출력하세요 -->
 
<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>이 컴포넌트에서 요청된 경로 : {{ $route.fullPath }}</p>  <!-- //About.vue 페이지에 현재url을출력하고, --> 
  </div>
</template>

<script>
export default {
  name: 'About',
  created(){
    console.log(this.$route)    //라우터객체를 콘솔에도출력하세요
  }
};
</script>
