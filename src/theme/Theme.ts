import { createBox, createText, useTheme } from '@shopify/restyle';

export const theme = {
  colors: {
    primary: '#2CB9B0',
    title: '#0C0D34',
    text: 'rgba(12, 13, 52, .7)',
    white: '#fff',
    grey: 'rgba(12, 13, 52, .05)',
    'slide.grey': '#F4F0EF',
    darkGrey: '#8a8d90',
    danger: '#ff0058',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      fontFamily: 'SF-Pro-Display-Bold',
      color: 'white',
      textAlign: 'center',
      lineHeight: 80,
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SF-Pro-Display-Semibold',
      color: 'title',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SF-Pro-Display-Semibold',
      color: 'title',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SF-Pro-Display-Regular',
      color: 'text',
    },
    button: {
      fontSize: 15,
      fontFamily: 'SF-Pro-Display-Medium',
      color: 'text',
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
