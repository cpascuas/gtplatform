import React from "react";
import "./App.css";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import PageHeader from "../components/PageHeader";
import {
  CssBaseline,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#32447E",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    text: {
      secondary: "#fff",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "250px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SideMenu />
      <div className={classes.appMain}>
        <PageHeader title="Asset Collections" />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
