<!-- <template>
    <div class="card card-body">
        <h2>Members</h2>
        <p>이 컴포넌트에서 요청된 경로 : {{ currentRoute.fullPath }}</p>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';   //바로this를 쓸수 있었던 옵션api때와는 달리, vue-router에서 제공하는 useRoute함수를 사용하여 리턴된currentRouter객체를 이용해야함. 
export default {
  name : "Members",
  setup(){
    const currentRoute = useRoute()
    return {currentRoute};

  }
}
</script> -->

<!-- //10.4 동적라우트 (교재323~324페이지 예제10-11); 이제 members.json을 임포트하여 데이터를 사용하도록, 컴포넌트 Members.vue와  MemberInfo.vue를 작성한다. -->
<template>
  <div class="members">
    <h2 class="m-4">이날치 멤버</h2>
    <div class="container">
      <div class="row">
        <div
          v-for="m in members"
          :key="m.id"
          class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2"
        >
          <router-link :to="'/members/'+m.id">  <!-- //라우터링크: 멤버 목록에서 특정 멤버의 이름을 클릭했을 때, Vue가 그 멤버의 정보를 자세히 보여주는 페이지로 안내하는 역할; -->
                                                <!-- :to="'/members/'+m.id"는 각 멤버마다 서로 다른 고유한 URL을 만들어주는 역할을 함. -->
            <img
              class="img-thumbnail"
              style="width: 90px; height: 110px"
              :src="m.photo"
              :title="m.name"
            /><br />
            <h6 class="display-7">{{ m.name }}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import members from '@/members.json'; //members.json을 임포트

export default {
  name: 'Members',
  data() {
    return {members};
  },
};
</script>

<style scoped></style>
