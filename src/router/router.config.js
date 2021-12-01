/*
 * @Description: 
 * @Version: 2.0
 * @Author: Rain
 * @Date: 2021-11-25 09:46:28
 * @LastEditiors: Rain
 * @LastEditTime: 2021-11-25 11:42:13
 */
export default [{
        path: '/',
        name: 'root',
        redirect: '/root',
        component: () => import('../App.vue'),
        children: []
    },
    {
        path: '/btn',
        name: 'btn',
        component: () => import('../views/btn.vue'),
    },
    {
        path: '/dragger_upload',
        name: 'dragger_upload',
        component: () => import('../views/dragger_upload.vue'),
    }
]