<!-- 배열요소하나를 idol이라는 속성으로 받아서 처리하도록 CheckboxItem2를정의하고, 
App2.vue에서 운영해보세요. -->

<template>
  <div>
    <h2>관심있는 K-POP 가수?</h2>
    <hr />
    <ul>
      <CheckboxItem v-for="idol in idols" :key="idol.id" :idol="idol" />
    </ul>
  </div>
</template>
<script>
import CheckboxItem from './components/CheckboxItem2.vue';
export default {
  name: 'App',
  components: { CheckboxItem },
  data() {
    return {
      idols: [
        { id: 1, name: 'BTS', checked: true },
        { id: 2, name: 'Black Pink', checked: false },
        { id: 3, name: 'EXO', checked: false },
        { id: 4, name: 'ITZY', checked: false },]}}
};
</script>
