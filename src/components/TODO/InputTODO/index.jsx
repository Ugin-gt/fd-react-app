import React from 'react';
import cx from 'classnames';
import { ErrorMessage } from 'formik';
import styles from './InputTODO.module.scss';

const Input = props => {
  const { field, meta, form, ...rest } = props;

  const classNames = cx(styles.input, {
    [styles.validInput]: meta.touched && !meta.error,
    [styles.invalidInput]: meta.touched && meta.error,
  });

  return (
    <>
      <label>
        <input {...field} type='text' className={classNames} {...rest} />
        <ErrorMessage
          component='div'
          className={styles.arrow}
          name={field.name}
        />
      </label>
    </>
  );
};

export default Input;
