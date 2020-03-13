/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  AsyncStorage,
  TextInput,
  ToastAndroid,
} from 'react-native';
import Logo from '../../assets/svgs/Logo';
import axios from 'axios';
import { COLOR_WHITE, FONT_SIZE_BODY2 } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';
import { ebook, white } from '../../styles/colors';
import { Button } from 'native-base'


export default function Register({ navigation }) {
  const [name, setName] = useState('');
  const [nis, setNis] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _toLogin = () => {
    navigation.navigate('Login');
  };

  const _register = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    if (name.length === 0) {
      Alert.alert('Notification', 'Name Required');
    }
    if (nis.length === 0) {
      Alert.alert('Notification', 'Nis Required');
    }
    if (email.length === 0) {
      Alert.alert('Notification', 'Email Required');
    }
    if (password.length === 0) {
      Alert.alert('Notification', 'Password Required');
    } else {
      try {
        axios
          .post('http://3.92.200.123:9000/api/users/v1/register', data, {
            headers: {
              Authorization: 'Basic a3Ata2s0OmFiaWQtZ2Fucy1iYW5nZXQ=',
            },
          })
          .then(response => {
            AsyncStorage.setItem('access_token', response.data);
            ToastAndroid.show('Login Success', ToastAndroid.SHORT);
            navigation.navigate('Login');
          })
          .catch(err => {
            ToastAndroid.show(String(err), ToastAndroid.SHORT);
            ToastAndroid.show(email, ToastAndroid.SHORT);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Logo style={styles.logo} />
      </View>
      <TextInput
        placeholder="Name"
        underlineColorAndroid="transparent"
        value={name}
        autoCompleteType="username"
        style={styles.input}
        onChangeText={value => setName(value)}
        isRequired
      />
      <TextInput
        placeholder="NIS"
        underlineColorAndroid="transparent"
        autoCompleteType="cc-number"
        keyboardType="numeric"
        value={nis}
        style={styles.input}
        onChangeText={value => setNis(value)}
        isRequired
      />
      <TextInput
        placeholder="Email"
        underlineColorAndroid="transparent"
        keyboardType="email-address"
        value={email}
        style={styles.input}
        onChangeText={value => setEmail(value)}
        isRequired
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        autoCompleteType="password"
        underlineColorAndroid="transparent"
        value={password}
        style={styles.inputPass}
        onChangeText={value => setPassword(value)}
        isRequired
      />
      <Button style={styles.btn} onPress={_register}>
        <Text style={styles.btnText}>Daftar</Text>
      </Button>
      <Button style={styles.toLogin} onPress={_toLogin}>
        <Text style={styles.textBack}>Kembali ke Login</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ebook.white
  },
  logoContainer: {
    width: scale(170),
    height: scale(140),
    alignItems: 'center',
    marginBottom: METRICS.doubleBaseMargin
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
    marginBottom: METRICS.baseMargin
  },
  input: {
    width: scale(300),
    height: scale(45),
    borderRadius: scale(4),
    borderColor: ebook.gray,
    borderWidth: scale(1),
    backgroundColor: ebook.white,
    padding: METRICS.baseMargin,
    marginBottom: METRICS.baseMargin,
    fontSize: FONT_SIZE_BODY2,
    paddingHorizontal: scale(20)
  },
  inputPass: {
    width: scale(300),
    height: scale(45),
    paddingHorizontal: scale(10),
    borderRadius: scale(4),
    borderColor: ebook.gray,
    borderWidth: scale(1),
    backgroundColor: ebook.white,
    fontSize: FONT_SIZE_BODY2,
    paddingHorizontal: scale(20),
    marginBottom: METRICS.baseMargin
  },
  btn: {
    width: scale(300),
    height: scale(45),
    fontWeight: 'bold',
    backgroundColor: ebook.btnLogin,
    borderRadius: scale(20),
    marginTop: METRICS.section,
    marginBottom: METRICS.baseMargin,
    flexDirection: "row",
    justifyContent: "center"
  },
  btnText: {
    color: COLOR_WHITE,
    fontSize: FONT_SIZE_BODY2
  },
  toLogin: {
    backgroundColor: white,
    width: scale(300),
    height: scale(45),
    fontWeight: 'bold',
    borderRadius: scale(20),
    borderColor: ebook.logo,
    borderWidth: scale(1),
    flexDirection: "row",
    justifyContent: "center",
    marginTop: METRICS.baseMargin
  },
  textBack: {
    fontWeight: 'bold',
    color: ebook.logo,
    fontSize: FONT_SIZE_BODY2
  }
});
