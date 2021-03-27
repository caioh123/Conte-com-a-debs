import React, { useEffect, useState } from "react";

import {
  Header,
  Inputs,
  SharedStyles,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  StyledFieldset,
  StyledError,
} from "./FormPage.elements";
import Contact from "./ContactUs";
import "./Form.css";

const FormPage = ({ formTitle }) => {
  return (
    <div className="container">
      <Header>{formTitle}</Header>

      <StyledFormWrapper>
        <StyledForm>
          <Contact />
        </StyledForm>
      </StyledFormWrapper>
    </div>
  );
};

export default FormPage;
