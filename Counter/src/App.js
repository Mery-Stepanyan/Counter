import React from 'react';
import logo from './logo.svg'
import Counter from './Counter'


function Name(props) {
  return (
    <p>
      <img src={props.logo} />
    </p>
  )
}

export function Surname(props) {
  return (
    <>
      <p>
        {props.lastName}
      </p>
      <p>
        {props.age}
      </p>
    </>
  )
}

const App = () => {
  const Greeting = 'Hello'

  const myFunc = () => {
    console.log('barev')
  }

  return (
    <>
      <div className="App">
        {Greeting}
        {myFunc()}
        <Name />
        <Counter/>
        <Surname lastName='Doe' age='22' />
      </div>
      <div className="App">
        <Name  logo={logo}/>
        {/* <Surname /> */}
      </div>
    </>
  );
}

export default App;
