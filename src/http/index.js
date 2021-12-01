/*
 * @Description: 
 * @Version: 2.0
 * @Author: Rain
 * @Date: 2021-11-25 10:27:42
 * @LastEditiors: Rain
 * @LastEditTime: 2021-11-25 10:35:33
 */
import axios from "axios";
import config from './axios.config'
import {
    setInterceptors
} from './axios.interceptors.config'
const axiosInstance = axios.create(config)

setInterceptors(axiosInstance)

export default axiosInstance