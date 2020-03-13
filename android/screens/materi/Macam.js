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

export default function Macam({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor={ebook.btnLogin} barStyle="light-content" />
        <View style={styles.Header}>
          <Text style={styles.title}>Macam-macam</Text>
        </View>
        <View>
          <Image source={IMAGES.materi1} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            1. Takdir muallaq{'\n'}
            yaitu takdir yang masih bisa di rubah oleh usaha dan ikhtiar
            manusia. Contoh takdir muallaq di antaranya kepandaian seseorang,
            kesehatan, kemakmuran dan lain sebagainya.{'\n'}
            {'\n'}
            2. Takdir Mubram{'\n'}
            yaitu takdir yang sudah tidak bisa dirubah oleh manusia walaupun ada
            ikhtiar dan tawakal.Contoh takdir mubram diantaranya jenis kelamin
            manusia, ajal, panjang/pendek usia, kejadian kiamat dan sebagainya.
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
