let intialState = {
  EmployeData: [],
};
import React from "react";

const EmpReducer = (state = intialState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        EmployeData: [...state.EmployeData, action.payload],
      };

    case "view":
      return {
        ...state,
        EmployeData: action.payload,
      };

    case "delete":
      return {
        ...state,
        EmployeData: state.EmployeData.filter(
          (emp) => emp.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default EmpReducer;
