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

export default function Pengertian({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.Header}>
          <Text style={styles.title}>Pengertian</Text>
        </View>
        <StatusBar backgroundColor={ebook.btnLogin} barStyle="light-content" />
        <View>
          <Image source={IMAGES.materi1} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            {'       '}Iman kepada Qada dan Qadar berarti percaya dan yakin
            sepenuh hati bahwa Allah SWT mempunyai kehendak, ketetapan,
            keputusan atas semua makhluk-Nya termasuk segala sesuatu yang
            meliputi semua kejadian yang menimpa makhluk.{'\n'}
            {'\n'}
            Qada berarti :{'\n'}- hukum atau keputusan (Q.S. Surat An - Nisa’
            ayat 65){'\n'}- mewujudkan atau menjadikan (Q.S. Surat Fussilat ayat
            12)
            {'\n'}- kehendak (Q.S. Surat Ali Imran ayat 47).
            {'\n'}
            {'\n'}
            Qadar berarti :{'\n'}- mengatur atau menentukan sesuatu menurut
            batas-batasnya (Q.S. Surat Fussilat ayat 10){'\n'}- ukuran (Q.S.
            Surat Ar - Ra’du ayat 17){'\n'}- kekuasaan atau kemampuan (Q.S.
            Surat Al - Baqarah ayat 236)
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
