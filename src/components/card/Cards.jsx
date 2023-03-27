import React from "react";
import {
  Button,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Cards({ id, name, image, level, tags, duration }) {
  const buttonSx = {
    fontSize: "12px",
    bgcolor: "#000000",
    "&:hover": {
      bgcolor: "#000000",
    },
  };

  return (
    <Box
      margin={2}
      display="inline-flex"
      flexDirection="row"
      justifycontent="center"
      alignItems="center"
      color="tertiary"
    >
      <Card
        sx={{
          mr: 4,
          fontSize: 8,
          maxWidth: 300,
          height: "auto",
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
        color="tertiary"
      >
        <Link to={`/henrycollege/detalle/${id}`} color="tertiary">
          <CardActionArea color="tertiary">
            <CardMedia
              sx={{ height: "130px", width: "80%", m: "auto", mt: "1rem" }}
              component="img"
              image={image}
              display="flex"
              color="tertiary"
            />
            <Box
              display="flex"
              flexDirection="column"
              justifycontent="center"
              alignItems="center"
              height={170}
              width={250}
              color="tertiary"
            >
              <CardContent color="tertiary">
                <Typography
                  textAlign="center"
                  sx={{ fontSize: "18px" }}
                  variant="h6"
                  color="tertiary"
                >
                  {name}
                </Typography>
                <Typography textAlign="center" sx={{ fontSize: "12px" }}>
                  Tema: {tags}
                </Typography>
                <Typography textAlign="center" sx={{ fontSize: "12px" }}>
                  Nivel: {level}
                </Typography>
                <Typography textAlign="center" sx={{ fontSize: "12px" }}>
                  Duración: {duration}
                </Typography>
              </CardContent>
            </Box>
          </CardActionArea>
        </Link>

        <Box
          display="flex"
          flexDirection="column"
          justifycontent="center"
          alignItems="center"
        >
        </Box>
      </Card>
    </Box>
  );
}
