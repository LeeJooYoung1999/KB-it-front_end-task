<!-- //10.4 동적라우트 (교재320페이지) -->
<!-- //MemberInfo 페이지컴포넌트를 추가하세요. -->
<!--
<template>
  <div class="" card card-body>
    <h2>Member Info</h2>
    <div>
      경로 패턴 : /members/:id<br />
      요청경로 : {{ currentRoute.path }}<br />
      id 값 : {{ currentRoute.params.id }}  //컴포넌트에서 동적 파라미터 정보 id에 접근하기 위해, useRoute로 획득한 currentRoute객체의 params 정보 이용. 
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
  name: 'MemberInfo',
  setup() {
    const currentRoute = useRoute();    //useRoute로 획득한 currentRoute객체
    return { currentRoute };
  },
};
</script>

<style scoped></style>
-->
<!-- //10.4 동적라우트 (교재323~324페이지 예제10-12); 이제 members.json을 임포트하여 데이터를 사용하도록, 컴포넌트 Members.vue와  MemberInfo.vue를 작성한다. -->
<!-- 기본문제 슬라이드14: 앞에서 찾은 멤버 정보를 다음처럼 출력되도록 MemberInfo의 템플릿파트를 작성하세요. -->
 
<template>
    <div className="mt-5">
      <img :src="member.photo" class="img" />
      <h4 class="mt-2">{{member.name}}({{member.role}})</h4>
      <p>{{member.desc}} </p>
      <a v-if="member.insta && member.insta !== ''" 
          class="fa fa-instagram m-1" :href="member.insta"></a>
      <a v-if="member.facebook && member.facebook !== ''" 
          class="fa fa-facebook m-1" :href="member.facebook"></a>
      <a v-if="member.youtube && member.youtube !== ''" 
          class="fa fa-youtube m-1" :href="member.youtube"></a>
      <br /><br />
      <router-link to="/members">멤버 목록으로</router-link>
    </div>
</template>
  
<script>
import { useRoute } from 'vue-router'
import members from '@/members.json'

export default {
    name : "MemberInfo",
    setup() {
        const currentRoute = useRoute()
        const id = parseInt(currentRoute.params.id, 10);
        const member = members.find((m)=>m.id === id)
        return { member }
    }
}
</script> 
