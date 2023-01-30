import React from "react";
import { Affichage } from "../components/affichage";
import { Footer } from "../components/footer";
import { Header } from "../components/headeractivity";

export const AffichagePage: React.FC<{}> = () => {
  return (
    <>
    <Header></Header>
        <Affichage></Affichage>
    <Footer></Footer>
    </>
  );
};