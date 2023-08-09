import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function TabPanel({ tabs = [] }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  console.log(tabs);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map(({ label }, i) => (
            <Tab label={label} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Box>
      {tabs.map(({ label, panel }, i) => (
        <div
          role="tabpanel"
          hidden={value !== i}
          id={`simple-tabpanel-${i}`}
          aria-labelledby={`simple-tab-${i}`}
          key={label}
        >
          {value === i && <Box sx={{ p: 3 }}>{panel}</Box>}
        </div>
      ))}
    </Box>
  );
}
