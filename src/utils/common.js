import { getLocalStorage } from "../Api/allApi";

export const isAuthenticated = () => {
  const getToken = getLocalStorage("apiToken");
  const getUser = getLocalStorage("user");
  return { token: getToken, user: getUser };
};
