import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './ButtonStyles';
// import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick} type="button">
      Load more
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
