import { Box } from "@mui/material";
import React from "react";
import Footer from "../../components/footer/Footer";
import Paged from "../../components/paged/Paged";

function Home() {
  return (
    <Box>
      <Paged/>
      <Footer/>
    </Box>
  );
}

export default Home;
