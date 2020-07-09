import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../constants/app';

export const SLIDE_HEIGHT = 0.61 * WINDOW_HEIGHT;

const TITLE_CONTAINER_HEIGHT = 100;

interface IProps {
  title: string;
  right?: boolean;
}

export const Slide: React.FC<IProps> = ({ title, right }) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - TITLE_CONTAINER_HEIGHT) / 2 },
    {
      translateX: right
        ? WINDOW_WIDTH / 2 - TITLE_CONTAINER_HEIGHT / 2
        : -WINDOW_WIDTH / 2 + TITLE_CONTAINER_HEIGHT / 2,
    },
    { rotate: right ? '-90deg' : '270deg' },
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
  },
  titleContainer: {
    height: TITLE_CONTAINER_HEIGHT,
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontFamily: 'SF-Pro-Text-Bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 80,
  },
});
