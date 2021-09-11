import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoadingPlaceholder from 'expo';

import MainNavigator from './navigator/MainNavigator';
import AuthNavigator from './navigator/AuthNavigator';

// const fatchFonts = () => {
//   return Font.loadAsync({
//     'SFUIText-Light': require('./assets/fonts/SFUIText-Light.ttf'),
//     'SFUIText-Regular': require('./assets/fonts/SFUIText-Regular.ttf'),
//     'SFUIText-Medium': require('./assets/fonts/SFUIText-Medium.ttf'),
//     'SFUIText-Semibold': require('./assets/fonts/SFUIText-Semibold.ttf'),
//     'SFUIText-bold': require('./assets/fonts/SFUIText-bold.ttf')
//   })
// }

export default function App() {
  // const [isFontLoaded, setIsFontLoaded] = useState(false);

  // if (!isFontLoaded) {
  //   return (
  //     <AppLoadingPlaceholder
  //       startAsync={fatchFonts}
  //       onFinish={() => setIsFontLoaded(true)}
  //     />);
  // }

  return (
    <MainNavigator />
    // <AuthNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
