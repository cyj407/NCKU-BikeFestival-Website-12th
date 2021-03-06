import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Parent from '@/components/Parent'
import News from '@/components/News'
import Department from '@/components/Department'
import Activity from '@/components/Activity'
import APP from '@/components/APP'
import SignUp from '@/components/SignUp'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro,
      meta: { transitionName: 'slide' }
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent,
      meta: { transitionName: 'slide' }
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      meta: { transitionName: 'slide' }
    },
    {
      path: '/department',
      name: 'Department',
      component: Department,
      meta: { transitionName: 'slide' }
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity,
      beforeEnter: function (to, from, next) {
        alert('敬請期待')
        next('/')
      }
    },
    {
      path: '/app',
      name: 'APP',
      component: APP,
      beforeEnter: function (to, from, next) {
        alert('敬請期待')
        next('/')
      }
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
