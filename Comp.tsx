import * as React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

function Comp() {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);
  console.log('line 8');
  useEffect(() => {
    console.log('line 10');
    // setTimeout(() => {
    console.log('line 12');
    console.log(name.length);
    setIsValid(name !== 'NA');
    // },8000);
  }, [name]);
  console.log('line 17');
  function nameChangeHandler(event) {
    console.log('line 19');
    if (event.target.value.trim().length >= 5) setName(event.target.value);
    else setName('NA');
  }
  return (
    <div className="parent">
      <div>{name}</div>
      <div>
        <div className={isValid ? 'child' : 'wrong'}>
          <label>Name : </label>
          <input className="ip" onChange={nameChangeHandler}></input>
        </div>
      </div>
    </div>
  );
}

export default Comp;
/* async
when no change in state:
8
17
10
after 8 sec 
12

when state changes:
19
rerender due to state
8
17
useEffect->
10
after 8 sec
12
8
17..
---------------------------
sync:
when no state change:
8
17
useEffect->
10
12
rerender->
8
17

when state changes:
19
8
17
10
12
*/
