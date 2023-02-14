import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import "../styles/index.css";
import avatar from "images/blankAvatar.png";
import listPoint from "images/listPoint.png";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";

export default function AboutMe() {
  return (
    <div
      style={{ minHeight: "75vh", width: "100vw", backgroundColor: "black" }}
    >
      <div style={{ marginTop: 20, paddingBottom: 30 }}>
        <Box sx={{ width: "100vw", height: "5px", backgroundColor: "white" }} />
      </div>
      <Container component="main" maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={avatar} style={{ paddingTop: 20 }} alt="Me" />
          </Grid>
          <Grid item xs={7}>
            <List>
              <ListItem disablePadding disableGutters>
                <h1 style={{ fontSize: "48px" }}>I am Max Belleville</h1>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#AAA",
                    marginLeft: 10,
                    marginTop: 60,
                  }}
                >
                  (Any Pronouns)
                </p>
              </ListItem>
              <ListItem disablePadding disableGutters>
                <ListItemIcon>
                  <img src={listPoint} alt="point" />
                </ListItemIcon>
                <p style={{ fontSize: "24px", color: "#AAA" }}>
                  I am a front-end focused{" "}
                  <span className="highlight">Developer</span>, with six years
                  of general Development experience.
                </p>
              </ListItem>
              <ListItem disablePadding disableGutters>
                <ListItemIcon>
                  <img src={listPoint} alt="point" />
                </ListItemIcon>
                <p style={{ fontSize: "24px", color: "#AAA" }}>
                  I am a fourth year Computer Science Toronto Metropolitan
                  University <span className="highlight">Student</span>.
                </p>
              </ListItem>
              <ListItem disablePadding disableGutters>
                <ListItemIcon>
                  <img src={listPoint} alt="point" />
                </ListItemIcon>
                <p style={{ fontSize: "24px", color: "#AAA" }}>
                  I am a hobbyist <span className="highlight">Designer</span>,
                  with experience in UI/UX and Iconography.
                </p>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
      <div style={{ paddingTop: 30, paddingBottom: 30 }}></div>
      <div style={{ paddingTop: 20, marginBottom: 30 }}>
        <Box sx={{ width: "100vw", height: "5px", backgroundColor: "white" }} />
      </div>
    </div>
  );
}
