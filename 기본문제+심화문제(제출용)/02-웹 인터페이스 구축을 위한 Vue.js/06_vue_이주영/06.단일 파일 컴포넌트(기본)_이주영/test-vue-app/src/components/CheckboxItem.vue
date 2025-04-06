<!-- //슬라이드4:다음 그림과 같이 출력되도록 다음절차에 따라 코드를 완성하세요. -->
<template>
  <li>
    <!-- <input type="checkbox" v-model="checked">옵션1 -->
    <!-- <input type="checkbox" :checked="checked" /> {{ name }} -->
    <input type="checkbox" :checked="checked" />{{ id }} - {{ name }}
  </li>
</template>

<script>
export default {
  name: 'CheckboxItem',
  props: {
    id: [Number, String],
    name: {
      validator(v) {
        return typeof v !== 'string'
          ? false
          : v.trim().length >= 4
          ? true
          : false;
      },
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
