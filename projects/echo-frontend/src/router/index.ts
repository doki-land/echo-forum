import type {RouteRecordRaw} from 'vue-router'
import {createRouter, createWebHistory} from 'vue-router'
import {PostDetail, PostList, UserList} from "@/components";
import HomePage from '@/views/HomePage.vue';
import CategoryPage from '@/views/CategoryPage.vue';
import AdminLayout from '@/views/admin/AdminLayout.vue';
import AdminPageList from '@/views/admin/PageList.vue';
import AdminUserList from '@/views/admin/UserList.vue';
import UserProfile from "@/views/user/UserProfile.vue";
import CategoryAll from '@/views/CategoryAll.vue';
import CategoryList from '@/views/admin/CategoryList.vue';
import TopicList from "@/views/admin/TopicList.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/c',
        component: CategoryAll
    },
    {
        path: '/c/:category_link',
        component: CategoryPage
    },
    {
        path: '/users',
        component: UserList
    },
    {
        path: '/posts',
        component: PostList
    },
    {
        path: '/@:user_id',
        component: UserProfile
    },
    {
        path: '/u/:user_id',
        component: UserProfile
    },
    {
        path: '/posts/:id',
        component: PostDetail
    },
    {
        path: '/admin',
        component: AdminLayout,
        children: [
            {
                path: 'pages',
                name: 'PageAdmin',
                component: AdminPageList
            },
            {
                path: 'users',
                name: 'UserAdmin',
                component: AdminUserList
            },
            {
                path: 'categories',
                name: 'CategoryAdmin',
                component: CategoryList
            },
            {
                path: 'topics',
                name: 'TopicAdmin',
                component: TopicList
            }
        ]
    }
]

export const echoRouter = createRouter({
    history: createWebHistory(),
    routes
})

export default echoRouter;