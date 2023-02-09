// Library
import { useEffect, useState } from "react";

interface TimerProps {
  timer: number;
  handleTimer: () => void;
}

function Timer({ timer, handleTimer }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(timer);

  useEffect(() => {
    setTimeLeft(timer);
    console.log('transition')
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimer();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  return (
    <div className="ml-auto mb-1 font-semibold text-xl text-white">
      Time left: {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Timer;
