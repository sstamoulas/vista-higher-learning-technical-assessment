import useWindowSize from './../../hooks/useWindowSize';

import './radio-button-container.styles.scss';

const RadioButtonContainer = ({ children }) => {
  const { width } = useWindowSize();

  return (
    <div className={`row ${width <= 350 ? 'mobile-view' : ''}`}>
      { children }
    </div>
  );
}

export default RadioButtonContainer;
