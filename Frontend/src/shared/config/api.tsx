import axiosInstance from "./axiosInstance";

export const login = (data: { username: string; password: string }) => {
  return axiosInstance.post("/auth/login", data);
};

export const logout = () => {
  return axiosInstance.post("/auth/logout");
};

export const Register = (data: {
  email: string;
  username: string;
  password: string;
}) => {
  return axiosInstance.post("/auth/register", data);
};

export const getAllUser = (searchTerm = "") => {
  return axiosInstance.get("/auth/users", {
    params: { search: searchTerm },
  });
};
