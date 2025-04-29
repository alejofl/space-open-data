import { useEffect, useState } from 'react';

type TMinusCounterProps = {
    targetTime: Date
}

export function TMinusCounter({ targetTime }: TMinusCounterProps) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = Math.max(0, targetTime.getTime() - now.getTime());

    const totalSeconds = Math.floor(difference / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = calculateTimeLeft();
      setTimeLeft(newTime);
      if (newTime === '00:00:00') clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div className="flex flex-col items-center justify-center gap-1">
        <div className="font-mono text-2xl font-bold">
            T - {timeLeft}
        </div>
        <div className="font-light text-sm">
            {targetTime.toLocaleString("en-US")}
        </div>
    </div>
    
  );
};
