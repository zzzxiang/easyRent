import { createRouter, createWebHistory } from 'vue-router'
import index from '../index/index.vue'
import register from '../register/register.vue'
import login from '../login/login.vue'
import hot from '../index/components/hot.vue'
import all from '../index/components/all.vue'
import message from '../index/components/message.vue'
import me from '../index/components/me.vue'
import digital from '../otherComponents/digital.vue'
import office from '../otherComponents/office.vue'
import require from '../otherComponents/require.vue'
import renter from '../otherComponents/renter.vue'
import renting from '../otherComponents/renting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '', component: login },
    { path: '/login', component: login },
    {
      path: '/index', component: index,
      children: [
        { path: '', component: hot },
        { path: 'hot', component: hot },
        {
          path: 'all', component: all,
          children: [
            { path: '', component: digital },
            { path: 'digital', component: digital },
            { path: 'office', component: office },
          ]
        },
        { path: 'message', component: message },
        {
          path: 'me', component: me,
          children: [
            { path: '', component: renting },
            { path: 'require', component: require },
            { path: 'renter', component: renter },
            { path: 'renting', component: renting }
          ]
        }
      ]
    },
    { path: '/register', component: register }],
})

export default router
