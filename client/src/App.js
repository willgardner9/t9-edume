import "./App.css";
import {useState, useEffect} from "react";
import axios from "axios";
import PhoneButton from "./components/PhoneButton";
import PhoneKeyboardLayout from "./components/PhoneKeyboardLayout";
import PhoneScreen from "./components/PhoneScreen";
import PhoneBody from "./components/PhoneBody";
import PhoneShadow from "./components/PhoneShadow";

function App() {
  const [t9Combinations, setT9Combinations] = useState({
    allCombinations: {},
    filteredCombinations: {},
  });
  const [numbers, setNumbers] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!numbers || numbers.includes("0") || numbers.includes("1")) {
        return setT9Combinations({
          allCombinations: {},
          filteredCombinations: {},
        });
      }
      const result = await axios.post("http://localhost:9000/t9", {numbers});
      setT9Combinations(result.data);
    };

    fetchData();
  }, [numbers]);

  return (
    <div className="container">
      <PhoneBody>
        <PhoneScreen t9Combinations={t9Combinations} />
        <PhoneKeyboardLayout>
          <PhoneButton mainDisplay="1" />
          <PhoneButton
            mainDisplay="2"
            altDisplay="abc"
            onClick={() => setNumbers(numbers.concat("2"))}
          />
          <PhoneButton
            mainDisplay="3"
            altDisplay="def"
            onClick={() => setNumbers(numbers.concat("3"))}
          />
          <PhoneButton
            mainDisplay="4"
            altDisplay="ghi"
            onClick={() => setNumbers(numbers.concat("4"))}
          />
          <PhoneButton
            mainDisplay="5"
            altDisplay="jkl"
            onClick={() => setNumbers(numbers.concat("5"))}
          />
          <PhoneButton
            mainDisplay="6"
            altDisplay="mno"
            onClick={() => setNumbers(numbers.concat("6"))}
          />
          <PhoneButton
            mainDisplay="7"
            altDisplay="pqrs"
            onClick={() => setNumbers(numbers.concat("7"))}
          />
          <PhoneButton
            mainDisplay="8"
            altDisplay="tuv"
            onClick={() => setNumbers(numbers.concat("8"))}
          />
          <PhoneButton
            mainDisplay="9"
            altDisplay="wxyz"
            onClick={() => setNumbers(numbers.concat("9"))}
          />
          <PhoneButton mainDisplay="*" onClick={() => setNumbers("")} />
          <PhoneButton mainDisplay="0" altDisplay="+" />
          <PhoneButton mainDisplay="#" />
        </PhoneKeyboardLayout>
      </PhoneBody>
      <PhoneShadow />
    </div>
  );
}

export default App;
