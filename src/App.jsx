import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const handlePlusButton = () => {
    if (count == 10) {
      alert("Products cannot be 11");
      return;
    }
    setCount(count + 1);
  };

  const handleMinusButton = () => {
    if (count == 1) {
      alert("Products cannot be 0");
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <Navbar />
      <p>{count}</p>
      <button onClick={handlePlusButton}>+</button>
      <button onClick={handleMinusButton}>-</button>
    </>
  );
}

export default App;
