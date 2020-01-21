/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const [loginText, setloginText] = useState(false);

  const generate = () => {
    const companies = ['proxer', 'google']
    if(companies.includes(loginText)){
      Alert.alert('Empresa válida')
    }else{
      Alert.alert('Empresa inválida')
    }
  }

    return (
      <>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <>
            <Text style={styles.sectionTitle}>Digite o login da empresa</Text>
            <TextInput style={styles.loginInput} onChangeText={(loginText) => setloginText(loginText)} />
            <TouchableOpacity style={styles.button} onPress={generate}>
              <Text style={styles.buttonText}>Gerar APP</Text>
            </TouchableOpacity>
          
            <Text style={styles.sectionDescription}>Basta digitar 'google' ou 'proxer'</Text>
          </>
        </View>
      </>
    )
}
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

export default App;