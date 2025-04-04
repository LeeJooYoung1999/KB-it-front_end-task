<!-- 슬라이드3: setup 함수를사용하는 Calc컴포넌트를 정의하세요. -->

<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />
  </div>
</template>

<script>
import {ref} from 'vue'  // ref는 중괄호 처리함 주의
export default {
  name: 'Calc',
  setup (){
    const x = ref(10);  //10으로 초기화
    const y = ref(20);  //20으로 초기화
    return {x,y};
  }
};
</script>

