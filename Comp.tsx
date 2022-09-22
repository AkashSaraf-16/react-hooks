import * as React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

function Comp() {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    console.log(name.length);
    setIsValid(name == 'sahi hai');
  }, [name]);
  function nameChangeHandler(event) {
    console.log('yaha bhi change hua');
    if (event.target.value.trim().length >= 5) setName('sahi hai');
    else setName('galat baat');
  }
  return (
    <div className="parent">
      <div>{name}</div>
      <div>
        <form>
          <div className={isValid ? 'child' : 'wrong'}>
            <label>Name : </label>
            <input className="ip" onChange={nameChangeHandler}></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comp;
