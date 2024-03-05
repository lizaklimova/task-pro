import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import PasswordStrengthBar from 'react-password-strength-bar';
import { register } from '../../../redux/auth/authOperations';
import { useAuth } from 'hooks';
import { registerSchema } from 'schemas';
import { PROGRESS_BAR_COLORS } from 'constants';
import SmallLoader from 'components/Loader/SmallLoader';
import {
  Background,
  FormWrap,
  AuthList,
  AuthLink,
  FormUi,
  Input,
  SubmitBtn,
  ErrorPara,
} from './RegisterForm.styled';
import { useState } from 'react';
console.log(PROGRESS_BAR_COLORS);
const RegisterForm = () => {
  const [pwd, setPwd] = useState('');
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const onSubmit = async (values, actions) => {
    const formData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const isValid = await registerSchema.isValid(formData);
    if (!isValid) {
      return;
    }

    dispatch(register({ ...formData }));

    await new Promise(res => setTimeout(res, 500));
    actions.resetForm();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
      },
      validationSchema: registerSchema,
      onSubmit,
    });

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

        <FormUi onSubmit={handleSubmit} autoComplete="off">
          <Input
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            $error={errors.name && touched.name}
            name="name"
            placeholder="Enter your name"
          />
          {errors.name && touched.name && <ErrorPara>{errors.name}</ErrorPara>}
          <Input
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            $error={errors.email && touched.email}
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          {errors.email && touched.email && (
            <ErrorPara>{errors.email}</ErrorPara>
          )}

          <Input
            value={values.password}
            onBlur={handleBlur}
            onChange={e => {
              setPwd(e.target.value);
              handleChange(e);
            }}
            $error={errors.password && touched.password}
            name="password"
            placeholder="Create a password"
            type="password"
          />

          {pwd && (
            <PasswordStrengthBar
              password={pwd}
              minLength={6}
              barColors={PROGRESS_BAR_COLORS}
            />
          )}

          {errors.password && touched.password && (
            <ErrorPara>{errors.password}</ErrorPara>
          )}

          <SubmitBtn type="submit" disabled={isLoading}>
            {isLoading ? (
              <SmallLoader width="25" height="25" />
            ) : (
              'Register Now'
            )}
          </SubmitBtn>
        </FormUi>
      </FormWrap>
    </Background>
  );
};

export default RegisterForm;
