import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import NavigationService, {navigationRef} from './NavigationService';
import CurrencyList from '../screens/CurrencyList';
import CurrencyInfo from '../screens/CurrencyInfo';

const Stack = createNativeStackNavigator();

const commonOptions = {
  headerBackTitleVisible: false,
  headerStyle: {
    shadowOffset: {height: 0, width: 0},
  },
  headerTitleStyle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    lineHeight: 22,
    letterSpacing: -0.408,
  },
  headerTitleAlign: 'center',
};

const NavigationApp = () => {
  const lastPage = useSelector(state => state.currency.lastPage);

  useEffect(() => {
    NavigationService.navigate(lastPage);
  }, []);

  return (
    <NavigationContainer headerMode="none" ref={navigationRef}>
      <Stack.Navigator initialRouteName={'CurrencyList'}>
        <Stack.Screen
          options={{...commonOptions, headerLeft: () => <></>}}
          name="CurrencyList"
          component={CurrencyList}
        />
        <Stack.Screen
          options={commonOptions}
          name="CurrencyInfo"
          component={CurrencyInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationApp;
