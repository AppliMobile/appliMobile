import { createRouter, createWebHistory } from 'vue-router';


import App from '../App.vue'
import { createApp } from 'vue';



import LoginPage from '@/views/Login.vue'
import SignUp from '@/views/Register.vue'
import MyList from '@/views/TodoList.vue'
import Welcome from '@/views/HomePage.vue'




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    

    {path: '/', component: Welcome},
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignUp },
    { path: '/myList', component: MyList },
    
 

  ]
});


const app = createApp(App)

app.use(router);



export default router
