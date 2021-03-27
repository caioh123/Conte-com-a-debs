import React from "react";
import { homeObjOne, homeObjTwo, formObj } from "./Data";
import { InfoSection } from "../../components/InfoSection/InfoSection";
import Formpage from "../../components/Form/FormPage";
import ServiceHeader from "../../components/Services/ServiceHeader";
import ServiceBody from "../../components/Services/ServiceBody";
import "./Home.css";

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <div className="tudo">
        <ServiceHeader />
        <ServiceBody />
      </div>
      <Formpage {...formObj} />
    </>
  );
}

export default Home;
