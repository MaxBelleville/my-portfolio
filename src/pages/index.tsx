import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import space from "./../images/space.svg";
import unoffical from "./../images/unoffical.png";
import latte from "./../images/latte.png";
import desserts from "./../images/desserts.png";
import { Parallax } from "react-parallax";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import "../styles/index.css";
import AboutMe from "./aboutMe";
import ProjectTeaser from "./projectTeaser";

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        color: "white",
        backgroundColor: "white",
      }}
    >
      <CssBaseline />
      <Parallax blur={0} bgImage={space} bgImageAlt="space" strength={200}>
        <AboutMe/>
        <div style={{ height: "75vh" }}></div>
        <ProjectTeaser
          title={"Unofficial TMU Mobile"}
          role={"Role: Developer, Designer, and Creator"}
          description={"A modernized and refreshed mobile experience for the TMU Mobile Application. This provides a "+
          "more user friendly experience, fixing some issues with the old while bringing in a fresh new features."}
          backgroundImage={unoffical}
        />
           <div style={{ height: "75vh" }}></div>
        <ProjectTeaser
          title={"Project Latte"}
          role={"Role: Developer and Creator"}
          description={"Java with a little extra flavour. A library that expands the swing library to make java easier to work."}
          backgroundImage={latte}
        />
        <div style={{ height: "75vh" }}></div>
        <ProjectTeaser
          title={"Desserts.App"}
          role={"Role: Senior Front-End Developer & Designer"}
          description={"The all-in-one mobile ordering app that makes it easy to purchase and "+
          "fully customize your desserts to match your tastes."}
          image={desserts}
        />
      </Parallax>
    </Box>
  );
}
