import "./App.css";
import {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [t9Combinations, setT9Combinations] = useState();
  const [numbers, setNumbers] = useState("44");

  useEffect(() => {
    const fetchData = async () => {
      if (!numbers) return;
      const result = await axios.post("http://localhost:9000/t9", {numbers});
      setT9Combinations(result.data);
    };

    fetchData();
  }, [numbers]);

  return (
    <>
      <form>
        <input type="number" onChange={(e) => setNumbers(e.target.value)} />
      </form>
      {JSON.stringify(t9Combinations, null, 2)}
    </>
  );
}

export default App;
