import axios from "axios";

import { BASE_API_URL } from "../../../config/env.config";

const pluckData = <T>(wrapper: { data: T }) => wrapper.data;
const throwError = (e: Error) => {
  throw e;
};
const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
});

const HttpService = {
  get: <T = unknown>(path: string) =>
    axiosInstance.get<T>(path).then(pluckData).catch(throwError),

  post: <T = void>(path: string, data?: any) =>
    axiosInstance.post<T>(path, data).then(pluckData).catch(throwError),

  patch: <T = void>(path: string, data?: any) =>
    axiosInstance.patch<T>(path, data).then(pluckData).catch(throwError),

  put: <T = void>(path: string, data?: any) =>
    axiosInstance.put<T>(path, data).then(pluckData).catch(throwError),

  delete: <T = void>(path: string, data?: any) =>
    axiosInstance.delete<T>(path, data).then(pluckData).catch(throwError),
};

export default HttpService;
