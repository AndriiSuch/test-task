import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import NavigationService from '../../navigation/NavigationService';
import {useDispatch} from 'react-redux';
import {setActiveCurrency} from '../../redux/actions/currencyAction';
import {styles} from './styles';

const CurrencyItem = ({currency}) => {
  const dispatch = useDispatch();
  const navigateToInfo = () => {
    dispatch(setActiveCurrency(currency));
    NavigationService.navigate('CurrencyInfo');
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.currencyText}>{currency.currency}</Text>
        <Text style={styles.rateText}>{currency.rate}</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={navigateToInfo}>
        <Text style={styles.btnText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CurrencyItem;
