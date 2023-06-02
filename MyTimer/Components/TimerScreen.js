import React, {useEffect, useState} from 'react';
import {View, Dimensions, Button, Text, StyleSheet} from 'react-native';
import Header from './Header';
import {Buttons} from './Additionals/Buttons'; //Named exports are imported with {}

const TimerScreen = () => {
  const [isOn, setIsOn] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isOn) setCounter(preState => preState + 1);
    }, 1000);

    return () => clearTimeout(timer); //Component Unmount
  }, [counter, isOn]);

  return (
    <>
      <Header />
      <View style={styles.timerContainer}>
        <View style={styles.timerDisplay}>
          <Text style={styles.timerText}>{counter}</Text>
        </View>
      </View>
      <Buttons isOn={isOn} setIsOn={setIsOn} onReset={() => setCounter(0)} />
    </>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  timerContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 80,
  },
  timerDisplay: {
    alignSelf: 'center',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    height: windowWidth * 0.8,
    width: windowWidth * 0.8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
  },
});
export default TimerScreen;
