import { StyleSheet} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginInput: {
    borderWidth: 2,
    width: '100%',
    margin: 10,
    fontSize: 24
  },
  button: {
    width: '100%',
    backgroundColor: Colors.primary,
    alignItems: 'center',
    padding: 20,
    borderRadius: 20
  },
  buttonText:{
    color: Colors.white,
    fontSize: 16
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default styles;