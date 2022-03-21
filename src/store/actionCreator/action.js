export const isLoggedIn = () => {
  return {
    type: "login",
  };
};
export const isNotLoggedIn = () => {
  return {
    type: "falseLogin",
  };
};
export const logInData = (firstName, lastName, email, pwd) => {
  return {
    type: "addData",
    payLoad: {
      fName: firstName,
      lName: lastName,
      userName: email,
      pass: pwd,
    },
  };
};
