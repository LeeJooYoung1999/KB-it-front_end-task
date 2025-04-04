<!-- 슬라이드7: Calc3 컴포넌트를 다음처럼 정의하고, 필요한 경우 코드를 완성하세요 -->

<template>
  <div>
    X : <input type="text" v-model.number="state.x" /><br />  <!-- //reactive는 state동반 -->
    Y : <input type="text" v-model.number="state.y" /><br />  <!-- //reactive는 state동반 -->
    <button @click="calcAdd">계산</button><br />
    <div>결과 : {{ state.result }}</div> <!-- //reactive는 state동반 -->
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'Calc3',
  setup() {
    const state = reactive({x:10, y:20, result:30});

    const calcAdd = () => {
      state.result = state.x + state.y;
    };
    return { state, calcAdd };
  },
};
</script>
