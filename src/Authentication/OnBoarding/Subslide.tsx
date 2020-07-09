import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { Button } from '../../components/Button';

interface IProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

export const Subslide: React.FC<IProps> = ({
  subtitle,
  description,
  last,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{ onPress }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  subtitle: {
    fontFamily: 'SF-Pro-Text-Semibold',
    fontSize: 24,
    lineHeight: 30,
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontFamily: 'SF-Pro-Text-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 40,
  },
});
