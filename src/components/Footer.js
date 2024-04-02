import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Button, Grid, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div style={{ flexDirection: 'column' }}>
      <Grid container spacing={7} style={{ backgroundColor: '#E7ECFF', paddingLeft: 100, paddingRight: 100 }}>
        <Grid item md={4} xs={8}>
          <Typography variant='h7' style={{ fontWeight: "400", fontSize: '14px', marginRight: "30px", color: "#111B47" }}>©2023 Yourcompany</Typography>

        </Grid>
        <Grid item md={3} xs={8} container justifyContent={"center"}>
          <Typography variant='h4' fontWeight={"900"} fontFamily="roboto">Landing</Typography>

        </Grid>
        <Grid item md={4} xs={8} container justifyContent={"flex-end"}>
          <Stack direction="row" alignItems="center" spacing={2} container >
          <button className="secondary-button"  >Purchase now</button>

            {/* <Button style={{ borderRadius: 0, width: "160px", height: '26px', backgroundColor: "#111B47" }}>Purchase now</Button> */}
          </Stack>
        </Grid>
      </Grid>
      <div style={{
        width: '1110px',
        height: '1px',
        top: '4551px',
        left: '165px',
        gap: '0px',
        opacity: '0px',
      }} />
      <Grid container spacing={7} style={{ backgroundColor: '#E7ECFF', paddingLeft: 100, paddingRight: 100 }}>
        <Grid item md={4} xs={8}>
          <div className="footer-icons">
            <div style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignSelf: 'center' }}>
              <Typography variant='h7' style={{ fontWeight: "400", fontSize: '14px', marginRight: "30px", color: "#111B47" }}>Home</Typography>
              <Typography variant='h7' style={{ fontWeight: "400", fontSize: '14px', marginRight: "30px", color: "#111B47" }}>About</Typography>
              <Typography variant='h7' style={{ fontWeight: "400", fontSize: '14px', marginRight: "30px", color: "#111B47" }}>Contact</Typography>
            </div>
          </div>
        </Grid>
        <Grid item md={3} xs={8} container justifyContent={"center"}>


        </Grid>
        <Grid item md={4} xs={8} container justifyContent={"flex-end"}>
          <div className="footer-section-one">
            <div className="footer-icons">
              <BsTwitter />
              <SiLinkedin />
              <BsYoutube />
              <FaFacebookF />
            </div>
          </div>
        </Grid>
      </Grid>

    </div>
  );
};

export default Footer;
