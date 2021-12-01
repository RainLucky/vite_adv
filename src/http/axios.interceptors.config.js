import axiosInstance from ".";

/*
 * @Description: 
 * @Version: 2.0
 * @Author: Rain
 * @Date: 2021-11-25 10:28:24
 * @LastEditiors: Rain
 * @LastEditTime: 2021-11-25 15:12:13
 */
export const setInterceptors = (axiosInstance) => {
    // 请求拦截
    axiosInstance.interceptors.request.use(request => {
        console.log('request', request)
        return request;
    }, error => Promise.reject(error));

    // 响应拦截
    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        return Promise.reject(error.response);
    })
};