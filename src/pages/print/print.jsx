import { Button } from "@mui/material";
import React, { useContext, useRef } from "react";
import ReactToPrint from "react-to-print";
import "../../style/dark.scss";
import DashboardPrint from "./dashboardPrint";
import { DarkModeContext } from "../../context/darkModeContext";

const Print = () => {
  const componentRef = useRef();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <Button
            sx={{ width: "94%", marginLeft: "10px", marginTop: "5px" }}
            variant="contained"
          >
            Print Dasboard
          </Button>
        )}
        content={() => componentRef.current}
      />
      <div style={{ display: "none" }}>
      <div className={darkMode ? "app dark" : "app"}>
        <DashboardPrint ref={componentRef} />
        </div>
      </div>
    </div>
  );
};
export default Print;
