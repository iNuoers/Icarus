import Vue from 'vue'
import Router from 'vue-router'

import AccountSignin from '@/components/account/signin.vue'
import AccountSignup from '@/components/account/signup.vue'

import Forum from '@/components/forum/forum.vue'
import ForumRecent from '@/components/forum/recent.vue'
import ForumBoard from '@/components/forum/board.vue'
import ForumTopcEdit from '@/components/forum/topic_edit.vue'

import Admin from '@/components/admin/admin.vue'
import AdminForumBoard from '@/components/admin/forum/board.vue'

import About from '@/components/about.vue'

Vue.use(Router)

export default new Router({
    routes: [
        // 登录
        {
            path: '/account/signin',
            name: 'account_signin',
            component: AccountSignin
        },
        // 注册
        {
            path: '/account/signup',
            name: 'account_signup',
            component: AccountSignup
        },

        // 主页面
        {
            path: '/',
            name: 'forum',
            component: Forum
        },
        // 最近发布
        {
            path: '/recent',
            name: 'forum_recent',
            component: ForumRecent
        },
        // 板块页面
        {
            path: '/board/:id(\\S+)/:name(.+)?',
            name: 'forum_board',
            component: ForumBoard
        },
        // 主题新建
        {
            path: '/forum/topic/new',
            name: 'forum_topic_new',
            component: ForumTopcEdit
        },
        // 主题编辑
        {
            path: '/forum/topic/edit/:id(\\S+)',
            name: 'forum_topic_edit',
            component: ForumTopcEdit
        },

        // 管理
        {
            path: '/admin',
            name: 'admin',
            component: Admin
        },
        // 管理 - 板块
        {
            path: '/admin/forum/board',
            name: 'admin_forum_board',
            component: AdminForumBoard
        },

        // 关于
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
