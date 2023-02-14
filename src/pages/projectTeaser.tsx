import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import arrow from "/static/arrow.png";
import "../styles/index.css";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";

interface ProjectTeaserProps {
  backgroundImage?: string;
  image?: string;
  title: string;
  role: string;
  description: string;
}

export default function ProjectTeaser(props: ProjectTeaserProps) {
  return (
    <div
      style={{ minHeight: "80vh", width: "100vw", backgroundColor: "black",
      backgroundImage: `url(${(props.backgroundImage && props.backgroundImage)})`,
      backgroundSize: '100vw 800px',
      backgroundRepeat: 'no-repeat'
    }}
    >
       <div style={{ marginTop: 20, paddingBottom: 30 }}>
        <Box sx={{ width: "100vw", height: "5px", backgroundColor: "white" }} />
      </div>
      <Container component="main" maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <List>
              <ListItem disablePadding disableGutters>
                <h1 style={{ fontSize: "48px" }}>{props.title}</h1>
              </ListItem>
              <ListItem disablePadding disableGutters>
                <h2 style={{ fontSize: "24px" }}>{props.role}</h2>
              </ListItem>
              <ListItem disablePadding disableGutters>
                <p
                  style={{
                    minHeight: 200,
                    fontSize: "24px",
                    fontWeight: '500',
                  }}
                >
                  {props.description}
                </p>
              </ListItem>
              <ListItem disablePadding disableGutters>
                <p
                  style={{
                    fontSize: "32px",
                    color: 'blue',
                    fontWeight: '800',
                    marginRight:15
                  }}
                >
                  Read more 
                </p>
                <img src={arrow} style={{marginTop:30}} alt="arrow"/>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={2}>
            {props.image && <img src={props.image} style={{width:"50vw", height:"80vh",margin:0,padding:0}} alt="Image" />}
          </Grid>
        </Grid>
      </Container>
      <div style={{ marginTop: 100, marginBottom: 30 }}>
        <Box sx={{ width: "100vw", height: "5px", backgroundColor: "white" }} />
      </div>
    </div>
  );
}
