import { axiosInstance } from "./axiosInstance";

const fetchUsersData = () => {
  return axiosInstance.get("users?page=1");
};

export { fetchUsersData };
