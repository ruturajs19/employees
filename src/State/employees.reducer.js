import { reduxActions } from "./employees.action";
import { employees } from "./employees";

const initialState = {
  isLoggedIn: false,
  employees: employees,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case reduxActions.setLogin:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default reducer;
