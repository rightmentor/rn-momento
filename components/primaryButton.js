import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../constant';

const PrimaryButton = props => {
  return (
    <View style={[globalStyles.primaryButtonContainer, props.container]}>
      <TouchableOpacity
        style={globalStyles.primaryButton}
        activeOpacity={0.7}
        onPress={props.pressHandler}>
        <Text style={globalStyles.primaryButtonText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PrimaryButton;