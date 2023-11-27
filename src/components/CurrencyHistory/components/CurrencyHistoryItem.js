import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {deleteHistoryItem} from '../../../redux/actions/currencyAction';
import {styles} from '../styles';

const CurrencyHistoryItem = ({data}) => {
  const dispatch = useDispatch();
  const {id, rate, date} = data;
  const dateMoment = moment(date).format('MM-DD-YYYY HH:mm A');

  const handleDeleteItem = () => dispatch(deleteHistoryItem(id));
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.rateText}>{rate}</Text>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.dateText}>{dateMoment}</Text>
        <TouchableOpacity onPress={handleDeleteItem} style={styles.btn}>
          <Text style={styles.btnText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CurrencyHistoryItem;
