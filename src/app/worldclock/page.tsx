"use client"
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Timer from "@/components/Timer";
import ControlButtons from "@/components/ControlButtons";
import Navbar from "@/components/Navbar";
import { Container } from "./page.styled";
import TimezoneSelect from "@/components/TimezoneSelect";
import OptionTypeBase from 'react-select';

const StopWatch: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [otherTime, setOtherTime] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<OptionTypeBase | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setCurrentTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString("en-US", {timeZone: selectedOption?.value});
      setOtherTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedOption]);

  const handleChange = (selectedOption: OptionTypeBase | null) => {
    setSelectedOption(selectedOption);
    // You can use the selected timezone value here
    console.log(selectedOption);
  };

  const timezoneOptions: Timezone[] = [
    { value: 'Etc/GMT+12', label: 'GMT-12:00' },
    { value: 'Etc/GMT+11', label: 'GMT-11:00' },
    // Add more timezones as needed
  ];

  return (
    <>
      <Navbar />
      <Container>
        <div className="world-clock">
          {/* <Timer time={time} type="world" /> */}
          <p className="clock">{selectedOption == null ? currentTime : otherTime}</p>
          <TimezoneSelect selectedOption={selectedOption} timezoneOptions={timezoneOptions} handleChange={handleChange}  />
        </div>
      </Container>
    </>
  );
}

export default StopWatch;