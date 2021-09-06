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

  const fetchData = () => {
    console.log(typedNumber);
  };

  const handleHorizontalInputChange = (typedNumber) => {
    setHorizontalValue(typedNumber);
  };

  const handleVerticalInputChange = (typedNumber) => {
    setVerticalValue(typedNumber);
  };

  const handleFormSubmit = () => {
    fetchData();
  };

  return (

    <div className="app">
      <Form
        onFormSubmit={handleFormSubmit}
        onHorizontalInputChange={handleHorizontalInputChange}
        onVerticalInputChange={handleVerticalInputChange}
        horizontalValue={horizontalValue}
        verticalValue={verticalValue}
      />
      <Mazeboard horizontalValue={horizontalValue} verticalValue={verticalValue} />
    </div>
  );
};

// == Export
export default App;
