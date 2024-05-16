"use client"
import React, { useState, useRef, useEffect } from "react";
import Timer from "@/components/Timer";
import ControlButtons from "@/components/ControlButtons";
import Navbar from "@/components/Navbar";
import * as S from "./page.styled";

const StopWatch: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [time, setTime] = useState<number>(0);
  const [recordList, setRecordList] = useState<number[]>([]);

  useEffect(() => {
    let interval: any = 0;

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
      <S.Content>
        <S.Wrapper className="stop-watch">
          <Timer time={time} />
          <ControlButtons
            active={isActive}
            isPaused={isPaused}
            handleRecord={handleRecord}
            handleStart={handleStart}
            handlePauseResume={handlePauseResume}
            handleReset={handleReset}
          />
        </S.Wrapper>
        <S.RecordList>
          <S.RecordTitle>List of record.</S.RecordTitle>
          <S.Record>
            <S.RecordWrapper>
              <S.RecordNo>No</S.RecordNo>
              <S.RecordContent>Content</S.RecordContent>
            </S.RecordWrapper>
            {recordList.map((record, index) => {
              return (
                <S.RecordWrapper key={index}>
                  <S.RecordNo>{index + 1}</S.RecordNo>
                  <Timer time={record} type='record' />
                </S.RecordWrapper>
              )
            })}
          </S.Record>
        </S.RecordList>
      </S.Content>
    </>
  );
}

export default StopWatch;