import "./App.css";
import {useState, useEffect} from "react";
import axios from "axios";
import PhoneButton from "./components/PhoneButton";
import PhoneKeyboardLayout from "./components/PhoneKeyboardLayout";

function App() {
  const [errorMessage, setErrorMessage] = useState();
  const [t9Combinations, setT9Combinations] = useState();
  const [numbers, setNumbers] = useState("44");

  useEffect(() => {
    const fetchData = async () => {
      if (!numbers) return;
      if (numbers.includes("0") || numbers.includes("1")) {
        setNumbers();
        return setErrorMessage(`T9 doesn't include 0's and 1's!`);
      }
      const result = await axios.post("http://localhost:9000/t9", {numbers});
      setT9Combinations(result.data);
      setErrorMessage();
    };

    fetchData();
  }, [numbers]);

  return (
    <div className="container">
      <PhoneKeyboardLayout>
        <PhoneButton mainDisplay="1" />
        <PhoneButton mainDisplay="2" altDisplay="abc" />
        <PhoneButton mainDisplay="3" altDisplay="def" />
        <PhoneButton mainDisplay="4" altDisplay="ghi" />
        <PhoneButton mainDisplay="5" altDisplay="jkl" />
        <PhoneButton mainDisplay="6" altDisplay="mno" />
        <PhoneButton mainDisplay="7" altDisplay="pqrs" />
        <PhoneButton mainDisplay="8" altDisplay="tuv" />
        <PhoneButton mainDisplay="9" altDisplay="wxyz" />
        <PhoneButton mainDisplay="*" />
        <PhoneButton mainDisplay="0" altDisplay="+" />
        <PhoneButton mainDisplay="#" />
      </PhoneKeyboardLayout>
      <form>
        <input type="number" onChange={(e) => setNumbers(e.target.value)} />
      </form>
      {numbers ? JSON.stringify(t9Combinations, null, 2) : errorMessage}
      {numbers}
    </div>
  );
}

export default App;
