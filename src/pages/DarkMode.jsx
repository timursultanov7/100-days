import { useState } from "react";
import React from "react";
import "../styles/darkMode.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={
        isDark ? "dark main-dark-mode-wrapper" : "main-dark-mode-wrapper"
      }
    >
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label={isDark ? "light mode" : "dark mode"}
          className={isDark ? "dark-mode btn-dark-mode" : "btn-dark-mode"}
          onClick={() => setIsDark(!isDark)}
        />
      </FormGroup>
    </div>
  );
};

export default DarkMode;
