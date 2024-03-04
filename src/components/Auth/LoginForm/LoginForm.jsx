import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginSchema } from 'validations';
import { logIn } from '../../../redux/auth/authOperations';
import {
  Background,
  FormWrap,
  AuthList,
  AuthLink,
  FormUi,
  Input,
  SubmitBtn,
  ErrorPara,
} from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    const formData = {
      email: values.email,
      password: values.password,
    };

    const isValid = await loginSchema.isValid(formData);
    if (!isValid) {
      return;
    }

    dispatch(logIn({ ...formData }));

    await new Promise(res => setTimeout(res, 500));
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
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
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          {errors.email && touched.email && (
            <ErrorPara>{errors.email}</ErrorPara>
          )}
          <Input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password && touched.password}
            name="password"
            placeholder="Confirm a password"
            type="password"
          />
          {errors.password && touched.password && (
            <ErrorPara>{errors.password}</ErrorPara>
          )}

          <SubmitBtn type="submit" disabled={isSubmitting}>
            Log In Now
          </SubmitBtn>
        </FormUi>
      </FormWrap>
    </Background>
  );
};

export default LoginForm;
