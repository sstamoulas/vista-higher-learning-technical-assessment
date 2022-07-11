import './action-button.styles.scss';

const ActionButton = ({ actionShape, text, handler }) => {
  return (
    <div>
      <button className={`action-button ${actionShape}-background-color`} onClick={handler}>
        <div className={`${actionShape}`}></div>
      </button>
      <div className="action-label">{ text }</div>
    </div>
  );
}

export default ActionButton;
