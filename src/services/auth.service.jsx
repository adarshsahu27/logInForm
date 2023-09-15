import axiosInstance from "../utils/axios";

const SignIn = async (formData) => {
  try {
    const response = await axiosInstance.post("login", {
      email: formData.email,
      password: formData.password,
    });
    return Promise.resolve({
      isSuccess: true,
      data: response.data,
      message: "Signin Successfull",
    });
  } catch (err) {
    console.log(err);
    return Promise.resolve({
      isSuccess: false,
      data: null,
      message: "Please Check your credentials",
    });
  }
};
const SignUp = async (formData) => {
  try {
    const response = await axiosInstance.post("register", {
      email: formData.email,
      password: formData.password,
    });
    return Promise.resolve({
      isSuccess: true,
      data: response.data,
      message: "Signup Successfull",
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
export { SignIn, SignUp };
