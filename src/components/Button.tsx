import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useTheme } from '@shopify/restyle';

import { Text, Theme } from '../theme/Theme';

interface IProps {
  variant?: 'default' | 'primary' | 'transparent';
  label?: string;
  onPress: () => void;
  children?: ReactNode;
}

export const Button: React.FC<IProps> = ({
  variant = 'default',
  label,
  onPress,
  children,
}) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === 'primary'
      ? theme.colors.primary
      : variant === 'default'
      ? theme.colors.grey
      : 'transparent';
  const color = variant === 'primary' ? theme.colors.white : theme.colors.title;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}>
      {children ? (
        children
      ) : (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
