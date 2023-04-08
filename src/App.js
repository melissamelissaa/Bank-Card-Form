import "./styles/App.css";
import React, { useState, useContext } from "react";
import FormContainer from "./Components/FormContainer";
import CardPreview from "./Components/CardPreview";
import "./styles/Responsive.css";

export const AppContext = React.createContext();

function App() {
  const [cardNumberInput, setCardNumberInput] = useState("0000000000000000");
  const [cardholderNameInput, setCardholderName] = useState("JANE APPLESEED");
  const [monthInput, setMonthInput] = useState("00");
  const [yearInput, setYearInput] = useState("00");
  const [CvcInput, setCvcInput] = useState("000");

  let str = "";
  for (let i = 0; i < cardNumberInput.length; i++) {
    if (i % 4 == 0) str += " ";

    str += cardNumberInput[i];
  }

  /* 
  @param e - event
  @param maxLength - defines max length for input field
  param stateChanger - state changer function
  @param isForName - true if the function is called for card holder name input
  */

  const inputHandler = (e, maxLength = 50, stateChanger, isForName = false) => {
    if (!isForName) {
      if (e.target.value.length > maxLength) {
        let inputTextToSet = "";

        for (let i = 0; i < maxLength; i++) {
          inputTextToSet += e.target.value[i];
        }

        e.target.value = inputTextToSet;
      } else {
        stateChanger(e.target.value);
      }
    } else {
      // Prevent users from entering numbers in cardholderNameInput

      let newStr = "";
      for (let i = 0; i < e.target.value.length; i++) {
        if (isNaN(e.target.value[i]) || e.target.value[i] === " ") {
          newStr += e.target.value[i];
        }
      }
      e.target.value = newStr;
      stateChanger(e.target.value.toUpperCase());
    }
  };

  const cardholderNameInputHandler = (e) =>
    inputHandler(e, 25, setCardholderName, true);
  const cardNumberInputHandler = (e) => inputHandler(e, 16, setCardNumberInput);
  const monthInputHandler = (e) => inputHandler(e, 2, setMonthInput);
  const yearInputHandler = (e) => inputHandler(e, 2, setYearInput);
  const cvcInputHandler = (e) => inputHandler(e, 3, setCvcInput);

  const dataForContext = {
    name: cardholderNameInput,
    number: cardNumberInput,
    month: monthInput,
    year: yearInput,
    CVC: CvcInput,
  };

  return (
    <div className="App">
      <AppContext.Provider value={dataForContext}>
        <div className="div-in-app">
          <CardPreview />
          <br />
          <FormContainer
            setCardNumberInput={cardNumberInputHandler}
            number={cardNumberInput}
            setCardholderName={cardholderNameInputHandler}
            setMonthInput={monthInputHandler}
            setYearInput={yearInputHandler}
            setCvcInput={cvcInputHandler}
          />
        </div>
      </AppContext.Provider>
    </div>
  );
}
export default App;
