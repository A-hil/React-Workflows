import { useState, useEffect } from 'react';
import s from './Timer.module.css';

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {

    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev === 0) {
          clearInterval(interval); 
          return prev;
        }
        return --prev;
      });
    }, 1000);

    // 2. Очистка при размонтировании компонента
    return () => clearInterval(interval);
  }, []); // Пустой массив, так как clearInterval вызывается внутри

  return (
    <div className={s.timerContainer}>
      <span className={s.label}>
        {seconds === 0 ? "Finished" : "Elapsed Time"}
      </span>
      <div className={s.display}>{seconds}</div>
    </div>
  );
}

export default CountdownTimer;
