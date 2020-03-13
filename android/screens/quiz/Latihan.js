import React from 'react';
import { Text, View, StatusBar, ScrollView, StyleSheet } from 'react-native';
import latihaQuestion from '../../data/latihan';
import { ebook } from '../../styles/colors';
import { Button, ButtonContainer } from '../../components/Button';
import { Alert } from '../../components/Alert';
import { scale } from '../../utils/scaling';

export default class Latihan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      correctCount: 0,
      totalCount: 15,
      activeQuestionIndex: 0,
      answered: false,
      answerCorrect: false,
    };
  }

  answer = correct => {
    this.setState(
      state => {
        const nextState = { answered: true };

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        this.setState(state => {
          const nextIndex = state.activeQuestionIndex + 1;

          if (nextIndex >= state.totalCount) {
            setTimeout(
              () =>
                this.props.navigation.navigate('Result', {
                  materi: 'latihan',
                  correct: state.correctCount,
                  wrong: 15 - state.correctCount,
                  point: (100 / state.totalCount) * state.correctCount,
                }),
              750,
            );
          } else {
            setTimeout(() => this.nextQuestion(), 750);
          }
        });
      },
    );
  };

  nextQuestion = () => {
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;

      return {
        activeQuestionIndex: nextIndex,
        answered: false,
      };
    });
  };

  render() {
    const questions = latihaQuestion;
    const question = questions[this.state.activeQuestionIndex];
    return (
      <ScrollView>
        <View>
          <StatusBar
            backgroundColor={ebook.btnLogin}
            barStyle="light-content"
          />
          <View style={styles.mainContainer}>
            {/* <View style={styles.Header}>
            <Text style={styles.title}>Quiz - Ujian</Text>
          </View> */}
            <View style={styles.Header}>
              <Text style={styles.title}>Quiz-Latihan</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>{question.question}</Text>
              <ButtonContainer>
                {question.answer.map(answer => (
                  <Button
                    key={answer.id}
                    text={answer.text}
                    onPress={() => this.answer(answer.correct)}
                  />
                ))}
              </ButtonContainer>
            </View>
            <Alert
              correct={this.state.answerCorrect}
              visible={this.state.answered}
            />
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
  answer: {
    marginTop: scale(20),
  },
  content: {
    fontSize: scale(16),
    color: ebook.black,
    backgroundColor: ebook.white,
    textAlign: 'left',
    paddingHorizontal: scale(10),
  },
  text: {
    fontSize: scale(18),
    color: ebook.black,
    marginTop: scale(20),
    marginLeft: scale(10),
  },
});
