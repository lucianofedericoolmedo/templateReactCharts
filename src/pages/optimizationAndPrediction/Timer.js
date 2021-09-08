import React from "react";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const {
    initialMinute = 0,
    initialSeconds = 0,
    className,
    timerCallback = () => {
      return;
    },
  } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          timerCallback();
          setMinutes(initialMinute);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <p className={className}>
      {minutes === 0 && seconds === 0
        ? "0:00"
        : `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`}
    </p>
  );
};

export default Timer;
