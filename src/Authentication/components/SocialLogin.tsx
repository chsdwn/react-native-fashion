import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '@shopify/restyle';
import { Box, Theme } from '../../theme/Theme';

const FacebookIconSGV = () => (
  <Svg height={25} width={25} viewBox="0 0 512 512">
    <Path
      d="M320 85.333h64c5.891 0 10.667-4.776 10.667-10.667v-64C394.667 4.776 389.891 0 384 0h-64c-64.772.071-117.263 52.561-117.333 117.333V192H128c-5.891 0-10.667 4.776-10.667 10.667v64c0 5.891 4.776 10.667 10.667 10.667h74.667v224c0 5.891 4.776 10.667 10.667 10.667h64c5.891 0 10.667-4.776 10.667-10.667v-224h74.667a10.666 10.666 0 0010.112-7.296l21.333-64c1.862-5.589-1.16-11.629-6.749-13.491a10.676 10.676 0 00-3.363-.547h-96v-74.667c-.001-17.673 14.326-32 31.999-32z"
      fill="#2196f3"
    />
  </Svg>
);

const GoogleIconSVG = () => (
  <Svg height={20} width={20} viewBox="0 0 512 512">
    <Path
      d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
      fill="#fbbd00"
    />
    <Path
      d="M256 392l-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
      fill="#0f9d58"
    />
    <Path
      d="M139.131 325.477l-86.308 86.308a260.085 260.085 0 0022.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
      fill="#31aa52"
    />
    <Path
      d="M512 256a258.24 258.24 0 00-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 01-51.884 55.638l86.216 86.216a260.085 260.085 0 0025.235-22.158C485.371 388.667 512 324.38 512 256z"
      fill="#3c79e6"
    />
    <Path
      d="M352.167 159.833l10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
      fill="#cf2d48"
    />
    <Path
      d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 00-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
      fill="#eb4132"
    />
  </Svg>
);

const AppleIconSVG = () => (
  <Svg height={25} width={25} viewBox="0 0 512 512">
    <Path
      d="M185.255 512c-76.201-.439-139.233-155.991-139.233-235.21 0-129.404 97.075-157.734 134.487-157.734 16.86 0 34.863 6.621 50.742 12.48 11.104 4.087 22.588 8.306 28.975 8.306 3.823 0 12.832-3.589 20.786-6.738 16.963-6.753 38.071-15.146 62.651-15.146h.146c18.354 0 74.004 4.028 107.461 54.272l7.837 11.777-11.279 8.511c-16.113 12.158-45.513 34.336-45.513 78.267 0 52.031 33.296 72.041 49.292 81.665 7.061 4.248 14.37 8.628 14.37 18.208 0 6.255-49.922 140.566-122.417 140.566-17.739 0-30.278-5.332-41.338-10.034-11.191-4.761-20.845-8.862-36.797-8.862-8.086 0-18.311 3.823-29.136 7.881C221.496 505.73 204.752 512 185.753 512h-.498zM351.343 0c1.888 68.076-46.797 115.304-95.425 112.342C247.905 58.015 304.54 0 351.343 0z"
      fill="#000000"
    />
  </Svg>
);

interface ISocialIconProps {
  children: ReactNode;
  size: number;
}
const SocialIcon: React.FC<ISocialIconProps> = ({ children, size }) => (
  <Box
    marginHorizontal="s"
    backgroundColor="white"
    width={size}
    height={size}
    borderRadius="l"
    justifyContent="center"
    alignItems="center">
    {children}
  </Box>
);

export const SocialLogin = () => {
  const theme = useTheme<Theme>();
  const SIZE = theme.borderRadii.l * 2;

  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon size={SIZE}>
        <FacebookIconSGV />
      </SocialIcon>
      <SocialIcon size={SIZE}>
        <GoogleIconSVG />
      </SocialIcon>
      <SocialIcon size={SIZE}>
        <AppleIconSVG />
      </SocialIcon>
    </Box>
  );
};

const styles = StyleSheet.create({});
