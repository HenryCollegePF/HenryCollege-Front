import { Box } from "@mui/material";
import React from "react";
import Footer from "../../components/footer/Footer";
import Paged from "../../components/paged/Paged";
import Filter from "../../components/filters/Filters";
import Profile from "../profile/Profile";

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
