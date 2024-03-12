import { useState } from 'react';
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
  PassInputWrap,
  HideBtn,
  Google,
} from '../RegLogForm.styled';
import Eye from 'components/Icons/Eye';
import EyeCrossed from 'components/Icons/EyeCrossed';
import { FcGoogle } from 'react-icons/fc';
import { useTranslation } from 'react-i18next';

const RegisterForm = () => {
  const [visible, setVisible] = useState(false);
  const [pwd, setPwd] = useState('');

  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const { t } = useTranslation();

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
            <AuthLink to={`/auth/register`}>{t('authForms.regTitle')}</AuthLink>
          </li>
          <li>
            <AuthLink to={`/auth/login`}>{t('authForms.loginTitle')}</AuthLink>
          </li>
        </AuthList>

        <FormUi onSubmit={handleSubmit} autoComplete="off">
          <label>
            <Input
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              $error={errors.name && touched.name}
              name="name"
              placeholder={t('authForms.name')}
            />
            {errors.name && touched.name && (
              <ErrorPara>{errors.name}</ErrorPara>
            )}
          </label>
          <label>
            <Input
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              $error={errors.email && touched.email}
              name="email"
              placeholder={t('authForms.email')}
              type="email"
            />
            {errors.email && touched.email && (
              <ErrorPara>{errors.email}</ErrorPara>
            )}
          </label>

          <label>
            <PassInputWrap>
              <Input
                value={values.password}
                onChange={e => {
                  setPwd(e.target.value);
                  handleChange(e);
                }}
                onBlur={handleBlur}
                $error={errors.password && touched.password}
                name="password"
                placeholder={t('authForms.password')}
                type={visible ? 'text' : 'password'}
              />
              <HideBtn
                type="button"
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                {visible ? (
                  <Eye
                    width={20}
                    height={20}
                    fillColor={'none'}
                    strokeColor={`#fff`}
                  />
                ) : (
                  <EyeCrossed
                    width={20}
                    height={20}
                    strokeColor={`#fff`}
                    fillColor={'none'}
                  />
                )}
              </HideBtn>
            </PassInputWrap>
            {errors.password && touched.password && (
              <ErrorPara>{errors.password}</ErrorPara>
            )}
          </label>

          {pwd && (
            <PasswordStrengthBar
              password={pwd}
              minLength={6}
              barColors={PROGRESS_BAR_COLORS}
            />
          )}
          <Google to={'https://task-pro-3a4o.onrender.com/auth/google'}>
            <FcGoogle style={{ width: '28px', height: '28px' }} />
            <span>Register with Google</span>
          </Google>
          <SubmitBtn type="submit" disabled={isLoading}>
            {isLoading ? (
              <SmallLoader width="25" height="25" />
            ) : (
              t('authForms.regButton')
            )}
          </SubmitBtn>
        </FormUi>
      </FormWrap>
    </Background>
  );
};

export default RegisterForm;
