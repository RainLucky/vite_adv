/*
 * @Description: 
 * @Version: 2.0
 * @Author: Rain
 * @Date: 2021-11-25 09:13:47
 * @LastEditiors: Rain
 * @LastEditTime: 2021-11-25 10:20:25
 */
import {
    createApp
} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import {
    router
} from './router';
import store from './store';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Antd);
app.mount('#app');