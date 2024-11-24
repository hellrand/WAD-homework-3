import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Default Title'; // Use default title if meta.title is not set
    next();
  });
  
createApp(App).use(store).use(router).mount('#app')
