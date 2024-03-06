import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/authOperations';
import { useAuth } from 'hooks';
import { loginSchema } from 'schemas';
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
} from '../RegLogForm.styled';
import Eye from 'components/Icons/Eye';
import EyeCrossed from 'components/Icons/EyeCrossed';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const { t } = useTranslation();

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
            <AuthLink to={`/auth/register`}>{t('authForms.regTitle')}</AuthLink>
          </li>
          <li>
            <AuthLink to={`/auth/login`}>{t('authForms.loginTitle')}</AuthLink>
          </li>
        </AuthList>

        <FormUi onSubmit={handleSubmit} autoComplete="off">
          <Input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            $error={errors.email && touched.email}
            name="email"
            placeholder={t('authForms.email')}
            type="email"
          />
          {errors.email && touched.email && (
            <ErrorPara>{errors.email}</ErrorPara>
          )}
          <PassInputWrap>
            <Input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              $error={errors.password && touched.password}
              name="password"
              placeholder={t('authForms.confirm')}
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
                  strokeColor={'#fff'}
                />
              ) : (
                <EyeCrossed
                  width={20}
                  height={20}
                  fillColor={'none'}
                  strokeColor={'#fff'}
                />
              )}
            </HideBtn>
          </PassInputWrap>
          {errors.password && touched.password && (
            <ErrorPara>{errors.password}</ErrorPara>
          )}

          <SubmitBtn type="submit" disabled={isSubmitting}>
            {isLoading ? (
              <SmallLoader width="25" height="25" />
            ) : (
              t('authForms.loginButton')
            )}
          </SubmitBtn>
        </FormUi>
      </FormWrap>
    </Background>
  );
};

export default LoginForm;
