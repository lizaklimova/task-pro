import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup.string().min(4).required('Name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup.string().min(6).max(24).required('Password is required'),
});

export default registerSchema;
