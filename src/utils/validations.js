import { Notification } from "./Notification";
export const IsEmpty = (value) => !value;

export const validateEmail = (value) => {
  if (IsEmpty(value)) {
    return Notification.VAL_EMAIL;
  }
  if (
    !value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/
    )
  ) {
    // eslint-disable-line
    return Notification.VAL_ERROR_EMAIL;
  }
  return false;
};

export const validatePassword = (value) => {
  const isNonWhiteSpace = /^\S*$/;
  if (!value) {
    return Notification.VAL_PASSWORD;
  }
  if (!isNonWhiteSpace.test(value)) {
    return Notification.VAL_WHITE_PASSWORD;
  }

  const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  if (!isContainsUppercase.test(value)) {
    return Notification.VAL_UPPER_PASSWORD;
  }

  const isContainsLowercase = /^(?=.*[a-z]).*$/;
  if (!isContainsLowercase.test(value)) {
    return Notification.VAL_LOWER_PASSWORD;
  }

  const isContainsNumber = /^(?=.*[0-9]).*$/;
  if (!isContainsNumber.test(value)) {
    return Notification.VAL_LOWER_PASSWORD;
  }

  const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/; // eslint-disable-line
  if (!isContainsSymbol.test(value)) {
    return Notification.VAL_SYM_PASSWORD;
  }

  const isValidLength = /^.{10,16}$/;
  if (!isValidLength.test(value)) {
    return Notification.VAL_LENGTH_PASSWORD;
  }

  return false;
};

export const validName = (value) => {
  if (IsEmpty(value)) {
    return Notification.VAL_NAME;
  }
  if (!value.match(/^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/)) {
    // eslint-disable-line
    return Notification.VAL_ERROR_NAME;
  }
  return false;
};

export const validcPassword = (value) => {
  if (IsEmpty(value)) {
    return Notification.VAL_CPASSWORD;
  }
  if (value.password !== value.cpassword) {
    return Notification.VAL_ERROR_CPASSWORD;
  }
  return false;
};
