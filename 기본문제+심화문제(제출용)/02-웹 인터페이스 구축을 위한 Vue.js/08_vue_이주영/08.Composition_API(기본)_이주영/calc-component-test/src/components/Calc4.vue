<!-- 슬라이드9: Calc4 컴포넌트를 다음처럼 정의하고, 필요한 경우 코드를 완성하세요
                  -  버튼을 제거하고, x,y값을 입력한 경우 자동으로 결과가 계산됨.-->

<template>
  <div>
    X : <input type="text" v-model.number="state.x" /> <br />
    Y : <input type="text" v-model.number="state.y" /> <br />
    <div>결과 : {{ result }}</div>   
  </div>
</template>
<script>
 import { reactive, computed   } from 'vue';  //computed를 밑에서 연산하는데 써야하니 임포트
 export default {
 name: 'Calc4',
 setup() {
 const state = reactive({ x: 10, y: 20 });
 const result =   computed(()=>{
   return state.x + state.y
 })    ;
 return  {result, state}    ;
},
 };
</script>
