import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import { Area, AreaChart,   
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  Legend, } from "recharts";
  import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Typography } from "@mui/material";
import React from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const data = [
  { name: "January", Total: 12000, Loss:3000, Earned:9000 },
  { name: "February", Total: 21000 ,Loss:5000, Earned:18000},
  { name: "March", Total: 8000 ,Loss:1000, Earned:7000},
  { name: "April", Total: 16000,Loss:2500, Earned:14500 },
  { name: "May", Total: 9000,Loss:1000, Earned:8000 },
  { name: "June", Total: 17000,Loss:3000, Earned:14000 },
];
const dataWeekly = [
  { name: "21 Jan", Total: 1200, Loss:200, Earned:1000 },
  { name: "22 Jan", Total: 2100 ,Loss:400, Earned:1700},
  { name: "23 Jan", Total: 800 ,Loss:100, Earned:700},
  { name: "24 Jan", Total: 1600,Loss:250, Earned:1450 },
  { name: "25 Jan", Total: 900,Loss:100, Earned:800 },
  { name: "26 Jan", Total: 1700,Loss:300, Earned:1400 },
]

const Featured = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <div>
      <Box sx={{ width: '100%' }}>
      <Box >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{color:'grey', border:'1px solid black'}} label="Monthly" {...a11yProps(0)} />
          <Tab sx={{color:'grey', border:'1px solid black'}} label="Weekly" {...a11yProps(1)} />
        </Tabs>
      </Box>
    </Box>
      </div>
      </div>
      { value === 0 ?
      <AreaChart width={530} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend/>
  <Area type="monotone" dataKey="Earned" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="Loss" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
      :
      <AreaChart width={530} height={250} data={dataWeekly}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend/>
      <Area type="monotone" dataKey="Earned" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      <Area type="monotone" dataKey="Loss" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
      }
    </div>
  );
};

export default Featured;
