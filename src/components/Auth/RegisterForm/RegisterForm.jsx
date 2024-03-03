import { Formik } from 'formik';
import {
  Background,
  FormWrap,
  AuthList,
  AuthLink,
  FormUi,
  Input,
  SubmitBtn,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/authOperations';
import { useState } from 'react';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
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
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={async () => {
            handleFormSubmit();
          }}
        >
          {({ isSubmitting }) => (
            <FormUi>
              <Input name="name" placeholder="Enter your name" />
              <Input name="email" placeholder="Enter your email" type="email" />

              <Input
                name="password"
                placeholder="Create a password"
                type="password"
              />

              <SubmitBtn type="submit" disabled={isSubmitting}>
                Register Now
              </SubmitBtn>
            </FormUi>
          )}
        </Formik>
      </FormWrap>
    </Background>
  );
};

export default RegisterForm;
