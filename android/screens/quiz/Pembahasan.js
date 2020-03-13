import React from 'react';
import {
  Text,
  View,
  ToastAndroid,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import latihanQuestion from '../../data/latihan';
import ujianQuestion from '../../data/ujian';
import { ebook } from '../../styles/colors';
import { scale } from '../../utils/scaling';
import storage from '../../utils/storage';

export default class Pembahasan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      active: null,
    };
  }

  componentWillMount = async () => {
    const id = await storage.get('id');
    if (id === 1) {
      this.setState({
        active: latihanQuestion,
      });
    } else {
      this.setState({
        active: ujianQuestion,
      });
    }
  };

  render() {
    const materi = this.state.active;
    return (
      <ScrollView style={styles.scrollView}>
        <View isLoading={this.isLoading}>
          <StatusBar
            backgroundColor={ebook.btnLogin}
            barStyle="light-content"
          />
          <View style={styles.Header}>
            <Text style={styles.title}>Quiz - Qada dan Qadar</Text>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.content}>
              {materi &&
                materi.map((item, index) => (
                  <View key={index}>
                    <Text style={styles.text}>
                      {index + 1}.{item.question}
                    </Text>
                    <Text style={styles.text}>{item.discuss}</Text>
                  </View>
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: ebook.white,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ebook.white,
  },
  Header: {
    height: scale(70),
    width: scale(350),
    backgroundColor: ebook.logo,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: scale(14),
    borderBottomRightRadius: scale(14),
  },
  title: {
    fontSize: scale(24),
    fontWeight: 'bold',
    color: ebook.white,
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
});
