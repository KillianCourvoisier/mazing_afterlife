import React from 'react';
import PropTypes from 'prop-types';
import 'src/components/Mazeboard/style.scss';

const Cell = ({ verticalValue, horizontalValue, i }) => {
  const cell = [];
  const randomInt = (min, max) => {
    const generatedIntNb = Math.floor(Math.random() * max) + min;
    return generatedIntNb;
  };

  for (let j = 1; j < verticalValue + 1; j += 1) {
    if (j === 1
       || j === verticalValue
       || i === 1
       || i === horizontalValue
    ) {
      cell.push(
        <div className="mazeboard__cell mazeboard__boundary" key={`${i}-${j}`} id={`${i}-${j}`}>
          {i} - {j}
        </div>,
      );
    }
    else if (j % 2 !== 0 || i % 2 !== 0) {
      cell.push(
        <div className="mazeboard__cell mazeboard__wall" key={`${i}-${j}`} id={`${i}-${j}`}>
          {i} - {j}
        </div>,
      );
    }
    else {
      cell.push(
        <div className="mazeboard__cell mazeboard__path" key={`${i}-${j}`} id={`${i}-${j}`}>
          {randomInt(1, verticalValue * horizontalValue)};
        </div>
        ,
      );
    }
  }

  return (
    [cell]
  );
};

Cell.propTypes = {
  verticalValue: PropTypes.number.isRequired,
  horizontalValue: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired,
};
export default Cell;
