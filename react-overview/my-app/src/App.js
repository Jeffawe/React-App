import React from 'react';
import './App.css';
import HelloWorld4 from './components/HelloWorld4';
import HelloWorld6 from './components/helloworld6/HelloWorld6';
import HelloWorld8 from './components/HelloWorld8';

const App = () => {
  return (
    <div className="Container">
      <div className="Column1">
        <HelloWorld8 />
      </div>
      <div className="Column2">
        <HelloWorld4 />
      </div>
      <div className="Column3">
        <HelloWorld6 />
      </div>
    </div>
  );
}

export default App;


