import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

import CalculatorBanner from './components/CalculatorBanner';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="max-w-7xl">
      <CalculatorBanner />

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          {' '}
          <img src={viteLogo} className="logo" alt="Vite logo" />{' '}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <h1 className="text-center text-xl font-semibold text-orange-500 ">
          Title Sample
        </h1>
        Click on the Vite and React logos to learn more
      </p>
      <input type="text" id="foo" className="bar" /> */}
    </div>
  );
}

export default App;
