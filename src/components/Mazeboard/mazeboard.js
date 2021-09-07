import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Row from 'src/components/Mazeboard/Row/row';

const Mazeboard = ({ horizontalValue, verticalValue }) => (
  <div className="mazeboard">
    <Row horizontalValue={horizontalValue} verticalValue={verticalValue} />
  </div>
);

Mazeboard.propTypes = {
  horizontalValue: PropTypes.number.isRequired,
  verticalValue: PropTypes.number.isRequired,
};

export default Mazeboard;
