import cardFront from "../images/bg-card-front.png";
import cardBack from "../images/bg-card-back.png";
import mainDesktop from "../images/bg-main-desktop.png";
import cardLogo from "../images/card-logo.svg";

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
export default CardPreview;
