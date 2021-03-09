import React, { useState } from 'react';
import { Formik, Form, Field} from 'formik';
import PropTypes from 'prop-types';
import styles from 'FormTODO.module.scss';
import { TODO_SCHEMA } from '../../utils';
import Input from '../InputTODO';

const FormTODO = props => {
  const [todoArray, setTodoArray] = useState([
    {
      id: Date.now(),
      body: null,
      isDone: false,
      createdAt: new Date(),
    },
  ]);

  return (
    <Formik
      initialValues={{ todoBody: '' }}
      onSubmit={values => {
        const newTodo = {
          body: values.todoBody,
          id: Date.now(),
          isDone: false,
        };
        setTodoArray([...todoArray, newTodo]);
      }}
      validationSchema={TODO_SCHEMA}
    >
      <Form className={styles.form}>
        <div >
          <Field name='todoBody'>
            {fieldProps => (
              <Input {...fieldProps} placeholder='Enter your task' autoFocus />
            )}
          </Field>

          <Field name='email'>
            {fieldProps => <Input {...fieldProps} placeholder='Enter Email' />}
          </Field>
        </div>

        <Field
          className={styles.createAcc}
          type='submit'
          value='Create account'
        />
      </Form>
    </Formik>
  );
};

FormTODO.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormTODO;
