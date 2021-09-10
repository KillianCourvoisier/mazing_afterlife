// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.css';

import Mazeboard from 'src/components/Mazeboard/mazeboard';
import Form from 'src/components/Form/form';

// == Composant
const App = () => {
  const [horizontalValue, setHorizontalValue] = useState(9);
  const [verticalValue, setVerticalValue] = useState(9);
  const [typedVerticalValue, setTypedVerticalValue] = useState(9);
  const [typedHorizontalValue, setTypedHorizontalValue] = useState(9);
  const [isHorizontalValid, setIsHorizontalValid] = useState(true);
  const [isVerticalValid, setIsVerticalValid] = useState(true);
  const [alertMessage, setAlertMessage] = useState('');

  const checkTypedHorizontalNumberIsEven = (typedNumber) => {
    if (typedNumber % 2 === 0) {
      setIsHorizontalValid(false);
      setAlertMessage('Numbers must be odd ! :)');
    }
    else {
      setIsHorizontalValid(true);
      setTypedHorizontalValue(typedNumber);
    }
  };

  const checkTypedVerticalNumberIsEven = (typedNumber) => {
    if (typedNumber % 2 === 0) {
      setIsVerticalValid(false);
      setAlertMessage('Numbers must be odd ! :)');
    }
    else {
      setIsVerticalValid(true);
      setTypedVerticalValue(typedNumber);
    }
  };

  const handleHorizontalTypedInput = (typedNumber) => {
    setTypedHorizontalValue(typedNumber);
  };

  const handleVerticalTypedInput = (typedNumber) => {
    setTypedVerticalValue(typedNumber);
  };

  const handleHorizontalInputChange = (typedNumber) => {
    setHorizontalValue(typedNumber);
  };

  const handleVerticalInputChange = (typedNumber) => {
    setVerticalValue(typedNumber);
  };

  const init = () => {
    const verticalNumber = parseInt(typedVerticalValue, 10);
    handleVerticalInputChange(verticalNumber);
    const horizontalNumber = parseInt(typedHorizontalValue, 10);
    handleHorizontalInputChange(horizontalNumber);
  };
  const handleFormSubmit = () => {
    init();
  };

  return (

    <div className="app">
      <Form
        checkTypedVerticalNumberIsEven={checkTypedVerticalNumberIsEven}
        checkTypedHorizontalNumberIsEven={checkTypedHorizontalNumberIsEven}
        isHorizontalValid={isHorizontalValid}
        isVerticalValid={isVerticalValid}
        onFormSubmit={handleFormSubmit}
        onHorizontalInputChange={handleHorizontalTypedInput}
        onVerticalInputChange={handleVerticalTypedInput}
        horizontalValue={horizontalValue}
        verticalValue={verticalValue}
        alertMessage={alertMessage}
      />
      <Mazeboard
        horizontalValue={horizontalValue}
        verticalValue={verticalValue}
      />
    </div>
  );
};

// == Export
export default App;
