import { useReducer } from 'react';
import styles from './reduser.module.css';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
       
      return { count: Math.max(0, state.count - 1)};
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.container}>
      <p className={styles.countText}>Товаров в корзине: {state.count}</p>
      <div className={styles.buttonGroup}>
        <button 
          className={`${styles.btn} styles.increment`} 
          onClick={() => dispatch({ type: 'increment' })}
        >
          Положить в корзину 
        </button>
        <button 
          className={`${styles.btn} styles.decrement`} 
          onClick={() => dispatch({ type: 'decrement' })}
        >
          Убрать из корзины
        </button>
      </div>
    </div>
  );
}

export default Counter;
