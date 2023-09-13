import axiosInstance from "../utils/axios";

const SignIn = async (formData) => {
  try {
    const response = await axiosInstance.post("login", {
      email: formData.email,
      password: formData.password,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
export { SignIn };
