import { createText, BaseTheme } from '@shopify/restyle';

export const theme: BaseTheme = {
  colors: {
    primary: '#2CB9B0',
    title: '#0C0D34',
    body: 'rgba(12, 13, 52, .7)',
    white: '#fff',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      fontFamily: 'SF-Pro-Text-Bold',
      color: 'white',
      textAlign: 'center',
      lineHeight: 80,
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SF-Pro-Text-Semibold',
      color: 'title',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SF-Pro-Text-Semibold',
      color: 'title',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SF-Pro-Text-Regular',
      color: 'body',
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;

export const Text = createText<Theme>();
