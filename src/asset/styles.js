import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  formWrapper: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  field: {
    padding: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 15,
  },
  label: {
    marginBottom: 5,
    paddingLeft: 5,
  },
  primaryButton: {
    color: 'black',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default style;
