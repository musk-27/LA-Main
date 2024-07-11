// // import React, { useState, useRef, useEffect } from "react";
// // import logo from "../public/Images/little-aryans-logo.png";
// // import Image from "next/image";

// // const Countdown = () => {
// //   // We need ref in this, because we are dealing
// //   // with JS setInterval to keep track of it and
// //   // stop it when needed
// //   const Ref = useRef(null);

// //   // The state for our timer
// //   const [timer, setTimer] = useState("00:00:00");

// //   const getTimeRemaining = (e) => {
// //     const total = Date.parse(e) - Date.parse(new Date());
// //     const seconds = Math.floor((total / 1000) % 60);
// //     const minutes = Math.floor((total / 1000 / 60) % 60);
// //     const hours = Math.floor((total / 1000 / 60 / 60) % 24);
// //     return {
// //       total,
// //       hours,
// //       minutes,
// //       seconds,
// //     };
// //   };

// //   const startTimer = (e) => {
// //     let { total, hours, minutes, seconds } = getTimeRemaining(e);
// //     if (total >= 0) {
// //       // update the timer
// //       // check if less than 10 then we need to
// //       // add '0' at the beginning of the variable
// //       setTimer(
// //         (hours > 9 ? hours : "0" + hours) +
// //           ":" +
// //           (minutes > 9 ? minutes : "0" + minutes) +
// //           ":" +
// //           (seconds > 9 ? seconds : "0" + seconds)
// //       );
// //     }
// //   };

// //   const clearTimer = (e) => {
// //     // If you adjust it you should also need to
// //     // adjust the Endtime formula we are about
// //     // to code next
// //     setTimer("00:00:10");

// //     // If you try to remove this line the
// //     // updating of timer Variable will be
// //     // after 1000ms or 1sec
// //     if (Ref.current) clearInterval(Ref.current);
// //     const id = setInterval(() => {
// //       startTimer(e);
// //     }, 1000);
// //     Ref.current = id;
// //   };

// //   const getDeadTime = () => {
// //     let deadline = new Date();

// //     // This is where you need to adjust if
// //     // you entend to add more time
// //     // deadline.   setSeconds(deadline.getSeconds() + 10);

// //     // Set the deadline to tomorrow at 9 AM
// //     deadline.setDate(deadline.getDate() + 1); // Tomorrow
// //     deadline.setHours(9, 0, 0, 0); // 9 AM
// //     return deadline;
// //   };

// //   // We can use useEffect so that when the component
// //   // mount the timer will start as soon as possible

// //   // We put empty array to act as componentDid
// //   // mount only
// //   useEffect(() => {
// //     clearTimer(getDeadTime());
// //   }, []);

// //   // Another way to call the clearTimer() to start
// //   // the countdown is via action event from the
// //   // button first we create function to be called
// //   // by the button
// //   const onClickReset = () => {
// //     clearTimer(getDeadTime());
// //   };

// //   return (
// //     <div>
// //       <div className="CountdownSection">
// //         <div className="sclLogo">
// //           <Image src={logo} />
// //         </div>
// //         <h1>
// //           Our brand-new website will go live on 15th October &apos;23. We
// //           can&apos;t wait for you to explore it!
// //         </h1>
// //         <h2>{timer}</h2>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Countdown;

// import Image from "next/image";
// import React, { useState, useRef, useEffect } from "react";
// import logo from "../public/Images/little-aryans-logo.png";

// const Countdown = () => {
//   const Ref = useRef(null);
//   const [timer, setTimer] = useState("00:00:00");

//   const getTimeRemaining = (e) => {
//     const total = Date.parse(e) - Date.parse(new Date());
//     const seconds = Math.floor((total / 1000) % 60);
//     const minutes = Math.floor((total / 1000 / 60) % 60);
//     const hours = Math.floor((total / 1000 / 60 / 60) % 24);
//     return {
//       total,
//       hours,
//       minutes,
//       seconds,
//     };
//   };

//   const startTimer = (e) => {
//     let { total, hours, minutes, seconds } = getTimeRemaining(e);
//     if (total >= 0) {
//       setTimer(
//         (hours > 9 ? hours : "0" + hours) +
//           ":" +
//           (minutes > 9 ? minutes : "0" + minutes) +
//           ":" +
//           (seconds > 9 ? seconds : "0" + seconds)
//       );
//     }
//   };

//   const clearTimer = (e) => {
//     setTimer("00:00:10");
//     if (Ref.current) clearInterval(Ref.current);
//     const id = setInterval(() => {
//       startTimer(e);
//     }, 1000);
//     Ref.current = id;
//   };

//   const getDeadTime = () => {
//     let deadline = new Date();
//     deadline.setDate(deadline.getDate() + 1); // Tomorrow
//     deadline.setHours(9, 0, 0, 0); // 9 AM
//     return deadline;
//   };

//   useEffect(() => {
//     const id = setInterval(() => {
//       startTimer(getDeadTime());
//     }, 1000);

//     return () => clearInterval(id);
//   }, [clearTimer]);

//   const onClickReset = () => {
//     clearTimer(getDeadTime());
//   };

//   return (
//     <div>
//       <div className="CountdownSection">
//         <div className="sclLogo">
//           <Image src={logo} alt="Little Aryans Logo" />
//         </div>
//         <h1>
//           Our brand-new website will go live on 15th October &apos;23. We can&apos;t wait
//           for you to explore it!
//         </h1>
//         <h2>{timer}</h2>
//       </div>
//     </div>
//   );
// };

// export default Countdown;

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
