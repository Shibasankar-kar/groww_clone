import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './app/navigation/Navigation';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '50556911420-dljmfa74q48lad61mdbgmr33sn1rmvif.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
  iosClientId:
    '50556911420-h1l9pn65rdldhctr63ds6h8235rv3oj0.apps.googleusercontent.com',
});

const App = () => {
  return <Navigation />;
};

export default App;

const styles = StyleSheet.create({});
