/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';

import Backgrnd from './Images/Background.jpg';
import Logou from './Images/Logo1.png';

const {width: WIDTH} = Dimensions.get('window')

const App: () => React$Node = () => {
  return (
    <ImageBackground source={Backgrnd} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={Logou} styles={styles.logo} />
      </View>
      <View>
        <TextInput style={styles.textinput1} placeholder="Username" />
      </View>
      <View>
        <TextInput
          style={styles.textinput2}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.btnLogin}>
        <View style={{marginTop:10}}><Button style={styles.btntxt} title="Login" color="#00ff00"/>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  btntxt: {
    textAlign: 'center',
    backgroundColor: '#90ee90',
    fontSize: 25,
  },
  btnLogin: {
    width: WIDTH -250,
    height: 120,
    borderRadius:25,
  },
  textinput1: {
    width: WIDTH -50,
    textAlign: 'center',
    backgroundColor: '#90ee90',
    marginBottom: 10,
    borderRadius:25,
  },
  textinput2: {
    width: WIDTH -50,
    textAlign: 'center',
    backgroundColor: '#90ee90',
    borderRadius:25,
  },
  logo: {},
  logoContainer: {
    alignItems: 'center',
    paddingBottom: 150,
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
