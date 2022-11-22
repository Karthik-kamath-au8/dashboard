import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { LinearProgress, Typography } from "@mui/material";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;

  switch (type) {
    case "user":
      data = {
        title: "Total Menus",
        progress:30,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Total Orders Today",
        progress:50,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Total client Today",
        progress:70,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Revenue day Ratio",
        progress:60,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="counter">
          {amount}
        </span>
        <span className="title">{data.title}</span>
        <div className="progress">
        <div className="progressbar"> 
        <LinearProgress variant="determinate"   value={data.progress}/>
        </div> 
        <div className="percent"> 
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          data.progress,
        )}%`}</Typography>
        </div> 
        </div>
      </div>
      <div className="right">
        <div className="percentage positive">
        {data.icon}
        </div>
      </div>
    </div>
  );
};

export default Widget;
