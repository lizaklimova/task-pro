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

const LoginForm = () => {
  const handleFormSubmit = ms => new Promise(r => setTimeout(r, ms));

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
          onSubmit={async values => {
            await handleFormSubmit(500);
            alert(JSON.stringify(values, null, 2));
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
