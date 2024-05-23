import React, { useEffect, useState } from "react";
import style from "../styles/homepage.module.css";
import { useScroll, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import BookmarkIcon from "@mui/icons-material/Bookmark";
function HomepageForeground() {
  const scroll = useScroll();
  const [scrollPos, setScrollPos] = useState<number[]>([]);

  function range(page: number) {
    let temp = 0;
    if (page == 0) return scroll.range(page / 12, 1 / 11) / 1.5;
    if (page == 2) temp = 1 - scroll.range(page / 12 - 1 / 12, 1 / 16);
    else temp = 1 - scroll.range(page / 12 - 1 / 6, 1 / 10);
    if (temp != 0 && temp != 1) return temp;
    return scroll.range(page / 12, 1 / 11) / 1.5;
  }
  function blur(page: number) {
    return "blur(" + scrollPos[page] * 4 + "px)";
  }

  useFrame((state, delta) => {
    const tmpElements = [];
    for (var i = 0; i < 12; i++) {
      tmpElements.push(range(i));
    }
    if (JSON.stringify(tmpElements) != JSON.stringify(scrollPos)) {
      setScrollPos(tmpElements);
    }
  });

  return (
    <div>
      <Grid
        container
        spacing={2}
        className={`${style.pageContainer} ${style.first}`}
        style={{ top: "0vh", opacity: 1 - scrollPos[0] }}
      >
         <Grid xs={4}></Grid>
        <Grid xs={7}>
        <Typography variant="h2" mb={3}>Welcome, my name is:</Typography>
          <div className="flex flex-column items-center">
          <Typography variant="h1" pr={1}>Max Belleville</Typography>
          <Typography color="gray" variant="h6">(Any pronouns)</Typography>
          </div>
          <List>
            <ListItem>
              <ListItemIcon>
                <BookmarkIcon sx={{color:"white"}}/>
              </ListItemIcon>
              <Typography variant="h6">
              I am a Front-end focused developer, with eight years of general
              programming experience.
              </Typography>
            </ListItem>
            <ListItem>
            <ListItemIcon  >
                <BookmarkIcon  sx={{color:"white"}} />
              </ListItemIcon>
              <Typography variant="h6">
              I have worked with a large range of systems in tools ranging from backend
              services like AWS to modern frameworks such as React, Next.js,
              Angular and Vue.
              </Typography>
            </ListItem>
            <ListItem>
            <ListItemIcon  >
                <BookmarkIcon  sx={{color:"white"}}/>
              </ListItemIcon>
              <Typography variant="h6">
              I will soon to be graduate of Toronto Metropolitan University Computer
              Science Co-op(Honours)
              </Typography>
            </ListItem>
            <ListItem>
            <ListItemIcon >
                <BookmarkIcon  sx={{color:"white"}}/>
              </ListItemIcon>
              <Typography variant="h6">
              Finally, I am a hobbyist designer, with experience in ui/ux and icon design
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        className={`${style.pageContainer} ${style.second}`}
        style={{ top: "200vh", opacity: 1 - scrollPos[2], filter: blur(2) }}
      >
        <Grid xs={5}></Grid>
        <Grid xs={7}>
          <Typography variant="h1">Desserts.App</Typography>
          <Typography mb={2} variant="h4">
            Role: Senior Front-End Developer & Designer
          </Typography>
          <Typography variant="body1">From: 2021 to 2024</Typography>
          <Typography mb={2} variant="h6">
            The all-in-one mobile ordering app that makes it easy to purchase
            and fully customize your desserts to match your tastes.
          </Typography>
          <Button variant="contained" href="#outlined-buttons">
            Read more
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        className={`${style.pageContainer} ${style.third}`}
        style={{ top: "400vh", opacity: 1 - scrollPos[5] }}
      >
        <Grid xs={5}>
          <Typography variant="h1">Project Latte</Typography>
          <Typography variant="h4">Role: Creator</Typography>
          <Typography variant="body1">From: 2018 to 2020</Typography>
          <Typography mb={2} variant="h6">
            Java with a little extra flavour. A library that expands the java ui
            swing library to make java easier to work with.
            <br />
            <br /> As well as expand the functionality to make for game
            development in java possible. Features include basic 3d
            implementation, networking, and more.
          </Typography>
          <Button variant="contained" href="#outlined-buttons">
            Read more
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        className={`${style.pageContainer} ${style.fourth}`}
        style={{ top: "600vh", opacity: 1 - scrollPos[7] }}
      >
        <Grid xs={6}>
          <Typography variant="h2">TMU Portal & Mobile</Typography>
          <Typography variant="h4">
            Role: Full stack Technical Lead & Designer
          </Typography>
          <Typography variant="body1">From: 2018 to 2020</Typography>
          <List sx={{ listStyleType: "disc", pl: 4 }}>
            <ListItem sx={{ display: "list-item" }}>
              <Typography mb={2} variant="h6">
                <strong>Portal</strong>: Web based resource center for finding
                and learning about all of the information about the uni students
                and staff may not know about.
              </Typography>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <Typography mb={2} variant="h6">
                <strong>Mobile</strong>: A modernized and refreshed mobile
                experience for the TMU Mobile Application. This provides a more
                user friendly experience, fixing some issues with the old while
                bringing in a fresh new features.
              </Typography>
            </ListItem>
          </List>
          <div className="pl-10">
            <Button variant="contained" href="#outlined-buttons">
              Read more
            </Button>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        className={`${style.pageContainer} ${style.fifth}`}
        style={{ top: "800vh", opacity: 1 - scrollPos[9] }}
      >
        <Grid xs={8}>
          <h1 style={{ fontSize: "5em" }}>Test</h1>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        className={`${style.pageContainer} ${style.sixth}`}
        style={{ top: "1000vh", opacity: 1 - scrollPos[11] }}
      >
        <Grid xs={8}>
          <h1 style={{ fontSize: "5em" }}>Test</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomepageForeground;
