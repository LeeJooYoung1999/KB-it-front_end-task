<!-- 슬라이드5:  Calc2 컴포넌트를다음처럼정의하고, 필요한경우코드를완성하세요. -->

<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />
    <button @click="calcAdd">계산</button><br />
    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'; // ref는 중괄호 처리함 주의

export default {
  name: 'Calc2',
  setup() {
    const x = ref(10); //10으로 초기화
    const y = ref(20); //20으로 초기화
    const result = ref(30);

    const calcAdd = () => {
      result.value = x.value + y.value;
    };
    return { x, y };
  },
};
</script>
