import * as yup from 'yup';

const editUserSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(25, 'Maximum name length is 25 symbols'),
  email: yup
    .string()
    .email('Invalid email format')
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Invalid email format'
    ),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(24, 'Maximum password length is 24 symbols'),
});

export default editUserSchema;
