import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import IMAGES from '../../assets/image';
import { ebook } from '../../styles/colors';
import { scale } from '../../utils/scaling';

export default function Hikmah({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor={ebook.btnLogin} barStyle="light-content" />
        <View style={styles.Header}>
          <Text style={styles.title}>Hikmah dan Fungsi</Text>
        </View>
        <View>
          <Image source={IMAGES.materi1} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            Hikmah iman kepada qada dan qadar:{'\n'}
            1. Melatih diri untuk lebih bersyukur kepada Allah swt.{'\n'}
            2. Mendekatkan diri kepada Allah swt.{'\n'}
            3. Menghindarkan dari sifat sombong.{'\n'}
            {'\n'}
            Fungsi iman kepada qada dan qadar:{'\n'}
            1. Mendidik manusia untuk lebih optimis{'\n'}
            2. Mendidik manusia untuk senantiasa berusaha / ikhtiar{'\n'}
            3. Mendidik manusia untuk senantiasa sabar dan tawakal {'\n'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ebook.white,
  },
  image: {
    height: scale(230),
    width: scale(250),
    marginTop: scale(25),
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(15),
    paddingVertical: scale(10),
  },
  text: {
    fontSize: scale(18),
    color: ebook.black,
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
});
