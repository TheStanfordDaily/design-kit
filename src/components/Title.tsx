import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  position: relative;
  height: 100vh;
  background-color: #5a9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-size: 4rem;
  color: white;
`;


const Title = () => (
  <TitleWrapper>
    <MainTitle>Magazine-Style Article</MainTitle>
  </TitleWrapper>
);

export default Title;
