<!-- Child1, Child2, Child3 컴포넌트의 내용을 다음처럼 작성하세요. 
                                        - 각 컴포넌트의 이름 출력 -->
<template>
    <div class="child"></div>
  </template>

<script>
export default {
  name: 'Child2',
}
</script>


<!-- Child1, Child2의 <style>을 <style scoped>로 변경하고, 브라우저콘솔의 DOM을 확인하세요. -->
<style scoped>
.child{
    background-color: blue;
    border: 1px solid black;
    margin: 1.5em;
    padding: 1.0em;
}
</style>