import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import CurrencyHistoryItem from './components/CurrencyHistoryItem';

const CurrencyHistory = () => {
  const {historyCurrencies, activeCurrency} = useSelector(
    state => state.currency,
  );
  return (
    <View style={{marginTop: 25}}>
      {!historyCurrencies.length ? (
        <Text style={styles.title}>Record your first rate</Text>
      ) : (
        <>
          <Text style={styles.title}>Recently added to history:</Text>
          <FlatList
            data={historyCurrencies.filter(
              currency => currency.symbol === activeCurrency.currency,
            )}
            contentContainerStyle={{marginTop: 15}}
            renderItem={({item}) => <CurrencyHistoryItem data={item} />}
          />
        </>
      )}
    </View>
  );
};

export default CurrencyHistory;
