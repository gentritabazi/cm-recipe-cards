// Import
import axios from "axios";

// Request Interceptor
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Backend error
      if (500 === error.response.status) {
        alert("There is something wrong on backend!");
      }

      // 404
      if (error.response.status == 404) {
        alert("Page not found!");
      }
    }

    return Promise.reject(error);
  },
);

// Export axios
export default axios;
