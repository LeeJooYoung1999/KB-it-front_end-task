<!-- Child1, Child2, Child3 컴포넌트의 내용을 다음처럼 작성하세요. 
                                        - 각 컴포넌트의 이름 출력 -->
<!-- 슬라이드6: Child3.vue을 <style>을 module로 설정한 경우 다음 코드를완성하세요. -->
<template>
    <!-- <div class="child"></div> -->
    <div :class="$style.child"></div>
  </template>

<script>
export default {
  name: 'Child3',
  created(){
    console.log(this.$style)
  }
}
</script>



<style module>
.child{
    background-color: orange;
    border: 1px solid black;
    margin: 1.5em;
    padding: 1.0em;
}
</style>