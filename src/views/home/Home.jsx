import { Box } from "@mui/material";
import React from "react";
import Footer from "../../components/footer/Footer";
import Paged from "../../components/paged/Paged";
import Filter from "../../components/filters/Filters";

function Home() {
  return (
    <Box>
      <Filter />
      <Paged />
      <Footer />
    </Box>
  );
}

export default Home;
