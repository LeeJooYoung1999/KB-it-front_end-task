<!-- //App4에서 InputName컴포넌트로부터 이벤트로 전달된 데이터를 출력한다 -->

<template>
  <div>
    <h2>InputName: 이름을 입력하세요.</h2>
    <hr />

    <InputName @nameChanged="nameChangedHandler" /> <!-- 부모컴포넌트는 v-on디렉티브 이용하여, 자식이 emit한 event수신 -->
    <br />
    <h3>App 데이터: {{ parentName }}</h3>
  </div>
</template>
<script>
import InputName from './components/InputName.vue';
export default {
  name: 'App4',
  components: { InputName },
  data() {
    return { parentName:'' };
  },
  methods: {
    nameChangedHandler(e){
        this.parentName = e.name; //
    }
  }
};
</script>
