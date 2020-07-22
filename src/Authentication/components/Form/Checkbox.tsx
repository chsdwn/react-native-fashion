import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';
import { Box, Text } from '../:./../../../theme/Theme';

interface IProps {
  label: string;
}

export const Checkbox: React.FC<IProps> = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <RectButton
      onPress={() => setChecked(!checked)}
      style={{ justifyContent: 'center' }}>
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="m"
          height={20}
          width={20}
          justifyContent="center"
          alignItems="center"
          borderRadius="s"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? 'primary' : 'white'}>
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

const styles = StyleSheet.create({});
