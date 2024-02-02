import PropTypes from "prop-types";

function Button({
  text = "Click Me!",
  color = "blue",
  margin = 10,
  width = 100,
  height = 100,
  fontSize = 12,
  alertText,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
    width: width + "px",
    height: height + "px",
    margin: margin + "px",
  };

  const handleClick = () => {
    alert(alertText);
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  alertText: PropTypes.string,
};

function Click() {
  return (
    <div>
      <Button alertText="Alert Text for Click Me!" />
      <Button height={200} text="Don't Click Me!" width={200} color="red" />
      <Button alertText="I love React" fontSize={20} />
    </div>
  );
}

export { Click };
