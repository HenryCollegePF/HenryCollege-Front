import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import imageGrupo from '../../assets/images/david.jpg';
import imageGrupo1 from '../../assets/images/alejandra.jpg';
import imageGrupo2 from '../../assets/images/andres.jpg';
import imageGrupo3 from '../../assets/images/catalina.jpg';
import imageGrupo4 from '../../assets/images/emma.jpg';
import imageGrupo5 from '../../assets/images/alejo.jpg';
import imageGrupo6 from '../../assets/images/brenda.jpg';
import imageGrupo7 from '../../assets/images/jersito.jpg';

const avatar = [
  {
        name: "Brenda Belen",
        link: "https://www.linkedin.com/in/brenda-belen-8772aa211/",
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
        imageUrl: imageGrupo2},
      
      {
        name: "Emmanuel Nuñez",
        link: "https://www.linkedin.com/in/emmanuel-nu%C3%B1ez-b6070a23a/",
        imageUrl: imageGrupo4},
      {
        name: "David Duarte",
        link: "https://www.linkedin.com/in/david-duarte-5756031b9/",
        imageUrl: imageGrupo},
      {
        name: "Alejandra Betancour",
        link: "https://www.linkedin.com/in/alejandra-betancourt-quiroga-183096177/",
        imageUrl: imageGrupo1},
      {
        name: "Jerson Gonzalez",
        link: "https://www.linkedin.com/in/jerson-gonz%C3%A1lez-estrada-884399250/",
        imageUrl: imageGrupo7},
]
// const Item = styled(Paper)(({ theme }) => ({
//   //...
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   textAlign: 'center',
//   maxWidth: 300,
//   margin: 'auto',
//   marginTop: theme.spacing(2),
//   position: 'relative', // para establecer un contexto de posicionamiento relativo para los elementos internos
//   paddingTop: '120px', // para dejar espacio para la imagen en la parte superior
//   '& > *:first-child': {
//     position: 'absolute',
//     top: '-40px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//   },
// }));
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
  '& img': {
    filter: theme.palette.mode === 'dark' ? 'brightness(75%)' : 'none'
  },
  '& *': {
    color: theme.palette.text.primary
  }
}));



const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

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
                  
                  {avatar.map((elevation) => (
                    <Item key={elevation} elevation={elevation} sx={{width : 200}}>
                      <Avatar src={elevation.imageUrl} sx={{ width: 150, height: 150}} />
                      <Typography>{elevation.name}</Typography>
                      <a href={elevation.link}target="_blank" rel="noopener noreferrer">
                        <Typography sx={{ color: "blue" }} >Linkedin</Typography>
                      </a>
                    </Item>
                  ))}
                </Box>
              </ThemeProvider>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
