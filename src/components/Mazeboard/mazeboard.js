/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';
import './style.scss';

const Mazeboard = () => {
  const board = [];
  const horizontalAxis = 30;
  const verticalAxis = 15;

  for (let i = 1; i < horizontalAxis + 1; i += 1) {
    const rows = [];

    for (let j = 1; j < verticalAxis + 1; j += 1) {
      rows.push(
        <div className="mazeboard__cell" key={`${i}-${j}`} id={`${i}-${j}`}>
          {i} - {j}
        </div>,
      );
    }

    board.push(
      <div className="mazeboard__row" key={i} id={i}> {rows}</div>,
    );
  }
  return (
    <div className="mazeboard">
      <div className="formbox">
        <form className="mazeboard__form">
          <label className="mazeboard__form__label">
            Horizontal Axis
            <input type="number" placeholder="8" />
          </label>
          <label className="mazeboard__form__label">
            Vertical Axis
            <input type="number" placeholder="8" />
          </label>
        </form>
      </div>
      {board}
    </div>
  );
};

export default Mazeboard;
