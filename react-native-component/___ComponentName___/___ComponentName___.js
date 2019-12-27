import React from 'react';
import { Text, View } from 'react-native';
import styles from './___ComponentName___.styles';

const { container } = styles;

const ___ComponentName___ = ({ style }) => {
  return (
    <View style={[container, style]}>
      <Text>___COMPONENT_NAME___</Text>
    </View>
  );
};

export default ___ComponentName___;
