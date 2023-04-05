import "./App.css";
import cardFront from "./images/bg-card-front.png";
import cardBack from "./images/bg-card-back.png";
import mainDesktop from "./images/bg-main-desktop.png";
import { useState } from "react";
import cardLogo from "./images/card-logo.svg";

const CardPreview = (props) => {
  return (
    <div className="card-preview-container">
      <img
        className="background-image"
        src={mainDesktop}
        alt="background-image"
      />
      <div className="card-images">
        <div className="card-front-container">
          <img className="card card-front" src={cardFront} alt="card Front" />
          <img src={cardLogo} alt="card Logo" className="cardLogo" />
          <p className="cardNumber">{props.cardNumberInput}</p>
          <p className="cardholderName">{props.cardholderNameInput}</p>
          <p className="date">
            {props.monthInput}/{props.yearInput}
          </p>
        </div>
        <div className="card-back-container">
          <img className="card card-back" src={cardBack} alt="card Back" />
          <p className="Cvc">{props.CvcInput}</p>
        </div>
      </div>
    </div>
  );
};
const InputComponent = (props) => {
  return (
    <div className="inputComponentContainer">
      <label htmlFor={props.htmlFor}>{props.labelText}</label>
      <input
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        // maxLength={5}
        onChange={(e) => props.stateChanger(e)}
      ></input>
    </div>
  );
};

const FormContainer = (props) => {
  return (
    <form className="form">
      <InputComponent
        htmlFor="cardholderName"
        type="text"
        placeholder="e.g. Jane Appleseed"
        labelText="Cardholder Name"
        required
        stateChanger={props.setCardholderName}
      />
      <InputComponent
        htmlFor="cardNumber"
        type="number"
        placeholder="e.g. 123 45678 9123 0000"
        labelText="Card Number"
        required
        defaultValue={props.number}
        stateChanger={props.setCardNumberInput}
      />
      <div className="dateCvcContainer">
        <div className="inputComponentContainer">
          <label htmlFor="Date">Exp. Date (MM/YY)</label>
          <div className="twodDateInputContainer ">
            <input
              type="number"
              placeholder="MM"
              onChange={(e) => props.setMonthInput(e)}
              required
            ></input>
            <input
              type="number"
              placeholder="YY"
              onChange={(e) => props.setYearInput(e)}
              required
            ></input>
          </div>
        </div>
        <InputComponent
          htmlFor="CVC"
          type="number"
          placeholder="e.g. 123"
          labelText="CVC"
          stateChanger={props.setCvcInput}
          required
          className="cvcInput"
        />
      </div>
      <button className="confirm btn btn-dark w-100 mt-3">Confirm</button>
    </form>
  );
};

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
      let newStr = "";
     for(let i = 0; i < e.target.value.length; i++) {
      if(isNaN(e.target.value[i]) || e.target.value[i] === " ") {
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

  return (
    <div className="App">
      <div className="div-in-app">
        <CardPreview
          cardNumberInput={str}
          cardholderNameInput={cardholderNameInput}
          monthInput={monthInput}
          yearInput={yearInput}
          CvcInput={CvcInput}
        />

        <FormContainer
          setCardNumberInput={cardNumberInputHandler}
          number={cardNumberInput}
          setCardholderName={cardholderNameInputHandler}
          setMonthInput={monthInputHandler}
          setYearInput={yearInputHandler}
          setCvcInput={cvcInputHandler}
        />
      </div>
    </div>
  );
}
export default App;
