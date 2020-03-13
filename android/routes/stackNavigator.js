// eslint-disable-next-line prettier/prettier
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Materi from '../screens/materi/Materi';
import Pengertian from '../screens/materi/Pengertian';
import Macam from '../screens/materi/Macam';
import Ciri from '../screens/materi/Ciri';
import Hikmah from '../screens/materi/Hikmah';
import Quiz from '../screens/quiz/Quiz';
import Latihan from '../screens/quiz/Latihan';
import Ujian from '../screens/quiz/Ujian';
import Result from '../screens/quiz/Result';
import Pembahasan from '../screens/quiz/Pembahasan';

// export const SplashScreenStack = createStackNavigator({
//   SplashScreen: {
//     screen: SplashScreen,
//     navigationOptions: {
//       headerShown: false,
//     },
//   },
// });

export const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    Materi: {
      screen: Materi,
      navigationOptions: {
        headerShown: false,
      },
    },
    Pengertian: {
      screen: Pengertian,
      navigationOptions: {
        headerShown: false,
      },
    },
    Macam: {
      screen: Macam,
      navigationOptions: {
        headerShown: false,
      },
    },
    Ciri: {
      screen: Ciri,
      navigationOptions: {
        headerShown: false,
      },
    },
    Hikmah: {
      screen: Hikmah,
      navigationOptions: {
        headerShown: false,
      },
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        headerShown: false,
      },
    },
    Pembahasan: {
      screen: Pembahasan,
      navigationOptions: {
        headerShown: false,
      },
    },
    Result: {
      screen: Result,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export const LatihanStack = createStackNavigator(
  {
    Latihan: {
      screen: Latihan,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Latihan',
  },
);

export const UjianStack = createStackNavigator(
  {
    Ujian: {
      screen: Ujian,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Ujian',
  },
);
