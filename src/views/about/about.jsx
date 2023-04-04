import Avatar from "@mui/material/Avatar";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import imageGrupo from "../../assets/images/david.jpg";
import imageGrupo1 from "../../assets/images/alejandra.jpg";
import imageGrupo2 from "../../assets/images/andres.jpg";
import imageGrupo3 from "../../assets/images/catalina.jpg";
import imageGrupo4 from "../../assets/images/emma.jpg";
import imageGrupo5 from "../../assets/images/alejo.jpg";
import imageGrupo6 from "../../assets/images/brenda.jpg";
import imageGrupo7 from "../../assets/images/jersito.jpg";

const avatar = [
  {
    name: "Brenda Belen",
    link: "https://www.linkedin.com/in/brenda-de-los-angeles-belen-molina-8772aa211/",
    imageUrl: imageGrupo6,
  },
  {
    name: "Catalina Hernandez",
    link: "https://www.linkedin.com/in/catalina-hernandez-mejia/",
    imageUrl: imageGrupo3,
  },
  {
    name: "Alejo Jubany",
    link: "https://www.linkedin.com/in/alejo-jubany-7a707519a/",
    imageUrl: imageGrupo5,
  },
  {
    name: "Andres Siabatto",
    link: "https://www.linkedin.com/in/andres-siabatto-garcia-92149a162",
    imageUrl: imageGrupo2,
  },

  {
    name: "Emmanuel Nuñez",
    link: "https://www.linkedin.com/in/emmanuel-nu%C3%B1ez-b6070a23a/",
    imageUrl: imageGrupo4,
  },
  {
    name: "David Duarte",
    link: "https://www.linkedin.com/in/david-duarte-5756031b9/",
    imageUrl: imageGrupo,
  },
  {
    name: "Alejandra Betancourt",
    link: "https://www.linkedin.com/in/alejandra-betancourt-quiroga-183096177/",
    imageUrl: imageGrupo1,
  },
  {
    name: "Jerson Gonzalez",
    link: "https://www.linkedin.com/in/jerson-gonz%C3%A1lez-estrada-884399250/",
    imageUrl: imageGrupo7,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: 300,
  margin: 'auto',
  marginTop: theme.spacing(2),
  position: 'relative',
  paddingTop: '120px',
  backgroundColor: theme.palette.background.paper,
  '& > *:first-child': {
    position: 'absolute',
    top: '-40px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  "& *": {
    color: theme.palette.text.primary,
  },
}));


const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

export default function Elevation() {
  return (
    <>
      <Typography variant="h4" gutterBottom>Equipo Henry College</Typography>
      <Box sx={{ mt: 6 }}>
        <Grid container spacing={2} >
          {[lightTheme? lightTheme:darkTheme].map((theme, index) => (
            <Grid item xs={30} key={index}>
              <ThemeProvider theme={theme}>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr 1fr 1fr' },
                    gap: 6,
                    height: 350
                  }}
                >
                  <Avatar
                    src={elevation.imageUrl}
                    sx={{ mt: "50px", width: 150, height: 150 }}
                  />
                  <Typography sx={{ mt: "45px" }}>{elevation.name}</Typography>
                  <a
                    variant="body1"
                    href={elevation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography href={elevation.link} sx={{ color: "blue", textDecoration: "none"  }}>
                      Linkedin
                    </Typography>
                  </a>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        ))}
      </Box>
    </>
  );
}
