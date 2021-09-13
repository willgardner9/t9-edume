import "./App.css";
import {useState, useEffect} from "react";
import axios from "axios";

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
    <>
      <form>
        <input type="number" onChange={(e) => setNumbers(e.target.value)} />
      </form>
      {numbers ? JSON.stringify(t9Combinations, null, 2) : errorMessage}
      {numbers}
    </>
  );
}

export default App;
