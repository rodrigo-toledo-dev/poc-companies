/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, Component } from 'react'
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const App = () => {
  const [companyLogin, setCompanyLogin] = useState(false);

  const generate = async () => {
    const companies = ['proxer', 'google']
    if(companies.includes(companyLogin)){
      try {
        const companyBundleVersion = await AsyncStorage.getItem(`@companyLogin`+companyLogin)
        if(companyBundleVersion !== null) {
          console.log(`Empresa: `+companyLogin+` com bundle na versao `+companyBundleVersion)
          if(companyBundleVersion !== 'v2.bundle'){
            console.log('Rodando bundle em v1.bundle')
          }else{
            console.log('Rodando bundle em v2.bundle')
          }
        }else{
          console.log(`Empresa: `+companyLogin+` rodando o primeiro bundle: `+companyBundleVersion)
        }
      } catch(e) {
        Alert.alert('Ocorreu um erro ao rodar o bundle')
      }
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
          <TextInput style={styles.loginInput} onChangeText={(companyLogin) => setCompanyLogin(companyLogin)} />
          <TouchableOpacity style={styles.button} onPress={generate}>
            <Text style={styles.buttonText}>Gerar APP</Text>
          </TouchableOpacity>
        
          <Text style={styles.sectionDescription}>Basta digitar 'google' ou 'proxer'</Text>
        </>
      </View>
    </>
  )
}

export default App;