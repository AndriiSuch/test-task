import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 12,
  },
  currencyText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  rateText: {
    fontSize: 14,
  },
  btn: {
    backgroundColor: '#2496F0',
    borderRadius: 4,
    padding: 5,
  },
  btnText: {
    color: '#fff',
  },
});
