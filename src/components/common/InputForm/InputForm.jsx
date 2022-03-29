import React from 'react';
import './InputForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const InputForm = ({
   name,
   button,
   placeholder,
   initialValues,
   validate,
   onSubmit,
   data,
}) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   console.log(data);

   return (
      <Formik
         initialValues={initialValues}
         validate={(values) => validate(values, data)}
         onSubmit={(values) => onSubmit(values, dispatch, navigate, data)}
      >
         {({ errors }) => (
            <>
               <Form className={`input-form input-form-${name}`}>
                  <div className='input-form-content'>
                     <Field
                        className='input-input'
                        type='text'
                        name={name}
                        id={name}
                        placeholder={placeholder}
                        autoComplete='off'
                     />
                     <button
                        className={`input-submit-button btn-submit-${name}`}
                        type='submit'
                     >
                        {button}
                     </button>
                  </div>

                  <ErrorMessage
                     name={name}
                     component={() => (
                        <small className='form-error-message'>
                           {errors.username || errors.pokemon}
                        </small>
                     )}
                  />

                  <ErrorMessage
                     name={name}
                     component={() => (
                        <small className='form-error-message'>
                           {errors.username || errors.pokemon}
                        </small>
                     )}
                  />
               </Form>
            </>
         )}
      </Formik>
   );
};

export default InputForm;
