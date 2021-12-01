/*
 * @Description: 
 * @Version: 2.0
 * @Author: Rain
 * @Date: 2021-11-25 09:46:21
 * @LastEditiors: Rain
 * @LastEditTime: 2021-11-25 09:50:57
 */
import {
    createRouter,
    createWebHistory
} from "vue-router";
import routes from './router.config';

export const router = createRouter({
    history: createWebHistory(), //createWebHistory => 不带#好，需后端支持 createWebHistory 带#号
    routes
})