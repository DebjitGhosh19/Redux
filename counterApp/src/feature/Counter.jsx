import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset , updateAmount} from './counterSlice';

function Counter() {
  const [amount, setamount] = useState(0)
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>−</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <div>
        <input type='number' onChange={(e)=>setamount(e.target.value)} value={amount} placeholder="Enter amount" />
       <button onClick={()=>{dispatch( updateAmount(Number(amount)));setamount('')}}>Add</button>
      </div>
    </div>
  );
}

export default Counter;
