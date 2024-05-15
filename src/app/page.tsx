"use client"
import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "@/components/Navbar";
import "../../styles/globals.css";

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Content = styled.p`
  font-size: 52px;
  display: flex;
  justify-content: center;
  height: calc(100vh - 84px);
  align-items: center;
`;

const Home: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Content>My First Project!</Content>
      </Wrapper>
    </>
  );
}

export default Home;