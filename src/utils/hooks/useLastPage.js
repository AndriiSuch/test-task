import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setLastPage} from '../../redux/actions/currencyAction';

export const useLastPage = (route, navigation) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (!route) return;
      dispatch(setLastPage(route));
    });
    return unsubscribe;
  }, [route, navigation]);
};
