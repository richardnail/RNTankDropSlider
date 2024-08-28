/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Slider from '@react-native-community/slider';


function RNTankDropSlider(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [tankH, setTankH] = useState(0);
  const [tankH2, setTankH2] = useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onValueChange = (e: any) => {
    setTankH(e);
    setTankH2(e * 1.72);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.tankContainer}>
        <View
          style={styles.tankWrapper}>
          <Image
            source={require('./images/tank.png')}
            style={styles.image}
          />
          <Text style={[
              styles.markerLabel, {
                top: tankH2
              }
            ]}>{Math.round(100 - tankH) + '%'}</Text>
          <Image
            source={require('./images/marker.png')}
            style={[styles.marker, {
              top: tankH2
            }]}
          />
          <View 
            style={[styles.sourceTop, {
              top: tankH2 + 10,
            }]}
          >
           <View 
            style={[styles.sourceTopContent]}
            />
          </View>
          <View 
            style={[styles.source, {
              height: 170 - tankH2,
            }]}
          />
          <View style={styles.sliderWrapper}>
            <Slider
              style={[styles.slider, {width: 200, height: 40}]}
              vertical={true}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              value={tankH}
              onValueChange={(e) => onValueChange(e)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tankContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: 30,
  },
  tankWrapper: {
    position: 'relative',
    overflow: 'visible',
  },
  image: {
    // backgroundColor: 'blue',
  },
  markerLabel: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 20,
    width: 200,
    textAlign: 'center',
    transform: [{translateY: -10}],
  },
  marker: {
    position: 'absolute',
    zIndex: 10,
  },
  sourceTop: {
    position: 'absolute',
    top: 0,
    left: 10,
    overflow: 'hidden',
    width: 186,
    height: 20,
  },
  sourceTopContent: {
    backgroundColor: '#87CEEB',
    width: 800,
    height: 800,
    borderRadius: 800,
    transform: [{translateX: -305}, {translateY: 7}],
  },
  source: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#87CEEB',
    width: 186,
    height: 0,
  },
  sliderWrapper: {
    position: 'absolute',
    top: 100,
    right: 0,
    width: 200,
    height: 40,
    zIndex: 100,
    transform: [{rotate: '90deg'}, {translateY: -90}, {translateX: -5}],
    opacity: 0,
  },
  slider: {
    // position: 'absolute',
  }
});

export default RNTankDropSlider;
