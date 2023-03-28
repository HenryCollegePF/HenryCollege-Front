import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import image from "../../assets/images/SubLanding.jpg";
import Footer from "../../components/footer/Footer";
import SearchBar from "../../components/searchBar/SearchBar";

function SubLanding() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Grid>
        <Box
          display="flex"
          justifycontent="space-around"
          alignItems="center"
          sx={{
            textAlign: 'left', 
            flexDirection: "row",
            mt: 1,
            "@media (min-width: 768px)": {
              flexDirection: "column",
              mt: 2,
            },
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              mt: 1,
              "@media (min-width: 768px)": {
                flexDirection: "row",
                mt: 2,
              },
            }}
          >
            <Grid>
              <Box margin={3}>
                <Typography variant={isMobile ? "h3" : "h2"}>
                  Actualizate de las nuevas tecnologías
                </Typography>
                <Typography variant={isMobile ? "h5" : "h4"}>
                  Cursos a precios asequibles
                </Typography>
                <Typography variant={isMobile ? "body1" : "subtitle1"}>
                  Mantente actualizado y sigue aprendiendo para alcanzar tus
                  objetivos profesionales, es por eso que te invitamos a ver
                  nuestros cursos cortos.
                </Typography>
              </Box>
            </Grid>

            <Grid>
              <img
                style={{ maxWidth: "100%", minWidth: "100%" }}
                src={image}
                alt="logo"
              />
            </Grid>
          </Box>
        </Box>
      </Grid>

      <Box sx={{ flexShrink: 0 }}>
        <SearchBar />
      </Box>

      <Box sx={{ flexShrink: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default SubLanding;
