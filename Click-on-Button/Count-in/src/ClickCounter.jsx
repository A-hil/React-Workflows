import { useState } from 'react';
import styles from './counter.module.scss';

const ClickCounter = () => {
    const [count, setCount] = useState(0);
    const displayCount = Math.floor(count / 2);

    return (
        <div className={styles.counter}>
            <p>Вы нажали {count} раз</p>
            
            {/* ПРАВИЛЬНО: вызываем функцию setCount и передаем count + 1 */}
            <button onClick={() => setCount(count + 1)}>
                <p>                    
                    <span key={displayCount}>{displayCount}</span> 
                </p>
            </button>
        </div>
    );
}

export default ClickCounter;
