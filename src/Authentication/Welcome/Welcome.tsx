import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../constants/app';
import { Button } from '../../components/Button';

import { IPicture } from 'src/models/IPicture';

import { Box, Text } from '../../theme/Theme';

const picture: IPicture = {
  src: require('../../../assets/images/5.png'),
  width: 1080,
  height: 1920,
};

export const Welcome = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="slide.grey"
        alignItems="center"
        justifyContent="flex-end">
        <Image
          source={picture.src}
          style={{
            width: (WINDOW_WIDTH * (picture.height / picture.width)) / 3.5,
            height: (WINDOW_HEIGHT * (picture.height / picture.width)) / 3.5,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="slide.grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl">
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => {}}
          />
          <Button label="Join us, it's Free" onPress={() => {}} />
          <Button
            variant="transparent"
            label="Forgot Password"
            onPress={() => {}}
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({});
