"use client"
import React, { useState, useRef } from "react";
import styled from "styled-components";
import Navbar from "@/components/Navbar";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  height: calc(100vh - 84px);
`;

export const Subtitle = styled.h2`
  font-size: 24px; 
  margin-bottom: 20px; 
  color: #555; 
  font-family: Arial, sans-serif;
`;

export const Sectime = styled.div`
  font-size: 64px; 
  color: #333;
  font-weight: bold; 
  margin-bottom: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px; 
  border-radius: 5px; 
  font-Size: 16px; 
  color: white; 
  cursor: pointer; 
  border: none; 
  outline: none; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const PauseBtn = styled(Button)`
  background-color: #f39c12;
`;

export const StartBtn = styled(Button)`
  background-color: #2ecc71;
`;

export const RestBtn = styled(Button)`
  background-color: #e74c3c;
`;

export const ResumeBtn = styled(Button)`
  background-color: #3498db;
`;

const StopWatch: React.FC = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null); 
  const startTimeRef = useRef(0);

  const pauseStopwatch = () => {
    console.log("pause!");
  }

  const startStopwatch = () => {
    startTimeRef.current = Date.now() - time * 100; 
    intervalRef.current = setInterval(() => { 
        setTime(Math.floor((Date.now() - startTimeRef.current) / 1000)); 
    }, 1000); 
    setRunning(true);
  }

  const resetStopwatch = () => {
    console.log("reset!");
  }

  const resumeStopwatch = () => {
    console.log("resume!");
  }

  return (
    <>
      <Navbar />
      <Wrapper>
        <Subtitle>Stop Watch</Subtitle>
        <Sectime>{time}s</Sectime>
        <Buttons>
          {running ? (
            <PauseBtn onClick={pauseStopwatch}>
              Pause
            </PauseBtn>
          ) : (
            <>
              <StartBtn onClick={startStopwatch}>
                Start
              </StartBtn>
              <RestBtn onClick={resetStopwatch}>
                Reset
              </RestBtn>
            </>
          )}
          {!running && (
            <ResumeBtn onClick={resumeStopwatch}>
              Resume
            </ResumeBtn>
          )}
        </Buttons>
      </Wrapper>
    </>
  );
}

export default StopWatch;