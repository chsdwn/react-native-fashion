import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from '../../theme/Theme';

import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../constants/app';

export const SLIDE_HEIGHT = 0.61 * WINDOW_HEIGHT;

const TITLE_CONTAINER_HEIGHT = 100;
const BORDER_RADIUS = 75;

interface IProps {
  title: string;
  right?: boolean;
  picture: number;
}

export const Slide: React.FC<IProps> = ({ title, right, picture }) => {
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
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  titleContainer: {
    height: TITLE_CONTAINER_HEIGHT,
    justifyContent: 'center',
  },
});
