"use client"
import React from "react";
import Timer from "@/components/Timer";
import ControlButtons from "@/components/ControlButtons";
import Navbar from "@/components/Navbar";
import * as S from "./page.styled";
import { useTimeContext } from "@/context/TimeContext";

const StopWatch: React.FC = () => {
  const {
    time,
    isActive,
    isPaused,
    recordList,
    handleRecord,
    handleStart,
    handlePauseResume,
    handleReset,
  } = useTimeContext();

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