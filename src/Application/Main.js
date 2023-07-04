import { Grid, GridItem } from "@chakra-ui/react";

import { Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export const Main = () => {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"`}
      gridTemplateRows={"60px"}
      gridTemplateColumns={"270px 1fr"}
      h="100vh"
    >
      <GridItem bg="#7f7f7f" area={"header"}>
        <Navbar />
      </GridItem>
      <GridItem bg="#343a40" area={"nav"} pt={10}>
        <Sidebar />
      </GridItem>
      <GridItem pl="2" bg="#ced4da" area={"main"}>
        <Routes></Routes>
      </GridItem>
    </Grid>
  );
};

export default Main;
