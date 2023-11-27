import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {HeaderBackButton} from '@react-navigation/elements';
import {useLastPage} from '../../utils/hooks/useLastPage';
import CurrentRateItem from '../../components/CurrentRateItem';
import CurrencyHistory from '../../components/CurrencyHistory';
import Button from '../../components/Button';
import {addHistoryItem} from '../../redux/actions/currencyAction';
import {styles} from './styles';

const CurrencyInfo = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    activeCurrency: {rate, currency},
  } = useSelector(state => state.currency);
  useLastPage('CurrencyInfo', navigation);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton onPress={() => navigation.navigate('CurrencyList')} />
      ),
    });
  }, [navigation]);

  const handleAddHistoryItem = () =>
    dispatch(
      addHistoryItem({
        id: rate + Math.random(),
        rate: rate,
        date: new Date(),
        symbol: currency,
      }),
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>From EUR to {currency}</Text>
      <CurrentRateItem currentRate={rate} />
      <CurrencyHistory />
      <Button onPress={handleAddHistoryItem} text={'Record the current rate'} />
    </View>
  );
};

export default CurrencyInfo;
