import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./dashboard.scss";
import "../../style/dark.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const DashboardPrint = React.forwardRef(({},ref) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <div className="home" ref={ref}>
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
      </div>
    </div>
    </div>
  );
}
);


export default DashboardPrint;
