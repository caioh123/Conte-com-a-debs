import React from "react";
import "./Services.css";
import ServiceCard from "./ServiceCard";
import {
  FaNewspaper,
  FaUniversity,
  FaFileExcel,
  FaRegFile,
  FaAdobe,
  FaUserGraduate,
} from "react-icons/fa";

const ServiceBody = () => {
  return (
    <div className="bodyContainer">
      <ServiceCard
        title="Resenha/Resumo"
        desc="Fazemos a resenha do seu trabalho"
      >
        <FaNewspaper className="icon" />
      </ServiceCard>
      <ServiceCard
        title="Trabalho de Conclusão de Curso"
        desc="Fazemos seu TCC"
      >
        <FaUniversity className="icon" />
      </ServiceCard>
      <ServiceCard title="Planilhas" desc="Fazemos sua planilha">
        <FaFileExcel className="icon" />
      </ServiceCard>
      <ServiceCard title="Slide/Folder" desc="Fazemos o seu slide">
        <FaRegFile className="icon" />
      </ServiceCard>
      <ServiceCard title="Conteúdos em pacote Office" desc="Fazemos excell">
        <FaAdobe className="icon" />
      </ServiceCard>
      <ServiceCard
        title="Programa de horas extras acadêmicas"
        desc="Realizamos suas horas academicas"
      >
        <FaUserGraduate className="icon" />
      </ServiceCard>
    </div>
  );
};

export default ServiceBody;
