import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Form = ({
  onFormSubmit,
  onHorizontalInputChange,
  onVerticalInputChange,
  horizontalValue,
  verticalValue,
}) => (
  <form
    className="form"
    onSubmit={(evt) => {
      evt.preventDefault();
      onFormSubmit();
    }}
  >
    <div className="form__input">
      <label htmlFor="verticalAxis">
        Vertical Axis
        <input
          id="verticalAxis"
          type="number"
          placeholder={verticalValue}
          onChange={(evt) => {
            const number = parseInt(evt.target.value, 10);
            onVerticalInputChange(number);
          }}
        />
      </label>

      <label htmlFor="horizontalAxis">
        Horizontal Axis
        <input
          id="horizontalAxis"
          type="number"
          placeholder={horizontalValue}
          onChange={(evt) => {
            const number = parseInt(evt.target.value, 10);
            onHorizontalInputChange(number);
          }}
        />
      </label>
    </div>
    <div className="form__submit">
      <input id="button__submit" type="submit" value="New Maze" />
    </div>
  </form>
);

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onHorizontalInputChange: PropTypes.func.isRequired,
  onVerticalInputChange: PropTypes.func.isRequired,
  horizontalValue: PropTypes.number.isRequired,
  verticalValue: PropTypes.number.isRequired,
};
export default Form;
