import "./chart.scss";
import {
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  Legend,
} from "recharts";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

const Chart = ({ aspect, title }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="chart">
      <div style={{display:'flex' ,justifyContent:'space-between'}}>
      <div className="title">{title}</div>
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
      {value === 0 ?
      <ResponsiveContainer width="100%" height='100%' aspect={aspect}>
      <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Total"  fill="#82ca9d" />
          <Bar dataKey="Loss" fill="#ffc658" />
          <Bar dataKey="Earned" fill="#ff9660" />

        </BarChart>
      </ResponsiveContainer>
      :
      <ResponsiveContainer width="100%" height='100%' aspect={aspect}>
      <BarChart
          width={500}
          height={300}
          data={dataWeekly}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Total"  fill="#82ca9d" />
          <Bar dataKey="Loss" fill="#ffc658" />
          <Bar dataKey="Earned" fill="#ff9660" />

        </BarChart>
      </ResponsiveContainer>
      }
    </div>
  );
};

export default Chart;
