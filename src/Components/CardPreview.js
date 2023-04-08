import cardFront from "../images/bg-card-front.png";
import cardBack from "../images/bg-card-back.png";
import mainDesktop from "../images/bg-main-desktop.png";
import cardLogo from "../images/card-logo.svg";
import { AppContext } from "../App";

const CardPreview = () => {
  return (
    <AppContext.Consumer>
      {(value) => (
        <div className="card-preview-container">
          <img
            className="background-image"
            src={mainDesktop}
            alt="background-image"
          />
          <div className="card-images">
            <div className="card-front-container">
              <img
                className="card card-front"
                src={cardFront}
                alt="card Front"
              />
              <img src={cardLogo} alt="card Logo" className="cardLogo" />
              <p className="cardNumber">{value.number}</p>
              <p className="cardholderName">{value.name}</p>
              <p className="date">
                {value.month}/{value.year}
              </p>
            </div>
            <div className="card-back-container">
              <img className="card card-back" src={cardBack} alt="card Back" />
              <p className="Cvc">{value.CVC}</p>
            </div>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
};
export default CardPreview;
