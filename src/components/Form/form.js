import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Form = ({
  onFormSubmit,
  checkTypedVerticalNumberIsEven,
  checkTypedHorizontalNumberIsEven,
  isHorizontalValid,
  isVerticalValid,
  onHorizontalInputChange,
  onVerticalInputChange,
  horizontalValue,
  verticalValue,
  alertMessage,
}) => (
  <form
    className="form"
    onSubmit={(evt) => {
      evt.preventDefault();
      onFormSubmit();
    }}
  >
    <div className="form__input">
      <p htmlFor="verticalAxis">
        Vertical Axis
      </p>
      <input
        id="verticalAxis"
        type="number"
        placeholder={verticalValue}
        min="1"
        step="2"
        onChange={(evt) => {
          const number = parseInt(evt.target.value, 10);
          checkTypedVerticalNumberIsEven(number);
          onVerticalInputChange(number);
        }}
      />
      <p className={isVerticalValid ? 'form__input__valid' : 'form__input__invalid'}>{alertMessage}</p>

      <p htmlFor="horizontalAxis">
        Horizontal Axis
      </p>
      <input
        id="horizontalAxis"
        type="number"
        placeholder={horizontalValue}
        min="1"
        step="2"
        onChange={(evt) => {
          const number = parseInt(evt.target.value, 10);
          checkTypedHorizontalNumberIsEven(number);
          onHorizontalInputChange(number);
        }}
      />
      <p className={isHorizontalValid ? 'form__input__valid' : 'form__input__invalid'}>{alertMessage}</p>
    </div>
    <div className="form__submit">
      <input id="button__submit" type="submit" value="New Maze" disable={!isHorizontalValid || !isVerticalValid ? 'true' : 'false'} />
    </div>
  </form>
);

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  checkTypedVerticalNumberIsEven: PropTypes.func.isRequired,
  checkTypedHorizontalNumberIsEven: PropTypes.func.isRequired,
  isHorizontalValid: PropTypes.bool.isRequired,
  isVerticalValid: PropTypes.bool.isRequired,
  onHorizontalInputChange: PropTypes.func.isRequired,
  onVerticalInputChange: PropTypes.func.isRequired,
  horizontalValue: PropTypes.number.isRequired,
  verticalValue: PropTypes.number.isRequired,
  alertMessage: PropTypes.string.isRequired,
};
export default Form;
