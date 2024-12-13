import axios, { AxiosInstance } from "axios";

export const BASE_URL = "https://api.nexovpn.net";

//  axios تنظیمات مشترک
const createAxiosInstance = (
  controller?: AbortController,
  customHeaders?: object
): AxiosInstance => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    ...customHeaders,
  };

  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 90000,
    headers,
    signal: controller?.signal,
  });

  return instance;
};

export const postMethod = async (
    endpoint: string,
    body: FormData | object,
    newHeader?: object,
    controller?: AbortController,
    onUploadProgress?: any// Added parameter
  ) => {
    const isFormData = body instanceof FormData;
    const axiosInstance = createAxiosInstance(controller, {
      ...newHeader,
      ...(isFormData ? { "Content-Type": "multipart/form-data" } : {}),
    });
  
    try {
      const response = await axiosInstance.post(endpoint, body, {
        onUploadProgress, // Include progress tracking
      });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  };
  
// متد GET
export const getMethod = async (
  endpoint: string,
  controller?: AbortController
) => {
  const axiosInstance = createAxiosInstance(controller);
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
export const getMethodGeneric = async <T,>(
  endpoint: string,
  controller?: AbortController
): Promise<T | undefined> => {
  const axiosInstance = createAxiosInstance(controller);
  try {
    const response = await axiosInstance.get<T>(endpoint);
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined; // در صورت خطا، خروجی به صورت `undefined`
  }
};
// تابع مشترک برای مدیریت خطاها
const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      console.log("Server error:", error.response.status);
      console.log("Error data:", error.response.data);
    } else if (error.request) {
      console.log("Network error:", error.request);
    }
  } else {
    console.log("Unexpected error:", (error as Error).message);
  }
};
export interface ApiResponseWithData<T> {
  isSuccess: boolean;
  data: T;
  message: string;
}

export interface ApiResponse {
  isSuccess: boolean;
  data: [];
  message: string;
}