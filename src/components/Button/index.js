import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({text, textColor = '#fff', onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <Text style={[styles.btnText, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
