import React from 'react';
// import css from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';
import { StyledLoader } from './LoaderStyles';
const Loader = () => {
  return (
    <StyledLoader>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.8"
        width="84"
        visible={true}
      />
    </StyledLoader>
  );
};
export default Loader;
