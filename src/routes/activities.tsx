import React from "react";
import { Activities } from "../components/activities";
import { Footer } from "../components/footer";
import { Header } from "../components/headeractivity";

export const ActivityPage: React.FC<{}> = () => {
  return (
    <>
     <Header></Header>
       <div className="lg:h-screen"><Activities></Activities></div><br/>
    <Footer></Footer>
    </>
  );
};