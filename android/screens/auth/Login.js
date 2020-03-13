/* eslint-disable comma-dangle */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { scale } from '../../utils/scaling';
import { ebook, white } from '../../styles/colors';
import { FONT_SIZE_BODY2 } from '../../styles';
import METRICS from '../../constants/metrics';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  AsyncStorage,
  TextInput,
  ToastAndroid
} from 'react-native';
import Logo from '../../assets/svgs/Logo';
import axios from 'axios';
import { Button } from 'native-base';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _register = () => {
    navigation.navigate('Register');
  };

  const _logIn = async () => {
    const data = {
      email: email,
      password: password,
    };
    if (email.length === 0) {
      Alert.alert('Notification', 'Email Required');
    }
    if (password.length === 0) {
      Alert.alert('Notification', 'Password Required');
    } else {
      try {
        axios
          .post('http://3.92.200.123:9000/api/users/v1', data, {
            headers: {
              Authorization: 'Basic a3Ata2s0OmFiaWQtZ2Fucy1iYW5nZXQ=',
            },
          })
          .then(response => {
            AsyncStorage.setItem('access_token', response.data);
            ToastAndroid.show('Login Success', ToastAndroid.SHORT);
            navigation.navigate('AppScreen');
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

      <Button style={styles.btn} onPress={_logIn}>
        <Text style={styles.btnText}>Masuk</Text>
      </Button>

      <Text style={styles.t_register}>Belum Punya Akun?</Text>

      <Button style={styles.register} onPress={_register}>
        <Text style={styles.textRegister}>Daftar</Text>
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
    height: scale(170),
    alignItems: 'center',
    marginBottom: METRICS.section
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
    paddingHorizontal: scale(20)
  },
  btn: {
    width: scale(300),
    height: scale(45),
    fontWeight: 'bold',
    backgroundColor: ebook.btnLogin,
    borderRadius: scale(20),
    marginTop: METRICS.section,
    flexDirection: "row",
    justifyContent: "center"
  },
  btnText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: FONT_SIZE_BODY2,
  },
  t_register: {
    alignItems: 'center',
    marginTop: METRICS.doubleSection,
    color: ebook.black,
    marginBottom: METRICS.baseMargin
  },
  register: {
    backgroundColor: white,
    width: scale(300),
    height: scale(45),
    fontWeight: 'bold',
    borderRadius: scale(20),
    borderColor: ebook.logo,
    borderWidth: scale(1),
    flexDirection: "row",
    justifyContent: "center"
  },
  textRegister: {
    fontWeight: 'bold',
    color: ebook.logo,
    fontSize: FONT_SIZE_BODY2
  },
  margin: { marginBottom: METRICS.section }
});
