// == Import npm
import React, { useState } from 'react';

// == Import
import './styles.css';

import Mazeboard from 'src/components/Mazeboard/mazeboard';
import Form from 'src/components/Form/form';

// == Composant
const App = () => {
  const [horizontalValue, setHorizontalValue] = useState(8);
  const [verticalValue, setVerticalValue] = useState(8);
  const [typedVerticalValue, setTypedVerticalValue] = useState(0);
  const [typedHorizontalValue, setTypedHorizontalValue] = useState(0);

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
    handleHorizontalInputChange(verticalNumber);
    const horizontalNumber = parseInt(typedHorizontalValue, 10);
    handleVerticalInputChange(horizontalNumber);
  };
  const handleFormSubmit = () => {
    init();
  };
  return (

    <div className="app">
      <Form
        onFormSubmit={handleFormSubmit}
        onHorizontalInputChange={handleHorizontalTypedInput}
        onVerticalInputChange={handleVerticalTypedInput}
        horizontalValue={horizontalValue}
        verticalValue={verticalValue}
      />
      <Mazeboard horizontalValue={horizontalValue} verticalValue={verticalValue} />
    </div>
  );
};

// == Export
export default App;
