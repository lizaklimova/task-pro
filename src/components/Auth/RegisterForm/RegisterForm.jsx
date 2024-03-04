import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { register } from '../../../redux/auth/authOperations';
import { registerSchema } from 'schemas';
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

const RegisterForm = () => {
  const dispatch = useDispatch();

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
            onChange={handleChange}
            onBlur={handleBlur}
            $error={errors.name && touched.name}
            name="name"
            placeholder="Enter your name"
          />
          {errors.name && touched.name && <ErrorPara>{errors.name}</ErrorPara>}
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
            placeholder="Create a password"
            type="password"
          />
          {errors.password && touched.password && (
            <ErrorPara>{errors.password}</ErrorPara>
          )}
          <SubmitBtn type="submit" disabled={isSubmitting}>
            Register Now
          </SubmitBtn>
        </FormUi>
      </FormWrap>
    </Background>
  );
};

export default RegisterForm;
