/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LogoQuiz from '../../assets/svgs/Quiz';
import LogoUjian from '../../assets/svgs/Ujian';
import { ebook } from '../../styles/colors';
import { scale } from '../../utils/scaling';
import METRICS from '../../utils/metrics';
import latihanQuestion from '../../data/latihan';
import ujianQuestion from '../../data/ujian';
import storage from '../../utils/storage';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const _latihan = async () => {
      await storage.set('id', 1);
      this.props.navigation.navigate('Latihan', {
        questions: latihanQuestion,
      });
    };

    const _ujian = async () => {
      await storage.set('id', 2);
      this.props.navigation.navigate('Ujian', {
        questions: ujianQuestion,
      });
    };

    const _toResult = () => {
      this.props.navigation.navigate('Result');
    };

    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <Text style={styles.title}>Quiz - Qada dan Qadar</Text>
        </View>
        <View style={styles.choose}>
          <TouchableOpacity style={styles.materi} onPress={_latihan}>
            <LogoQuiz style={styles.logo} />
            <Text style={styles.latihan}>Latihan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.materi} onPress={_ujian}>
            <LogoUjian style={styles.logo} />
            <Text style={styles.text}>Ujian</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ebook.gray
  },
  Header: {
    height: scale(70),
    width: scale(350),
    backgroundColor: ebook.logo,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: scale(14),
    borderBottomRightRadius: scale(14)
  },
  title: {
    fontSize: scale(24),
    fontWeight: 'bold',
    color: ebook.white
  },
  choose: {
    flex: 1,
    alignItems: 'center',
    marginTop: scale(40),
  },
  materi: {
    width: scale(250),
    height: scale(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: ebook.white,
    paddingHorizontal: scale(20),
    alignItems: 'center',
    borderRadius: scale(8),
    elevation: scale(8),
    marginBottom: METRICS.searchBarHeight,
  },
  text: {
    fontSize: scale(24),
    fontWeight: 'bold',
    color: ebook.black,
    justifyContent: 'center',
    marginRight: scale(40),
  },
  latihan: {
    fontSize: scale(24),
    fontWeight: 'bold',
    color: ebook.black,
    justifyContent: 'center',
    marginRight: scale(30),
  },
});
