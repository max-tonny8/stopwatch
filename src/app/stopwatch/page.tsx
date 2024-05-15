"use client"
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Timer from "@/components/Timer";
import ControlButtons from "@/components/ControlButtons";
import Navbar from "@/components/Navbar";

export const Content = styled.div`
  display: flex;
  padding: 2rem;
  width: 100%;
  height: calc(100vh - 84px);
`;

export const Wrapper = styled.div`
  &.stop-watch {
    width: 50%;
    background-color: #0d0c1b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

export const RecordList = styled.div`
  font-size: 24px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  color: #233849;
  padding: 2rem;
  border: solid 2px #000000;
  width: 50%;
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

export const RecordWrapper = styled.div`
  padding: 1rem;
  border-bottom: solid 1px #000;
  display: flex;
  text-align: center;
  align-items: center;
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
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [time, setTime] = useState<number>(0);
  const [recordList, setRecordList] = useState<number[]>([]);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleRecord = () => {
    console.log(time);
    setRecordList([...recordList, time]);
  }

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setRecordList([]);
  };

  return (
    <>
      <Navbar />
      <Content>
        <Wrapper className="stop-watch">
          <Timer time={time} isPaused={isPaused} />
          <ControlButtons
            active={isActive}
            isPaused={isPaused}
            handleRecord={handleRecord}
            handleStart={handleStart}
            handlePauseResume={handlePauseResume}
            handleReset={handleReset}
          />
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
                  <Timer time={record} type='record' />
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