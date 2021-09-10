import React from 'react';
import PropTypes from 'prop-types';
import 'src/components/Mazeboard/style.scss';

const Cell = ({ verticalValue, horizontalValue, activeRow }) => {
  const cell = [];
  const randomInt = (min, max) => {
    const generatedIntNb = Math.floor(Math.random() * max) + min;
    return generatedIntNb;
  };

  for (let j = 1; j < verticalValue + 1; j += 1) {
    if ((activeRow === 2 && j === 1)
    || (activeRow === horizontalValue - 1 && j === verticalValue)) {
      cell.push(
        <div className="mazeboard__cell mazeboard__path" key={`${activeRow}-${j}`} id={`${activeRow}-${j}`}>
          {randomInt(1, verticalValue * horizontalValue)}
        </div>
        ,
      );
    }
    else if (j === 1
       || j === verticalValue
       || activeRow === 1
       || activeRow === horizontalValue
    ) {
      cell.push(
        <div className="mazeboard__cell mazeboard__boundary" key={`${activeRow}-${j}`} id={`${activeRow}-${j}`}>
          {activeRow} - {j}
        </div>,
      );
    }
    else if (j % 2 !== 0 || activeRow % 2 !== 0) {
      cell.push(
        <div className="mazeboard__cell mazeboard__wall" key={`${activeRow}-${j}`} id={`${activeRow}-${j}`}>
          {activeRow} - {j}
        </div>,
      );
    }
    else {
      cell.push(
        <div className="mazeboard__cell mazeboard__path" key={`${activeRow}-${j}`} id={`${activeRow}-${j}`}>
          {randomInt(1, verticalValue * horizontalValue)}
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
  activeRow: PropTypes.number.isRequired,
};
export default Cell;
