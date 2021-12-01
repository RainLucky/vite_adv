/*
 * @Description: 
 * @Version: 2.0
 * @Author: Rain
 * @Date: 2021-11-25 10:28:30
 * @LastEditiors: Rain
 * @LastEditTime: 2021-11-25 10:52:33
 */
import axiosInstance from "./index";

//请求接口封装
export const axiosGet = (params) => axiosInstance.post('/demo', params);