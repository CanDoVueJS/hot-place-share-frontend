import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from '@/components/AppHeader'
import Signup from '@/pages/Signup'
import Signin from '@/pages/Signin'
import CommunityList from '@/pages/CommunityList'
import PostCreatePage from '@/pages/PostCreatePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CommunityList',
      components: {
        header: AppHeader,
        default: CommunityList
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/post/create',
      name: 'BoardCreate',
      component: PostCreatePage
    }
  ]
})
