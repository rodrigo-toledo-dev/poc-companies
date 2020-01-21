/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react'
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
        const companyKey = `@companyLogin`+companyLogin
        let companyBundleVersion = await AsyncStorage.getItem(companyKey)
        if(companyBundleVersion !== null) {
          companyBundleVersion = 'v2.bundle'
        }else{
          companyBundleVersion = 'v1.bundle'
        }

        await AsyncStorage.setItem(companyKey,companyBundleVersion)
        console.log(`Empresa: `+companyLogin+` com bundle na versao `+companyBundleVersion)
        console.log(RNFS.DocumentDirectoryPath + companyLogin + companyBundleVersion)
        registerBundle(companyLogin, RNFS.DocumentDirectoryPath + companyLogin + companyBundleVersion);
        setActiveBundle(companyLogin);

        const bundles = await getBundles();
        const activeBundle = await getActiveBundle();

        reloadBundle();
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