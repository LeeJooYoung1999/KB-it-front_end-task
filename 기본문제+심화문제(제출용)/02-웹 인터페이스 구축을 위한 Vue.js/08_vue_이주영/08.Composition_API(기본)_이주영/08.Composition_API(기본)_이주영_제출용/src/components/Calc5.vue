<!-- 슬라이드11: Calc5 컴포넌트를 다음처럼 정의하고, 필요한 경우 코드를 완성하세요
                  -  x의 값이 변경될때마다, 이전값과 새로운 값을 브라우저 콘솔에 출력.-->

<template>
  <div>
    x : <input type="text" v-model.number="x" />
    <br />
    결과 : {{ result }}
  </div>
</template>
<script>
import { ref, watch } from 'vue'; //x값의 변화를 감지해야하므로, 관찰자 옵션 watch사용 -> 임포트
export default {
  name: 'Calc5',
  setup() {
    const x = ref(0); // 0으로 초기화
    const result = ref(0); // 0으로 초기화
    // 필요한 경우 코드 추가
    watch(x, (current, old) => {
      console.log(`${old} ==> ${current}`);  //이전값과 새로운 값을 콘솔에 출력/ 작은따옴표' 아니고 백틱`사용해야함 주의.
      result.value = current * 2;         //ref사용 하므로, value속성 동반
    });
    return { x, result };
  },
};
</script>
