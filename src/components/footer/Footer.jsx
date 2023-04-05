import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import imageLogo from "../../assets/images/henryBlanco.png";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "common.black",
        color: "white",
        mt: "5rem",
        flexDirection: "column",
        "@media (min-width: 768px)": {
          flexDirection: "row",
        },
      }}
    >
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Box
            sx={{
              flexDirection: "column",
              mt: 1,
              "@media (min-width: 768px)": {
                flexDirection: "row",
                mt: 2,
              },
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Box>
                    <img
                      style={{
                        width: "100%",
                        maxWidth: "200px",
                        height: "auto",
                      }}
                      src={imageLogo}
                      alt="logo"
                    />
                  </Box>
                  <Typography
                    variant="caption"
                    component="span"
                    color="secondary"
                  >
                    Consultas a admisiones@soyhenry.com
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography color="primary">Estudia en Henry</Typography>

                  <Link to="/henrycollege/courses">
                    <Typography
                      variant="caption"
                      component="span"
                      color="secondary"
                    >
                      Cursos
                    </Typography>
                  </Link>

                  <Link to="/henrycollege/payment">
                    <Typography
                      variant="caption"
                      component="span"
                      color="secondary"
                    >
                      Membresia
                    </Typography>
                  </Link>

                  <Typography
                    variant="caption"
                    component="a"
                    color="secondary"
                    href="https://www.soyhenry.com/webfullstack"
                  >
                    Carrera Desarrollo Full Stack
                  </Typography>

                  <Typography
                    variant="caption"
                    component="a"
                    color="secondary"
                    href="https://www.soyhenry.com/carrera-data-science"
                  >
                    Carrera Data Science
                  </Typography>

                  <Typography
                    variant="caption"
                    component="a"
                    color="secondary"
                    href="https://www.soyhenry.com/curso-javascript"
                  >
                    Curso JavaScript
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography color="primary">Sobre nosotros</Typography>

                  <Link to="/henrycollege/nosotros">
                    <Typography
                      variant="caption"
                      component="span"
                      color="secondary"
                    >
                      Nosotros
                    </Typography>
                  </Link>

                  <Typography
                    variant="caption"
                    component="a"
                    color="secondary"
                    href="https://www.soyhenry.com/prensa"
                  >
                    Prensa
                  </Typography>
                  <Typography
                    variant="caption"
                    component="a"
                    color="secondary"
                    href="https://blog.soyhenry.com/"
                  >
                    Blog
                  </Typography>
                  <Typography
                    variant="caption"
                    component="a"
                    color="secondary"
                    href="https://www.soyhenry.com/eventos"
                  >
                    Eventos
                  </Typography>
                  <Typography
                    variant="caption"
                    component="a"
                    color="secondary"
                    href="https://www.soyhenry.com/muro-del-amor"
                  >
                    Muro del Amor
                  </Typography>
                  <Typography variant="caption" component="a" color="secondary">
                    Trabaja en Henry
                  </Typography>
                  <Typography
                    variant="caption"
                    component="a"
                    color="secondary"
                    href="https://henry-college-dashboard.vercel.app/"
                  >
                    Henry College Admin
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={2}>
                  <Typography color="primary">Empresas</Typography>
                  <Typography
                    variant="caption"
                    component="a"
                    color="secondary"
                    href="https://www.soyhenry.com/hiring"
                  >
                    Contrata talento
                  </Typography>
                  <Typography
                    variant="caption"
                    component="a"
                    color="secondary"
                    href="https://www.talent.soyhenry.com/?hl=es"
                  >
                    Explora candidatos
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Typography variant="caption">
            Made by: Catalina Hernandez, Brenda Belen, Alejo Jubany, Alejandra
            Betancourt, David Duarte, Emmanuel Nuñez, Andrés Siabato, Jerson
            Gonzalez
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
