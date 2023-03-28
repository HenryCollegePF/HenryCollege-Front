import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import imageGirl from "../../assets/images/LandingGirl.jpg";
import Footer from "../../components/footer/Footer";
import NavBarLanding from "../../components/navBarLanding/NavBarLanding";

function Landing() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Box sx={{ flexShrink: 0 }}>
        <NavBarLanding />
      </Box>

      <Box
        display="flex"
        justifycontent="space-around"
        alignItems="center"
        sx={{
          textAlign: 'left', 
          flexDirection: "column",
          mt: 1,
          "@media (min-width: 768px)": {
            flexDirection: "row",
            mt: 2,
          },
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Grid>
          <Box margin={3}>
            <Typography variant={isMobile ? "h3" : "h2"}>
              Invertimos en tu educación
            </Typography>
            <Typography variant={isMobile ? "h5" : "h4"}>
              Comienza a estudiar Desarrollo Full Stack o Data Science
            </Typography>
            <Typography variant={isMobile ? "body1" : "subtitle1"}>
              Despega tu carrera en tecnología. Estudia a remoto y de manera
              intensiva. ¿Y lo mejor? Solo nos pagas cuando consigues un nuevo
              trabajo.
            </Typography>
          </Box>
        </Grid>

        <Grid>
          <img
            style={{ maxWidth: "100%", minWidth: "100%" }}
            src={imageGirl}
            alt="logo"
          />
        </Grid>
      </Box>

      <Box sx={{ flexShrink: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default Landing;
