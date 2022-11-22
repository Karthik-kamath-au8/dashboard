import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";
import React from "react";
import Print from "../print/print";

const Home = ({login}) => {
  const history = useNavigate();

 if (login.Username !== 'admin'){
    history('/')
 }

  return (
    login.Username !== 'admin' ?
    <Login/>
    :
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Orders Summmary" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Order List</div>
          <Table  />
        </div>
        <div>
          <Print/>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    login: state.login.login,
  };
};


export default connect (mapStateToProps) (Home);
