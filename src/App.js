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
          <img src={cardLogo} alt="card Logo" className="cardLogo"/>
          <p className="cardNumber">{props.cardNumberInput}</p>
          <p className="cardholderName">{props.cardholderNameInput}</p>
          <p className="date">{props.monthInput}/{props.yearInput}</p>
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
        onChange={(e) => props.stateChanger(e.target.value)}
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
        stateChanger={props.setCardNumberInput}
      />
      <div className="dateCvcContainer">
        <div className="inputComponentContainer">
          <label htmlFor="Date">Exp. Date (MM/YY)</label>
          <div className="twodDateInputContainer ">
            <input
              type="number"
              placeholder="MM"
              onChange={(e) => props.setMonthInput(e.target.value)}
              required
            ></input>
            <input
              type="number"
              placeholder="YY"
              onChange={(e) => props.setYearInput(e.target.value)}
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
  const [cardNumberInput, setCardNumberInput] = useState("000 00000 0000 0000");
  const [cardholderNameInput, setCardholderName] = useState("JANE APPLESEED");
  const [monthInput, setMonthInput] = useState("00");
  const [yearInput, setYearInput] = useState("00");
  const [CvcInput, setCvcInput] = useState("000");

  return (
    <div className="App">
      <div className="div-in-app">
        <CardPreview
          cardNumberInput={cardNumberInput}
          cardholderNameInput={cardholderNameInput}
          monthInput={monthInput}
          yearInput={yearInput}
          CvcInput={CvcInput}
        />

        <FormContainer
          setCardNumberInput={setCardNumberInput}
          setCardholderName={setCardholderName}
          setMonthInput={setMonthInput}
          setYearInput={setYearInput}
          setCvcInput={setCvcInput}
        />
      </div>
    </div>
  );
}

export default App;
