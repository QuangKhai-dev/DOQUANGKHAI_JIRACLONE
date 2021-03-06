import axios from 'axios';

export const DOMAIN = 'https://jiranew.cybersoft.edu.vn'

export const KEY_TOKEN_CYBERSOFT = 'TokenCybersoft';
export const KEY_AUTHORIZATION_CYBERSOFT = 'Authorization';

export const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0'

export const TOKEN_AUTH = 'Bearer ' + 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJxdWFuZ2toYWkwOTAxQGdtYWlsLmNvbSIsIm5iZiI6MTY0MDM5MDg0MCwiZXhwIjoxNjQwMzk0NDQwfQ.n30MFgD6VdaukRXw1q_SAQIerAILC5-XPyfCMsDkqyw'


//Cấu hình interceptor cho axios (Tất cả request gọi = axios đều được cấu hình) (1 dự án làm 1 duy nhất)
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000,
});

http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT, //qui định của cybersoft tất cả mọi request
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')  //Token mà người dùng đăng nhập (401 token không hợp lệ, 403 không đủ quyền truy cập)
    }
    return config;
}, (errors) => {
    return Promise.reject(errors)
})