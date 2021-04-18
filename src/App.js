import { connect } from "react-redux";
import "./App.css";
import Login from "./Components/Login/Login";
import EmployeeList from "./Components/EmployeeList/EmployeeList";

const App = (props) => {
  return (
    <div className="main-container">
      {!props.isLoggedIn ? <Login /> : <EmployeeList />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
