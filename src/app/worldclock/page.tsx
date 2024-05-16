"use client"
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Container } from "./page.styled";
import TimezoneSelect from "@/components/TimezoneSelect";

const StopWatch: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [otherTime, setOtherTime] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<Timezone>(
    { value: 'Etc/GMT+12', label: 'GMT-12:00' }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setCurrentTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTime({ timeZone: selectedOption.value })
    const interval = setInterval(() => {
      setTime({ timeZone: selectedOption.value })
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedOption]);

  const setTime = (val: any) => {
    const currentTime = new Date().toLocaleTimeString("en-US", val);
    setOtherTime(currentTime);
  }

  const handleChange = (selectedOption: Timezone) => {
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
          <TimezoneSelect selectedOption={[selectedOption]} timezoneOptions={timezoneOptions} handleChange={handleChange} />
        </div>
      </Container>
    </>
  );
}

export default StopWatch;