const InputComponent = (props) => {
  return (
    <div className="inputComponentContainer">
      <label htmlFor={props.htmlFor}>{props.labelText}</label>
      <input
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => props.stateChanger(e)}
      ></input>
    </div>
  );
};
export default InputComponent;