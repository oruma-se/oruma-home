import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import { lightGreen } from "@mui/material/colors";

const primary = lightGreen[500];

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Blue
    },
    secondary: {
      main: "#FFD600", // Golden yellow
    },
    error: {
      main: "#B71C1C", // Rich red
    },
    warning: {
      main: "#FFAB00", // Amber
    },
    info: {
      main: "#0277BD", // Light blue
    },
    success: {
      main: "#388E3C", // Green
    },
    background: {
      default: "#FFFFFF", // White
      paper: "#F5F5F5", // Light grey
    },
    text: {
      primary: "#212121", // Dark grey
      secondary: "#757575", // Medium grey
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Box>
        <ResponsiveAppBar />
          <img src="https://placehold.co/1080x1080" />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
