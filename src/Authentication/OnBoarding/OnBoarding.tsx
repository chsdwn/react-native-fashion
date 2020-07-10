import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { multiply, divide } from 'react-native-reanimated';
import {
  interpolateColor,
  onScrollEvent,
  useScrollHandler,
  useValue,
} from 'react-native-redash';

import { Slide, SLIDE_HEIGHT } from './Slide';
import { Subslide } from './Subslide';
import { Dot } from '../../components/Dot';

import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../constants/app';

import { ISlide } from 'src/models/ISlide';

const BORDER_RADIUS = 75;

const slides: ISlide[] = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about your outfits? Don't worry! Find the best outfit here!",
    color: '#BFEAF5',
    picture: require('../../../assets/images/1.png'),
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
    picture: require('../../../assets/images/2.png'),
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
    picture: require('../../../assets/images/3.png'),
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
    picture: require('../../../assets/images/4.png'),
  },
];

export const OnBoarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  // TODO: scrollHandler useScrollHandler?
  const { scrollHandler, x } = useScrollHandler();
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
          bounces={false}
          {...scrollHandler}>
          {slides.map(({ title, picture }, i) => (
            <Slide key={i} {...{ title, picture }} right={i % 2 === 1} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot
                key={index}
                currentIndex={divide(x, WINDOW_WIDTH)}
                {...{ index }}
              />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: WINDOW_WIDTH * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}>
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
          </Animated.View>
        </View>
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
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
