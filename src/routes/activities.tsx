import React from "react";
import { Activities } from "../components/activities";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const ActivityPage: React.FC<any> = () => {
  return (
    <>
    <Header></Header>
        <Activities></Activities>
    <Footer></Footer>
    </>
  );
};