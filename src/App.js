import "./App.css";
import cardFront from "./images/bg-card-front.png";
import cardBack from "./images/bg-card-back.png";
// import mainDesktop from "./images/bg-main-desktop.png";
import { useState } from "react";

const CardPreview = () => {
  return (
    <div className="card-images">
      <img className="card" src={cardFront} alt="card Front"/>
      <img className="card" src={cardBack} alt="card Back"/>
      {/* <img src={mainDesktop} alt="background-image" /> */}
    </div>
  );
};
const InputComponent = (props) => {
  return (
    <div className="inputComponentContainer">
      <label htmlFor={props.htmlFor}>
        {props.labelText}
      </label>
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
          <label htmlFor="Date">
            Exp. Date (MM/YY)
          </label>
          <div className="twodDateInputContainer ">
            <input
              type="number"
              placeholder="MM"
              required
            ></input>
            <input
              type="number"
              placeholder="YY"
              required
            ></input>
          </div>

        </div>
        <InputComponent
          htmlFor="CVC"
          type="number"
          placeholder="e.g. 123"
          labelText="CVC"
          required
          className="cvc"
        />
      </div>
      <button>Confirm</button>
    </form>
  );
};

function App() {
  const [cardNumberInput, setCardNumberInput] = useState("000 00000 0000 0000");
  const [cardholderNameInput, setCardholderName] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [CvcInput, setCvcInput] = useState("");

  return (
    <div className="App">
      <CardPreview />
      <FormContainer
        setCardNumberInput={setCardNumberInput}
        setCardholderName={setCardholderName}
      />
    </div>
  );
}

export default App;
