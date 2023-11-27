import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const CurrentRateItem = ({currentRate}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.currencyText}>Current Rate</Text>
      </View>
      <Text style={[styles.currencyText, {color: '#2496F0'}]}>
        {currentRate}
      </Text>
    </View>
  );
};

export default CurrentRateItem;
