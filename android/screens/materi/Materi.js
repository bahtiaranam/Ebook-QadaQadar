/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PixelRatio,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { ebook } from '../../styles/colors';
import { scale } from '../../utils/scaling';
import METRICS from '../../utils/metrics';
import YouTube from 'react-native-youtube';
import LogoMateri from '../../assets/svgs/Materi';

export default function Materi({ navigation }) {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(null);
  const [isReady, setReady] = useState(true);
  const [isPlaying, setPlaying] = useState(false);
  const [isLooping, setLooping] = useState(true);
  const [error, setError] = useState(null);
  const [quality, setQuality] = useState(null);
  const [currentTime, setCurrentTime] = useState(1);
  const [fullscreen, setFullScreen] = useState(false);
  const [playerWidth] = useState(Dimensions.get('window').width);

  const _youTubeRef = React.createRef();

  const _pengertian = () => {
    navigation.navigate('Pengertian');
  };

  const _macam = () => {
    navigation.navigate('Macam');
  };

  const _ciri = () => {
    navigation.navigate('Ciri');
  };

  const _hikmah = () => {
    navigation.navigate('Hikmah');
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.Header}>
          <Text style={styles.title}>Materi Qada dan Qadar</Text>
        </View>
        <YouTube
          ref={_youTubeRef}
          showinfo={show}
          apiKey="YOUR_API_KEY"
          videoId="Q0bCqh9xLm8"
          play={isPlaying}
          loop={isLooping}
          fullscreen={fullscreen}
          controls={1}
          style={[
            {
              height: PixelRatio.roundToNearestPixel(playerWidth / (16 / 9)),
            },
            styles.player,
          ]}
          onError={e => {
            setError(e.error);
          }}
          onReady={() => {
            setReady(true);
          }}
          onChangeState={e => {
            setStatus(e.status);
          }}
          onChangeQuality={e => {
            setQuality(e.quality);
          }}
          onChangeFullscreen={e => {
            setFullScreen(e.fullscreen);
          }}
          onProgress={e => {
            setCurrentTime(e.currentTime);
          }}
        />
        <View style={styles.choose}>
          <TouchableOpacity style={styles.materi} onPress={_pengertian}>
            <LogoMateri style={styles.logo} />
            <Text style={styles.text}>Pengertian{'\n'}Qada dan Qadar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.materi} onPress={_macam}>
            <LogoMateri style={styles.logo} />
            <Text style={styles.text}>Macam{'\n'}Macam Takdir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.materi} onPress={_ciri}>
            <LogoMateri style={styles.logo} />
            <Text style={styles.text}>
              Ciri Ciri{'\n'}Iman Kepada {'\n'}Qada dan Qadar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.materi} onPress={_hikmah}>
            <LogoMateri style={styles.logo} />
            <Text style={styles.hikmah}>Hikmah{'\n'}dan Fungsi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
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
    marginBottom: scale(10),
    borderBottomLeftRadius: scale(14),
    borderBottomRightRadius: scale(14)
  },
  title: {
    fontSize: scale(24),
    fontWeight: 'bold',
    color: ebook.white
  },
  WebView: {
    flex: 1,
    margin: 20,
  },
  choose: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(10),
  },
  materi: {
    width: scale(260),
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
    fontSize: scale(18),
    fontWeight: 'bold',
    color: ebook.black,
    justifyContent: 'center',
    textAlign: 'center',
  },
  hikmah: {
    marginRight: scale(20),
    fontSize: scale(18),
    fontWeight: 'bold',
    color: ebook.black,
    justifyContent: 'center',
    textAlign: 'center',
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
