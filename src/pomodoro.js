import React, { useState, useEffect } from 'react';
import './style.css';

function padTime(time) {
  return time.toString().padStart(2, '0');
}

const Pomodoro = () => {
    // [state, setState] HOOKS A NIVEL SUPERIOR SIEMPRE!
    const [title, setTitle] = useState('Starting session...');
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);

    const minutes = padTime(Math.floor(timeLeft / 60));
    const seconds = padTime(Math.floor(timeLeft - minutes * 60));

    //    useEffect(() => {
    //        effect
    //        return () => {
    //            cleanup
    //        }
    //    }, [input]) SI LO QUE DENTRO DEL ARRAY CAMBIA, CORRE OTRA VEZ

    const startTimer = () => {
        setTitle('Focus!!!');
        setIsRunning(true);
    };

    const stopTimer = () => {
        setTitle("Waiting...")
        setIsRunning(false);
    }

    const resetTimer = () => {
        setIsRunning(false);
        setTitle("Start!")
        setTimeLeft(25 * 60)
    }

    useEffect(() => {
        let interval;
        if (isRunning) {
          interval = setInterval(() => {
            setTimeLeft((timeLeft) => {
              return timeLeft - 1;
            });
          }, 1000);
        }
    
        return () => {
          clearInterval(interval);
        };
    }, [isRunning]);
    

    return (
        <div className="app">
            <h2>{title}</h2>
            <div className="timer">
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>
            <div className="buttons">
               { !isRunning && <button onClick = {startTimer}>Start</button> }
               { isRunning && <button onClick = {stopTimer}>Stop</button> }
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )
}

export default Pomodoro;
