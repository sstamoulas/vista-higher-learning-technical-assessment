import './timer.styles.scss';

const Timer = ({ minutes, seconds }) => (
  <div className="timer">
    <span>{minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
  </div>
);

export default Timer;
