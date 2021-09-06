import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Mazeboard = ({ horizontalValue, verticalValue }) => (
  <div className="mazeboard">
    <div className="mazeboard__row" id={horizontalValue}>
      <div className="mazeboard__cell" id={`${horizontalValue}-${verticalValue}`}>Cell</div>
    </div>
  </div>
);

Mazeboard.propTypes = {
  horizontalValue: PropTypes.number.isRequired,
  verticalValue: PropTypes.number.isRequired,
};

export default Mazeboard;
