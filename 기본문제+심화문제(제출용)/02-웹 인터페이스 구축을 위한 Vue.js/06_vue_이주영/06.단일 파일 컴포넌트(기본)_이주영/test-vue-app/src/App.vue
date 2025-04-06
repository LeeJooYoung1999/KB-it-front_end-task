<template>
  <!-- <div>
    <h2>App 컴포넌트</h2>
    <hr />
    <CheckboxItem />
    <CheckboxItem />
    <CheckboxItem />
    <CheckboxItem />
  </div> -->

  <!-- App.vue에서다음과같은데이터옵션을추가하고, 이데이터수만큼CheckboxItem을생성한후 데이터를바인딩하세요. -->
  <div>
    <CheckboxItem
      v-for="idol in idols"
      :key="idol.id"
      :name="idol.name"
      :checked="(idol, checked)"
    />
  </div>
</template>

<script>
import CheckboxItem from './components/CheckboxItem.vue';

export default {
  name: 'App',
  components: { CheckboxItem },
  //App.vue에서 다음과 같은 데이터옵션을 추가하고, 이 데이터수만큼 CheckboxItem을 생성한 후 데이터를 바인딩하세요
  //CheckboxItem에 name, checked 속성을 추가하세요.
  data() {
    return {
      idols: [
        { id: 1, name: 'BTS', checked: true },
        { id: 2, name: 'Black Pink', checked: false },
        { id: 3, name: 'EXO', checked: false },
        { id: 4, name: 'ITZY', checked: false },
        // { id: 1, name: 'BTS', checked: true },
        // { id: 2, name: 'Black Pink' },
        // { id: 3, name: 'EXO' },
        // { id: 4, name: { spacial: 'ITZY' } },
        // { id: 4, name: 'ITZY' },
        // { id: 1, name: 'BTS', checked: true },
        // { id: 2, name: 'Black Pink', checked: false },
        // { id: 3, name: 'EXO', checked: false },
        // { id: 4, name: 'ITZY', checked: false },
      ],
    };
  },
};
</script>
