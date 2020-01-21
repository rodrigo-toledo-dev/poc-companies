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

import {
  setActiveBundle,
  registerBundle,
  reloadBundle,
  getActiveBundle,
  getBundles,
} from 'react-native-dynamic-bundle';
import RNFS from 'react-native-fs';

import styles from './styles';

const App = () => {
  const [companyLogin, setCompanyLogin] = useState(false);

  const generate = async () => {
    const companies = ['proxer', 'google']
    if(companies.includes(companyLogin)){
      try {
        const companyBundleVersion = await AsyncStorage.getItem(`@companyLogin`+companyLogin)
        if(companyBundleVersion !== null) {
          console.log(`Empresa: `+companyLogin+' com bundle na versao v2.bundle')
          await AsyncStorage.setItem(`@companyLogin`+companyLogin,'v2.bundle')

        }else{
          await AsyncStorage.setItem(`@companyLogin`+companyLogin,'v1.bundle')
          console.log(`Empresa: `+companyLogin+' com bundle na versao v1.bundle')
        }
      } catch(e) {
        Alert.alert('Ocorreu um erro ao rodar o bundle')
        Alert.alert(e.message)
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