import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import { Box, theme } from '../../../theme/Theme';
import Icon from 'react-native-vector-icons/Feather';

interface IProps extends RNTextInputProps {
  icon: string;
  error?: string;
  touched?: boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const SIZE = theme.borderRadii.m * 2;

export const TextInput: React.FC<IProps> = ({
  icon,
  error,
  touched,
  ...props
}) => {
  const [state, setState] = useState<InputState>(Pristine);
  const [input, setInput] = useState('');

  const reColor = !touched ? 'text' : error ? 'danger' : 'primary';
  const color = theme.colors[reColor];

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      height={48}
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
      paddingHorizontal="s">
      <Box padding="s">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          borderRadius="m"
          height={SIZE}
          width={SIZE}
          justifyContent="center"
          alignItems="center"
          backgroundColor={!error ? 'primary' : 'danger'}
          overflow="hidden">
          <Icon name={!error ? 'check' : 'x'} color="white" size={12} />
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({});
