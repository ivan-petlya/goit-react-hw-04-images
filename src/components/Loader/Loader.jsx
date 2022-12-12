import React from 'react';
import css from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <section className={css.Loader}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.8"
        width="84"
        visible={true}
      />
    </section>
  );
};
export default Loader;
