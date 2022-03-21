const loginData = (state = [], action) => {
  switch (action.type) {
    case "addData":
      return state.concat({
        firstName: action.payLoad.fName,
        lastName: action.payLoad.lName,
        email: action.payLoad.userName,
        pwd: action.payLoad.pass,
      });

    default:
      return state;
  }
};
export default loginData;
