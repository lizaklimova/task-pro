import { Formik } from 'formik';
import {
  Background,
  FormWrap,
  AuthList,
  AuthLink,
  FormUi,
  Input,
  SubmitBtn,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/authOperations';
import { useState } from 'react';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Background>
      <FormWrap>
        <AuthList>
          <li>
            <AuthLink to={`/auth/register`}>Registration</AuthLink>
          </li>
          <li>
            <AuthLink to={`/auth/login`}>Log In</AuthLink>
          </li>
        </AuthList>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={() => {
            handleFormSubmit();
            // alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ isSubmitting }) => (
            <FormUi>
              <Input name="email" placeholder="Enter your email" type="email" />

              <Input
                name="password"
                placeholder="Confirm a password"
                type="password"
              />

              <SubmitBtn type="submit" disabled={isSubmitting}>
                Log In Now
              </SubmitBtn>
            </FormUi>
          )}
        </Formik>
      </FormWrap>
    </Background>
  );
};

export default LoginForm;
