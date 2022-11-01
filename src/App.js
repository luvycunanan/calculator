import './App.css'

function App() {
  return (
    <div className="body">
      <div className="main">
        <div className="display">display</div>
        <div className="button-container">
          <div className="btn-row">
            <button className="btn-col othr">AC</button>
            <button className="btn-col othr">+/-</button>
            <button className="btn-col othr">%</button>
            <button className="btn-col oprt">/</button>
          </div>
          <div className="btn-row">
            <button className="btn-col num">7</button>
            <button className="btn-col num">8</button>
            <button className="btn-col num">9</button>
            <button className="btn-col num oprt">x</button>
          </div>
          <div className="btn-row">
            <button className="btn-col num">4</button>
            <button className="btn-col num">5</button>
            <button className="btn-col num">6</button>
            <button className="btn-col oprt">-</button>
          </div>
          <div className="btn-row">
            <button className="btn-col num">1</button>
            <button className="btn-col num">2</button>
            <button className="btn-col num">3</button>
            <button className="btn-col oprt">+</button>
          </div>
          <div className="btn-row">
            <button className="btn-col num zero">0</button>
            <button className="btn-col num">.</button>
            <button className="btn-col oprt">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;