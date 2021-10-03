import React from 'react';
import { View, TextInput } from 'react-native';
import { globalStyles } from '../constant';

const InputBox = props => {
    return (
      <View style={globalStyles.inputBoxContainer}>
          <TextInput
            style={globalStyles.inputBox}
            placeholder={props.placeholder}
          />
      </View>  
    );
}

export default InputBox;