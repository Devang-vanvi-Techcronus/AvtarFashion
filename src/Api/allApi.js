import { API } from "./helper/backendAPi";
import { toast } from "react-toastify";

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};
export const clearLocalStorage = () => {
  return localStorage.clear();
};

export const postWithoutToken = (url, values) => {
  return fetch(API + url, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .catch((error) => toast.error(error?.response));
};
export const putWithoutToken = (url, values) => {
  return fetch(API + url, {
    method: "PUT",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .catch((error) => toast.error(error?.response));
};

export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("apiToken")) {
    return JSON.parse(localStorage.getItem("apiToken"));
  } else {
    return false;
  }
};
