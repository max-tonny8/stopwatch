"use client"
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Navbar from "@/components/Navbar";

export const Common = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  padding: 2rem;
  width: 100%;
  height: calc(100vh - 84px);
`;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  width: 60%;
`;

export const Subtitle = styled.h2`
  font-size: 52px; 
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

export const RecordBtn = styled(Button)`
  background-color: #530c64;
`;

export const RecordList = styled.div`
  font-size: 24px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  color: #233849;
  padding: 2rem;
  border: solid 2px #000000;
  width: 40%;
  overflow-y: scroll;
`;

export const RecordTitle = styled.p`
  font-size: 48px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  color: #7a1212;
  text-align: center;
  padding: 1rem;
`;

export const Record = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecordWrapper = styled(Common)`
  padding: 1rem;
  border-bottom: solid 1px #000;
`;

export const RecordNo = styled.p`
  font-size: 24px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  width: 30%;
  `;

export const RecordContent = styled.p`
  font-size: 24px;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  width: 70%;
`;

const StopWatch: React.FC = () => {
  const [running, setRunning] = useState(false);
  const [resume, setResume] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);
  const [recordList, setRecordList] = useState<number[]>([]);

  const recordStopwatch = () => {
    setRecordList([...recordList, time]);
    console.log(recordList);
  }

  const pauseStopwatch = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  }

  const startStopwatch = () => {
    startTimeRef.current = Date.now() - time * 100;
    intervalRef.current = setInterval(() => {
      setTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
    setRunning(true);
  }

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setRecordList([]);
    setRunning(false);
  }

  const resumeStopwatch = () => {
    console.log(time);
    startTimeRef.current = Date.now() - time * 1000;
    console.log(startTimeRef.current)
    intervalRef.current = setInterval(() => {
      setTime(Math.floor((Date.now() -
        startTimeRef.current) / 1000));
    }, 1000);
    setRunning(true);
  }

  useEffect(() => {
    if (running) {
      startStopwatch();
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [running]);

  return (
    <>
      <Navbar />
      <Content>
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
            <RecordBtn onClick={recordStopwatch}>
              Record
            </RecordBtn>
          </Buttons>
        </Wrapper>
        <RecordList>
          <RecordTitle>List of record.</RecordTitle>
          <Record>
            <RecordWrapper>
              <RecordNo>No</RecordNo>
              <RecordContent>Content</RecordContent>
            </RecordWrapper>
            {recordList.map((record, index) => {
              return (
                <RecordWrapper>
                  <RecordNo>{index + 1}</RecordNo>
                  <RecordContent>{record}</RecordContent>
                </RecordWrapper>
              )
            })}
          </Record>
        </RecordList>
      </Content>
    </>
  );
}

export default StopWatch;