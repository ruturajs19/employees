import React from "react";
import "./EmployeeList.css";
import { connect } from "react-redux";

const EmployeeList = (props) => {
  const { employees } = props;
  return (
    <div className="employee-list-container">
      <h2>
        <center>Employees</center>
      </h2>
      {employees && employees.user && (
        <table>
          <thead>
            <tr>
              {Object.keys(employees.user[0]).map((value, index) => (
                <td className="table-data-header" key={index}>
                  {value}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.user.map((value, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {Object.keys(value).map((key, dataIndex) => (
                    <td key={dataIndex}>{value[key]}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    employees: state.employees
  };
};

export default connect(mapStateToProps)(EmployeeList);
