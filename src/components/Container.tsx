import React, { ReactNode } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../constants/app';

import { useTheme } from '@shopify/restyle';
import { Box, Theme } from '../theme/Theme';

export const assets = [require('../../assets/patterns/1.png')];

const aspectRatio = 1200 / 1920;
const height = WINDOW_WIDTH * aspectRatio;
const FOOTER_HEIGHT = 240;

interface IProps {
  children: ReactNode;
  footer: ReactNode;
}

export const Container: React.FC<IProps> = ({ children, footer }) => {
  const theme = useTheme<Theme>();

  return (
    <Box flex={1} backgroundColor="white">
      <Box
        borderBottomLeftRadius="xl"
        overflow="hidden"
        height={height * 0.61}
        zIndex={2}
        elevation={2}>
        <Image source={assets[0]} style={{ width: WINDOW_WIDTH, height }} />
      </Box>
      <Box
        height={height * 0.61}
        width={WINDOW_WIDTH}
        position="absolute"
        backgroundColor="white"
        zIndex={1}
        elevation={1}
      />
      <Box flex={1} position="absolute" top={StatusBar.currentHeight}>
        <Image
          source={assets[0]}
          style={{
            width: WINDOW_WIDTH,
            height: height * 0.61 + theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box
        backgroundColor="white"
        borderTopRightRadius="xl"
        borderBottomLeftRadius="xl"
        borderBottomRightRadius="xl"
        height={
          WINDOW_HEIGHT - height * 0.61 - FOOTER_HEIGHT + theme.borderRadii.xl
        }
        zIndex={2}
        elevation={2}>
        {children}
      </Box>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        height={FOOTER_HEIGHT}
        width={WINDOW_WIDTH}
        backgroundColor="title"
        justifyContent="flex-end"
        elevation={1}
        zIndex={1}>
        <Box
          justifyContent="flex-end"
          backgroundColor="title"
          elevation={2}
          zIndex={2}
          height={FOOTER_HEIGHT - theme.borderRadii.xl}>
          {footer}
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({});
