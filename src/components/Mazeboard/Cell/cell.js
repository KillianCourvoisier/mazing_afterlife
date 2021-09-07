import React from 'react';
import PropTypes from 'prop-types';
import 'src/components/Mazeboard/style.scss';

const Cell = ({ verticalValue, horizontalValue, i }) => {
  const cell = [];

  for (let j = 1; j < verticalValue + 1; j += 1) {
    if (j === 1 || j === verticalValue || i === 1 || i === horizontalValue) {
      cell.push(
        <div className="mazeboard__cell mazeboard__wall" key={`${i}-${j}`} id={`${i}-${j}`}>
          {i} - {j}
        </div>,
      );
    }
    else {
      cell.push(
        <div className="mazeboard__cell mazeboard__path" key={`${i}-${j}`} id={`${i}-${j}`} name={`wesh-${i}-${j}`} />
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
};
export default Cell;
