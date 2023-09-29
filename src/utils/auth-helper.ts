import jwt_decode from "jwt-decode";
import { getCookie, removeCookie } from "typescript-cookie";

export const getCurrentUser = () => {
  const token = getCookie("auth");
  const user = jwt_decode(token ?? "");
  return user;
};

export const isValidToken = (token: string) => {
  const decodedToken: any = jwt_decode(token);
  const currentTime = Date.now() / 1000;

  return decodedToken?.exp > currentTime;
};

export const getAccessToken = () => {
  const token = getCookie("auth");
  return token;
};

export const isAuthenticated = () => {
  const token: any = getCookie("auth");
  return !!token;
};

export const removeToken = () => {
  removeCookie("auth");
};
