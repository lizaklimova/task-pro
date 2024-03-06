import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup.string().min(3).required('Name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Invalid email format'
    )
    .required('Email is required'),
  password: yup.string().min(6).max(24).required('Password is required'),
});

export default registerSchema;
