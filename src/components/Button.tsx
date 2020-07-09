import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface IProps {
  variant: 'default' | 'primary';
  label: string;
  onPress: () => void;
}

export const Button: React.FC<IProps> = ({
  variant = 'default',
  label,
  onPress,
}) => {
  const backgroundColor =
    variant === 'primary' ? '#2CB9B0' : 'rgba(12, 13, 52, .05)';
  const color = variant === 'primary' ? 'white' : '#0C0D34';

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}>
      <Text style={[styles.label, { color }]}>{label}</Text>
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
  label: {
    fontFamily: 'SF-Pro-Text-Semibold',
    fontSize: 15,
    textAlign: 'center',
  },
});
