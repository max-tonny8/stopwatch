"use client"
import React, { useState, useEffect, createContext, useContext } from "react";

const TimeContext = createContext<TimeContextType | undefined>(undefined);

const TimeProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [time, setTime] = useState<number>(0);
  const [recordList, setRecordList] = useState<number[]>([]);

  useEffect(() => {
    let interval: any = 0;

    if (isActive && !isPaused) {
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
  };

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
    <TimeContext.Provider
      value={{
        time,
        isActive,
        isPaused,
        recordList,
        handleRecord,
        handleStart,
        handlePauseResume,
        handleReset,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

const useTimeContext = (): TimeContextType => {
  const context = useContext(TimeContext);
  if (context === undefined) {
    throw new Error("useTimeContext must be used within a TimeProvider");
  }
  return context;
};

export { TimeProvider, useTimeContext };
