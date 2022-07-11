const RadioButton = ({ text, handler, isChecked }) => {
  return (
    <div className="mt-2">
      <input type="radio" name="answer" id={text} value={text} onChange={handler} checked={isChecked} />
      <label htmlFor={text}>{text}</label>
    </div>
  );
}

export default RadioButton;
