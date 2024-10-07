import axios from "axios";
import queryString from "query-string";
import Cookies from 'js-cookie'

const AppAPIInstance = axios.create({
  baseURL: `https://backend.api-staging.mythaco.vn/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

AppAPIInstance.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

AppAPIInstance.interceptors.response.use(
  (response) => {
    return response.data?.result ?? (response.data || null);
  },
  async (error) => {
    console.log(error);
    const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const refreshToken = Cookies.get('refreshToken');

    try {
      const newToken = await axios.post('/api/refresh-token', { refreshToken });
      Cookies.set('token', newToken.data.token, { expires: 7 });
      originalRequest.headers['Authorization'] = `Bearer ${newToken.data.token}`;
      return axios(originalRequest);
    } catch (refreshError) {
      router.push('/login');
      return Promise.reject(refreshError);
    }
 }
        return Promise.reject(error);
      }
);

export default AppAPIInstance;
