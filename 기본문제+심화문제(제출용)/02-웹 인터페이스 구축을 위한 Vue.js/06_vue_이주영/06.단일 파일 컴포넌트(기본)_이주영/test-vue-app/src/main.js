import { createApp } from 'vue'
// import App from './App.vue'

//슬라이드4: CheckboxItem을 전역컴포넌트로 설정하세요
// import CheckboxItem from './components/CheckboxItem.vue'

//슬라이드7: 배열요소 하나를 idol이라는 속성으로 받아서 처리하도록 CheckboxItem2를 정의하고, App2.vue에서 운영해보세요
import App from './App2.vue'

//슬라이드9: InputName컴포넌트를 수신받아 적용하는 App4.vue를 작성하라.
// import App from './App4.vue'

import "./assets/main.css"
// createApp(App).component('CheckboxItem',CheckboxItem).mount('#app')
createApp(App).mount('#app')
