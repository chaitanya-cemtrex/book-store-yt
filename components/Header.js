import React from "react";
import { AppBar, Toolbar, Box, Tabs, Tab } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [value, setvalue] = useState(0);

  const handleChange = (e, val) => {
    setvalue(val);
    if (val === 0) {
      router.push("/");
    } else if (val === 1) {
      router.push("/books");
    } else if (val === 2) {
      router.push("/books/add");
    }
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#C83576" }}>
      <Toolbar>
        <MenuBookIcon sx={{ fontSize: "26px" }} />
        <Box display="flex" margin={"auto"}>
          <Tabs onChange={handleChange} value={value} textColor="inherit">
            <Tab sx={{ fontFamily: "Ubuntu" }} label="Home" />
            <Tab sx={{ fontFamily: "Ubuntu" }} label="All Books" />
            <Tab sx={{ fontFamily: "Ubuntu" }} label="Add New Books" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
