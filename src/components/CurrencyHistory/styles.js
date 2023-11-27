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
  dateText: {
    fontSize: 14,
  },
  rateText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  btn: {
    backgroundColor: '#FF4E42',
    borderRadius: 4,
    padding: 5,
    marginLeft: 20,
  },
  btnText: {
    color: '#fff',
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2496F0',
    textAlign: 'center',
  },
});
