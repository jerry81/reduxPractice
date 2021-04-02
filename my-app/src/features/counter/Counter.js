import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount, // state
} from './counterSlice'; // imports actions and state from counterSlice
import styles from './Counter.module.css';

export function Counter() { // functional component, used in App.js
  const count = useSelector(selectCount); // subscribes to state, nothing to do with css selectors
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2'); // local state

  return (
    <div>
      <div className={styles.row}>
        <button // plus button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())} // dispatching an action
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount} // bind data, local state
          onChange={e => setIncrementAmount(e.target.value)} // bind change event, update local state
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0)) // global state action
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
