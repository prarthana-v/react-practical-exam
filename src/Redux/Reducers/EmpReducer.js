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

    case "Update-status":
      return {
        ...state,
        EmployeData: state.EmployeData.map((emp) => {
          if (emp.id === action.payload.id) {
            emp.status = action.payload.status;
          }
          return emp;
        }),
      };

    case "Multiple-delete":
      // console.log(action.payload);
      if (action.payload.length > 0) {
        return {
          ...state,
          EmployeData: state.EmployeData.filter(
            (emp) => !action.payload.includes(emp.id)
          ),
        };
      } else {
        alert("Select atleast one employe record..!!");
        return state;
      }

    default:
      return state;
  }
};

export default EmpReducer;
