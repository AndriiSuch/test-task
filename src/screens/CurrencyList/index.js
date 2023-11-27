import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Swing} from 'react-native-animated-spinkit';
import {useLastPage} from '../../utils/hooks/useLastPage';
import CurrencyItem from '../../components/CurrencyItem';
import {useCurrencies} from '../../utils/hooks/useCurrecies';
import {styles} from './styles';

const CurrencyList = ({navigation}) => {
  const {loading, data} = useCurrencies(
    'http://data.fixer.io/api/latest?access_key=1dde25f05934e30963d7703400d9697b&symbols=USD,RUB',
    navigation,
  );
  useLastPage('CurrencyList', navigation);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingView}>
          <Swing size={40} />
        </View>
      ) : (
        <View>
          <Text style={styles.title}>BASE: EUR</Text>
          <FlatList
            contentContainerStyle={{paddingHorizontal: 16}}
            data={data.rates}
            renderItem={({item}) => <CurrencyItem currency={item} />}
          />
        </View>
      )}
    </View>
  );
};

export default CurrencyList;
