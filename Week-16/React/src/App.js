import React,{useState,useRef} from 'react';
import './App.css';
import * as Sentry from "@sentry/react";

function App() {
  const [namestate,setName] = useState('');
  const name = useRef('');

  const onClickHandler =()=>{
    setName(name.current.value);
  }

  

  return (
    <div className="app">
      <div className="card">
        <div className="form">
          <label>Name</label>
          <input className='form__input' ref={name} />
          <div className="btn_submit">
            <button onClick={onClickHandler}>Submit</button>
          </div>
        </div>
      </div>
        <div className="display__card">
          {namestate}
        </div>
        <button onClick={()=> {throw Error("Something went wrong!")}}>DO not click this</button>
    </div>
  );
}

// export default App;

export default Sentry.withProfiler(App);