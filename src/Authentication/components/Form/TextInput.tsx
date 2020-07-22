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
  validator: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const SIZE = theme.borderRadii.m * 2;

export const TextInput: React.FC<IProps> = ({ icon, validator, ...props }) => {
  const [state, setState] = useState<InputState>(Pristine);
  const [input, setInput] = useState('');

  const reColor =
    state === Pristine ? 'text' : state === Valid ? 'primary' : 'danger';
  const color = theme.colors[reColor];

  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };

  const onChangeText = (text: string) => {
    setInput(text);
    if (state !== Pristine) validate();
  };

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
          onBlur={validate}
          {...{ onChangeText }}
          {...props}
        />
      </Box>
      {(state === Valid || state === Invalid) && (
        <Box
          borderRadius="m"
          height={SIZE}
          width={SIZE}
          justifyContent="center"
          alignItems="center"
          backgroundColor={state === Valid ? 'primary' : 'danger'}
          overflow="hidden">
          <Icon
            name={state === Valid ? 'check' : 'x'}
            color="white"
            size={12}
          />
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({});
