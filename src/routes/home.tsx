import React from "react";
import { Home } from "../components/home";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const HomePage: React.FC<{}> = () => {
  return (
    <>
    <Header></Header>
        <Home></Home>
    <Footer></Footer>
    </>
  );
};