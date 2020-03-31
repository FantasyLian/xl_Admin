'use strict';

import Index from '@/components/Index'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'

const routes = [
    {
        path: '/Index',
        name: 'Index',
        meta: { title: '首页' },
        component: Index
    }, {
        path: '/',
        name: 'Login',
        meta: { title: '登录' },
        component: Login
    }, {
        path: '*',
        name: '404',
        meta: { title: '找不到页面' },
        component: NotFound
    }
]

export default routes;