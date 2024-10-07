import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increaseFN = () => setCount(count + 1);
  const decreaseFN = () => setCount(count - 1);
  const resetFN = () => setCount(0);

  let colorValue = count > 0 ? "green" : count < 0 ? "red" : "black"; // advanced with ternary operator
//   let colorValue;  
//   if (count > 0) {           // junior way
//     colorValue = "green";
//   } else if (count < 0) {
//     colorValue = "red";
//   } else {
//     colorValue = "black";
//   }
  return (
    <div className="container">
      <h3>Counter app</h3>
      <span style={{ color: colorValue }} id="value">
        {/* <span style={{ color }} id="value">  */}
        {/* trong trường hợp ta dùng biến color cho style color, thì chỉ cần khai báo "color" là đủ */}
        {count}
      </span>
      <div className="btn_group">
        <button onClick={decreaseFN} className="btn btn_decrease">
          DECREASE
        </button>
        <button onClick={resetFN} className="btn btn_reset">
          RESET
        </button>
        <button onClick={increaseFN} className="btn btn_increase">
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default App;
