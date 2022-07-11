import './button.styles.scss';

const Button = ({ text, isDisabled, handler }) => {
  return (
    <div className="row mt-2 button-container">
      <input type="submit" text={text} className="button w-100" onClick={handler} disabled={isDisabled} />
    </div>
  );
}

export default Button;
