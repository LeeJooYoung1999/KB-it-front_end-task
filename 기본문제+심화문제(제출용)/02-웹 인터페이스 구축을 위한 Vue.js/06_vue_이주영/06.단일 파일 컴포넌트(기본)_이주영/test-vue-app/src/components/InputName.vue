<!-- 다음을 만족하는 InputName 컴포넌트를 정의하세요
           - 컴포넌트의 모양은 슬라이드9처럼 구성할것.
           - 이벤트발신버튼을 클릭하면 nameChangedHandler()함수를 호출한다.
           - 이벤트 명은 'nameChanged', 이벤트 인자는 'name' 
           - App4.vue 에서 이벤트로 전달된 데이터를 출력하도록 한다.-->
<template>
  <div class="inputname">
    이름 : <input type="text" v-model="name" />     <!-- // 문제에서 요구되는것이 양방향 데이터 바인딩이므로, v-model을 이용해 이벤트와 바인딩해준다.  -->
                                                    <!-- // 이때 이벤트 인자는 주어진대로 'name'  -->
        <button @click="$emit('nameChanged', {name})">이벤트발신</button>   <!-- 자식컴포넌트가 부모에게 사용자 정의 이벤트를 발신emit하여 정보를 전달함. -->
  </div>
</template>

<script>
export default {
  name: 'InputName',
  emits : {     
    nameChanged: (e) => {   //슬라이드10: nameChanged이벤트에 유효성 검사를 추가한다.
        return e.name&&typeof(e.name) === "string"&&e.name.trim().length >=3   //name값이 존재할것 , name값의 타입은 문자열일것, name값의 길이가 3이상일 것.
        ? true: false
    }
  },
  data() {
    return {
        name: ""   //이벤트인자인 name을 정의
    };
  },
};
</script>

<style>
.inputname{
    border: 1px solid gray;
    padding: 5px;
}
</style>


    