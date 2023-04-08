import Swal from "sweetalert2";
import InputComponent from "./InputComponent";

const FormContainer = (props) => {
  const confirmWindow = () => {
    Swal.fire({
      icon: "success",
      title: "Thank you!",
      text: "We've added your card details",
    });
  };

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
      <button
        className="confirm btn btn-dark w-100 mt-3"
        onClick={confirmWindow}
      >
        Confirm
      </button>
    </form>
  );
};
export default FormContainer;
