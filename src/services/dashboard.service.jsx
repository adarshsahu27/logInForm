import axiosInstance from "../utils/axios";

const DashboardService = async () => {
  try {
    const response = await axiosInstance.get("users?page=2");
    return Promise.resolve({
      isSuccess: true,
      data: response.data.data,
      message: "Welcome to Dashboard",
    });
  } catch (err) {
    console.log(err);
    return Promise.resolve({
      isSuccess: false,
      data: null,
      message: "Please Input valid data",
    });
  }
};
export { DashboardService };
