import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { SocialLogin } from '../components/SocialLogin';
import { Checkbox } from '../components/Form/Checkbox';
import { TextInput } from '../components/Form/TextInput';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';

import { Box, Text } from '../../theme/Theme';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too short')
    .max(20, 'Too long')
    .required('Required'),
});

export const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => {}}>
          <Box flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text variant="button" color="primary" marginLeft="s">
              Sign Up Here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Formik
          initialValues={{ email: '', password: '', remember: false }}
          onSubmit={console.log}
          validationSchema={LoginSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <>
              <Box marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter Your Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <TextInput
                icon="lock"
                placeholder="Enter Your Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password}
                touched={touched.password}
              />
              <Box flexDirection="row" justifyContent="space-between">
                <Checkbox
                  label="Remember me"
                  checked={values.remember}
                  onChange={() => setFieldValue('remember', !values.remember)}
                />
                <Button variant="transparent" onPress={() => {}}>
                  <Text color="primary">Forgot Password</Text>
                </Button>
              </Box>
              <Box alignItems="center">
                <Button
                  variant="primary"
                  onPress={handleSubmit}
                  label="Login into your account"
                />
              </Box>
            </>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

const styles = StyleSheet.create({});
