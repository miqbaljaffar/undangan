import { useEffect, useState } from 'react';

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const createCountdown = (targetDate: number): Countdown => {
  const now = Date.now();
  const difference = Math.max(targetDate - now, 0);

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export default function useCountdown(targetDateString: string) {
  const [countdown, setCountdown] = useState<Countdown>(() =>
    createCountdown(new Date(targetDateString).getTime())
  );

  useEffect(() => {
    const targetTimestamp = new Date(targetDateString).getTime();
    const interval = window.setInterval(() => {
      setCountdown(createCountdown(targetTimestamp));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDateString]);

  return countdown;
}
