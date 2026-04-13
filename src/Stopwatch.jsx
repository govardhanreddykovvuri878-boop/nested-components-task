import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  // Format time → HH:MM:SS
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Stopwatch</h1>
        <h2 style={styles.time}>{formatTime(time)}</h2>

        <div>
          <button
            style={styles.startBtn}
            onClick={() => setIsRunning(true)}
            disabled={isRunning}
          >
            Start
          </button>

          <button
            style={styles.stopBtn}
            onClick={() => setIsRunning(false)}
            disabled={!isRunning}
          >
            Stop
          </button>

          <button
            style={styles.resetBtn}
            onClick={() => {
              setIsRunning(false);
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(to right, #141e30, #243b55)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },

  card: {
    backgroundColor: "#1f1f1f",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
  },

  title: {
    color: "#fff",
    marginBottom: "10px",
  },

  time: {
    color: "#00ffcc",
    fontSize: "32px",
    marginBottom: "20px",
  },

  startBtn: {
    backgroundColor: "#28a745",
    color: "#fff",
    margin: "10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  stopBtn: {
    backgroundColor: "#dc3545",
    color: "#fff",
    margin: "10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  resetBtn: {
    backgroundColor: "#6c757d",
    color: "#fff",
    margin: "10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Stopwatch;