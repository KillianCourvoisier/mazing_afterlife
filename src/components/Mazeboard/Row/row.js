import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'src/components/Mazeboard/style.scss';

import Cell from 'src/components/Mazeboard/Cell/cell';

const Row = ({ horizontalValue, verticalValue }) => {
  const [boardState, setBoardState] = useState([]);
  useEffect(() => {
    const board = [];
    for (let i = 1; i < horizontalValue + 1; i += 1) {
      if (i === 1 || i === horizontalValue) {
        board.push(
          <div className="mazeboard__row mazeboard__wall" key={i} id={`row-${i}`}><Cell verticalValue={verticalValue} horizontalValue={horizontalValue} activeRow={i} /></div>,
        );
      }
      else {
        board.push(
          <div className="mazeboard__row mazeboard__path" key={i} id={`row-${i}`}><Cell verticalValue={verticalValue} horizontalValue={horizontalValue} activeRow={i} /></div>,
        );
      }
    }
    setBoardState(board);
  }, [horizontalValue, verticalValue]);

  return (
    [boardState]
  );
};

Row.propTypes = {
  horizontalValue: PropTypes.number.isRequired,
  verticalValue: PropTypes.number.isRequired,
};
export default Row;
