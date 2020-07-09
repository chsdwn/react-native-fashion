import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { multiply } from 'react-native-reanimated';
import { interpolateColor, onScrollEvent, useValue } from 'react-native-redash';

import { Slide, SLIDE_HEIGHT } from './Slide';
import { Subslide } from './Subslide';

import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../constants/app';

const BORDER_RADIUS = 75;

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about your outfits? Don't worry! Find the best outfit here!",
    color: '#BFEAF5',
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
  },
];

export const OnBoarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useValue(0);
  // TODO: scrollHandler useScrollHandler?
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * WINDOW_WIDTH),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={WINDOW_WIDTH}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}
          {...{ onScroll }}>
          {slides.map(({ title }, i) => (
            <Slide key={i} {...{ title }} right={i % 2 === 1} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: WINDOW_WIDTH * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}>
          {slides.map(({ subtitle, description }, i) => (
            <Subslide
              key={i}
              last={i === slides.length - 1}
              onPress={() => {
                if (scroll.current) {
                  scroll.current
                    .getNode()
                    .scrollTo({ x: WINDOW_WIDTH * (i + 1), animated: true });
                }
              }}
              {...{ subtitle, description }}
            />
          ))}
          <Text>{}</Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
});
