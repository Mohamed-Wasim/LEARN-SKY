import axios from "axios";

const baseUrl = "http://localhost:3000";

class HttpService {
  constructor() {
    const instance = axios.create({ baseURL: baseUrl, withCredentials: true });

    async function clearData() {
      window.location.replace("/login");
    }
    // Add request interceptor
    instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("jwtToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add response interceptor
    instance.interceptors.response.use(
      (response) => {
        // To disable the progressBar after response
        // store.dispatch(setIsApi(false));
        if (response.data.output) {
          return response.data.output;
        }

        return response.data;
      },
      (error) => {
        // Refresh the token if it's expired and retry the original request
        if (error?.response?.status === 401) {
          clearData();
        }
        return Promise.reject(error);
      }
    );

    this.instance = instance;
  }

  // Helper methods for HTTP requests (e.g., get, post, put, delete)
  async get(url, config) {
    return await this.instance.get(url, config);
  }

  async post(url, data, config) {
    return await this.instance.post(url, data, config);
  }

  async put(url, data, config) {
    return await this.instance.put(url, data, config);
  }

  async delete(url, config) {
    return await this.instance.delete(url, config);
  }
}

export default new HttpService();
