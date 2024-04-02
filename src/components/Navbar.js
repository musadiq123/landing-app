/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import Logo from "../Assets/Logo.svg";
import List from "@mui/material/List";
import { Box, Button, Drawer, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import useResponsive from "../hooks/useResponsive";
import { HiOutlineBars3 } from "react-icons/hi2";

import Divider from "@mui/material/Divider";

const Navbar = () => {
  const isDesktop = useResponsive("up", "md")
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      // icon: <HomeIcon />,
    },
    {
      text: "About",
      // icon: <InfoIcon />,
    },
  ];

  return (
    <nav>
      <Grid container spacing={2}>
        <Grid item md={4} xs={8}>
            <Stack direction="row" alignItems={"center"} spacing={2}>
                {!isDesktop && (
                <IconButton>
                    <List />
                </IconButton>)}
                <Typography variant='h7' style={{fontWeight:"400", fontSize:'14px', marginRight:"30px", color:"#111B47"}}>Home</Typography>
                <Typography variant='h7' style={{fontWeight:"400", fontSize:'14px', marginRight:"30px", color:"#111B47"}}>About</Typography>
                <Typography variant='h7' style={{fontWeight:"400", fontSize:'14px', marginRight:"30px", color:"#111B47"}}>Contact</Typography>
                
                
            </Stack>
        </Grid>
        <Grid item md={3} xs={8} container justifyContent={"center"}>
            <Stack direction="row" alignItems="center" spacing={1} container>
            <Typography variant='h4' fontWeight={"900"} fontFamily="roboto">Landing</Typography>

            </Stack>
        </Grid>
        <Grid item md={4} xs={8} container justifyContent={"flex-end"}>
            <Stack direction="row" alignItems="center" spacing={2} container >
                <button className="secondary-button"  >Buy Now</button>
            </Stack>
        </Grid>
    </Grid>
    <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
