/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Materi from '../assets/svgs/Materi';
import Quiz from '../assets/svgs/Quiz';
import IMAGES from '../assets/image';
import { ebook } from '../styles/colors';
import { scale } from '../utils/scaling';
import METRICS from '../utils/metrics';

export default function Home({ navigation }) {
  const _toMateri = () => {
    navigation.navigate('Materi');
  };

  const _toQuiz = () => {
    navigation.navigate('Quiz');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={ebook.btnLogin} barStyle="light-content" />
      <ImageBackground source={IMAGES.bgTitle} style={styles.Header}>
        <Text style={styles.title}>Materi</Text>
        <Text style={styles.title}> Qada dan Qadar</Text>
      </ImageBackground>
      <View style={styles.choose}>
        <TouchableOpacity style={styles.materi} onPress={_toMateri}>
          <Materi style={styles.logo} />
          <Text style={styles.text}>Materi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quiz} onPress={_toQuiz}>
          <Quiz style={styles.logo} />
          <Text style={styles.text}>Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ebook.gray,
  },
  Header: {
    flex: 1,
    width: scale(350),
    height: scale(350),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: scale(32),
    fontWeight: 'bold',
    color: ebook.white,
  },
  choose: {
    flex: 2,
    alignItems: 'center',
    marginTop: scale(80),
  },
  materi: {
    width: scale(250),
    height: scale(100),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: ebook.white,
    paddingHorizontal: scale(30),
    alignItems: 'center',
    borderRadius: scale(8),
    elevation: scale(8),
    marginBottom: METRICS.searchBarHeight,
  },
  quiz: {
    width: scale(250),
    height: scale(100),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: scale(30),
    alignItems: 'center',
    borderRadius: scale(8),
    elevation: scale(8),
    backgroundColor: ebook.white,
  },
  text: {
    fontSize: scale(28),
    fontWeight: 'bold',
    color: ebook.black,
    marginLeft: scale(35),
    textAlign: 'left',
  },
});
