<template>
  <div class="container">
    <Header />
    <router-view></router-view>    <!-- //요청된 url경로 <->routes배열 비교하여, 매칭된 라우트의 컴포넌트를 "마운트"__ 교재316페이지 -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: { Header },
};
</script>
<style>
.container {
  text-align: center;
  margin-top: 10px;
}

/* - - - */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
 …
 .fa {
 padding: 5px;
 width: 30px;
 text-align: center;
 text-decoration: none;
 margin: 5px 2px;
 }
 .fa-facebook {
 background: #3b5998;
 color: white;
 }
 .fa-youtube {
 background: #bb0000;
 color: white;
 }
 .fa-instagram {
 background: #125688;
 color: white;
 }
</style>
