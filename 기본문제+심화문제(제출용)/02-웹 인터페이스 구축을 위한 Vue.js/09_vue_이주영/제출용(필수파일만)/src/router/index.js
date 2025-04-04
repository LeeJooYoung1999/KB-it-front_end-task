//5개의 페이지 컴포넌트(따라서 5개아이템의 라우츠)를 라우팅할 수 있도록 vue-router객체를 생성하는 파일
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Members from '@/pages/Members.vue'
import MemberInfo from '@/pages/MemberInfo.vue'
import Videos from '@/pages/Videos.vue'

const router = createRouter({      //vue-router객체를 생성하기 위한 함수createRouter
    history: createWebHistory(),
    routes : [
        { path: '/', component: Home },     //path: 다음에 오는것= url경로 , component: 다음에 오는것 = 그 경로와 이을 vue컴포넌트
        { path: '/about', component: About },
        { path: '/Members', component: Members },
        { path: '/Members/:id(\\d+)', component: MemberInfo },   //MemberInfo페이지 컴포넌트를 라우터모듈에 추가하세요. (기본문제 슬라이드10) -> URL경로(Path)의 일부에 실행에 필요한 파라미터값(:id)을 포함하여 컴포넌트에 이용.
        { path: '/Videos', component: Videos },
    ]
})

export default router;