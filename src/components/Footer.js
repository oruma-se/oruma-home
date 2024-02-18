import * as React from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }} component="footer">
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="body2" color="text.secondary" align="center">
            <InstagramIcon
              fontSize="large"
              sx={{ color: "#E1306C" }}
              align="center"
            />
            <YouTubeIcon fontSize="large" sx={{ color: "#FF0000" }} />
            <FacebookIcon color="primary" fontSize="large" />
            <TwitterIcon fontSize="large" sx={{ color: "#1DA1F2" }} />
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://www.oruma.se/">
              Oruma
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
