import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(1500);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const formatTime = () => {
    const m = Math.floor(time / 60);
    const s = time % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="card">
      <h2>⏱️ Timer</h2>
      <h1>{formatTime()}</h1>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button
        onClick={() => {
          setRunning(false);
          setTime(1500);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Timer;