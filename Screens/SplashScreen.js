import React from 'react';
import {Text, View} from 'react-native';
import AnimatedSplash from 'react-native-animated-splash-screen';

import Home from './Home';
const SplashScreen = () => {
  return (
    <View>
      <AnimatedSplash
        translucent={true}
        isLoaded={true}
        logoImage={require('../one.jpeg')}
        backgroundColor={'#262626'}
        logoHeight={200}
        logoWidth={200}>
        <Home />
      </AnimatedSplash>
    </View>
  );
};

export default SplashScreen;
