import React, { useEffect, useState } from 'react';
import './timer.css';

interface TimerProps {
  start?: number;
  onTick?: (timestamp: number) => void;
}

export const Timer: React.FC<TimerProps> = ({start = 0, onTick = () => {}}) => {
  const [time, setTime] = useState(start);
  const tick = (): void => {
    setTime((t) => {
      onTick(t + 1);
      return t + 1;
    });
  };
  const digit = (n: number): string => (n > 9 ? '' : '0') + n;
  const format = (t: number): string => `${digit(Math.floor(t / 60))}:${digit(t % 60)}`;

  useEffect(() => {
    const id = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(id);
    }
  });

  return (
      <div id="clock">
        <p>
          <span>{format(time)}</span>
        </p>
      </div>
  );
};
