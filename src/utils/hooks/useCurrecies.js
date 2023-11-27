import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setCurrencies} from '../../redux/actions/currencyAction';

export const useCurrencies = (url, navigation) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (!url) return;

      const fetchData = async () => {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'fixer-fixer-currency-v1.p.rapidapi.com',
            'x-rapidapi-key':
              'c7559b9f83mshb26886523512d19p18203cjsna0d3931796a8',
          },
        });
        const data = await response.json();
        const ratesArray = [];
        for (const [key, value] of Object.entries(data.rates)) {
          ratesArray.push({currency: key, rate: value});
        }
        data.rates = ratesArray;
        dispatch(setCurrencies(data));
        setData(data);
        setLoading(false);
      };
      fetchData();
    });
    return unsubscribe;
  }, [url, navigation]);

  return {loading, data};
};
