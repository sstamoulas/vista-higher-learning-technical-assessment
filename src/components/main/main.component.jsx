import { useState, useRef } from 'react';
import { useStopwatch } from 'react-timer-hook';

import Timer from './../timer/timer.component';
import Label from './../label/label.component';
import Button from './../button/button.component';
import Heading from './../heading/heading.component';
import ActionButton from './../action-button/action-button.component';
import RadioButton from './../radio-button/radio-button.component';
import RadioButtonContainer from './../radio-button-container/radio-button-container.component';

import './main.styles.scss';

const Main = () => {
  const { seconds, minutes, start, pause, reset } = useStopwatch({ autoStart: false });
  const textAreaRef = useRef(null);
  const [state, setState] = useState({ answer: '', isRecording: false, isReviewing: false, isFinalAnswer: false });
  const { answer, isRecording, isReviewing, isFinalAnswer } = state;
  const expiryTimestamp = new Date();
  expiryTimestamp.setMinutes(expiryTimestamp.getMinutes() + 2);

  const finalAnswerHandler = (event) => {
    const { value } = event.target;
    setState(prevState => ({ ...prevState, isFinalAnswer: value === 'True' }));
  }

  const submitHandler = () => {
    alert(`The answer is: ${answer}`);
  };

  const answerHandler = (event) => {
    const { value } = event.target;
    setState(prevState => ({ ...prevState, answer: value }));
  }

  const stopHandler = () => {
    if(isReviewing) {
      textAreaRef.current.focus();
    }

    setState(prevState => ({ ...prevState, isRecording: false, isReviewing: false }));
    reset();
    pause();
  }

  const recordHandler = () => {
    setState(prevState => ({ ...prevState, isRecording: true, isReviewing: false }));
    reset();
    start();
  }

  const reviewHandler = () => {
    setState(prevState => ({ ...prevState, isRecording: false, isReviewing: true }));
    reset();
    start();
  }

  return (
    <div className="main">
      <Heading text="Say the vocabulary words." />
      <Timer minutes={minutes} seconds={seconds} />
      <div className="row">
        <ActionButton actionShape="square" text="Stop" handler={stopHandler} />
        <ActionButton actionShape="circle" text="Record" handler={recordHandler} />
        <ActionButton actionShape="triangle-right" text="Review your recording" handler={reviewHandler} />
      </div>
      <textarea className="row text-area mt-2" ref={textAreaRef} onChange={answerHandler} value={answer} />
      <RadioButtonContainer>
        <Label text="Is this your final answer?" />
        <RadioButton text={'True'} handler={finalAnswerHandler} isChecked={isFinalAnswer} />
        <RadioButton text={'False'} handler={finalAnswerHandler} isChecked={!isFinalAnswer} />
      </RadioButtonContainer>
      <Button text="Submit" isDisabled={!isFinalAnswer} handler={submitHandler} />
    </div>
  );
}

export default Main;
