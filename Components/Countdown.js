import Image from "next/image";
import logo from "../public/Images/little-aryans-logo.png";
import React, { useState, useRef, useEffect, useCallback } from "react";

const Countdown = () => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = useCallback((e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  }, []);

  const startTimer = useCallback(
    (e) => {
      let { total, hours, minutes, seconds } = getTimeRemaining(e);
      if (total >= 0) {
        setTimer(
          (hours > 9 ? hours : "0" + hours) +
            ":" +
            (minutes > 9 ? minutes : "0" + minutes) +
            ":" +
            (seconds > 9 ? seconds : "0" + seconds)
        );
      }
    },
    [getTimeRemaining]
  ); // Dependency added here

  const clearTimer = useCallback(
    (e) => {
      setTimer("00:00:10");
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
        startTimer(e);
      }, 1000);
      Ref.current = id;
    },
    [startTimer]
  ); // Dependency added here

  const getDeadTime = useCallback(() => {
    let deadline = new Date();
    deadline.setDate(deadline.getDate() + 1); // Tomorrow
    deadline.setHours(9, 0, 0, 0); // 9 AM
    return deadline;
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      startTimer(getDeadTime());
    }, 1000);

    return () => clearInterval(id);
  }, [startTimer, getDeadTime]); // Dependencies added here

  const onClickReset = useCallback(() => {
    clearTimer(getDeadTime());
  }, [clearTimer, getDeadTime]); // Dependencies added here

  return (
    <div>
      <div className="CountdownSection">
        <div className="sclLogo">
          <Image src={logo} alt="Little Aryans Logo" />
        </div>
        <h1>
          Our brand-new website will go live on 15th October &apos;23. We
          can&apos;t wait for you to explore it!
        </h1>
        <h2>{timer}</h2>
      </div>
    </div>
  );
};

export default Countdown;
