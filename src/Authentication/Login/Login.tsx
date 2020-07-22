import React from 'react';
import { StyleSheet, View } from 'react-native';

import { SocialLogin } from '../components/SocialLogin';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';

import { Box, Text } from '../../theme/Theme';

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
      <View></View>
    </Container>
  );
};

const styles = StyleSheet.create({});
