import React from "react";
import { Activities } from "../components/activities";
import { Footer } from "../components/footer";
import { Header } from "../components/headeractivity";

export const ActivityPage: React.FC<{}> = () => {
  return (
    <>
    <Header></Header>
      <br/><Activities></Activities>
    <Footer></Footer>
    </>
  );
};