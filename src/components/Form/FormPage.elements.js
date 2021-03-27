import styled, { css } from "styled-components";

export const SharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 0 20px;
`;

export const StyledForm = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  width: 1000px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 600px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

export const Inputs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
