import React from 'react';
import { StyleSheet, View } from 'react-native';

import { SocialLogin } from '../components/SocialLogin';
import { Checkbox } from '../components/Form/Checkbox';
import { TextInput } from '../components/Form/TextInput';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';

import { Box, Text } from '../../theme/Theme';

const emailValidator = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const passwordValidator = (password: string) => password.length >= 6;

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
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter Your Email"
            validator={emailValidator}
          />
        </Box>
        <TextInput
          icon="lock"
          placeholder="Enter Your Password"
          validator={passwordValidator}
        />
        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox label="Remember me" />
          <Button variant="transparent" onPress={() => {}}>
            <Text color="primary">Forgot Password</Text>
          </Button>
        </Box>
        <Box alignItems="center">
          <Button
            variant="primary"
            onPress={() => {}}
            label="Login into your account"
          />
        </Box>
      </Box>
    </Container>
  );
};

const styles = StyleSheet.create({});
