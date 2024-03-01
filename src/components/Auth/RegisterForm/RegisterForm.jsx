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

const RegisterForm = () => {
  const nandleFormSubmit = ms => new Promise(r => setTimeout(r, ms));

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
          onSubmit={async values => {
            await nandleFormSubmit(500);
            alert(JSON.stringify(values, null, 2));
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
