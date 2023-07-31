import React, { useState } from 'react';
import LoginScreen from './Components/LoginScreen';
import TimerScreen from './Components/TimerScreen';

import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

const App = () =>  {

  const [text, setText] = useState('הקלד אימייל');
  const [number, setNumber] = useState('הקלד מספר');
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', borderWidth: 2, borderColor: 'black'}}>
      <View style={styles.rootContainer}>
      <View style={{flex: 9}}>
        {isAuthorized ? (
          <TimerScreen />
        ):(
          <LoginScreen setIsAuthorized={setIsAuthorized}/>
        )}
      </View>
      </View>
    </SafeAreaView>
  );
}

const windowHeight = Dimensions.get('window').height;   //returns height of window

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    justifyContent: 'space-between',
  },
  title: {
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 74
  },
  headerContainer: {
    width: '100%',
    justifyContent: 'space-around',
    height: windowHeight * 0.1, //10% of total screen
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: 'white',
  },
  textPart: {
    flex: 1,
    flexDirection: 'column',
    padding: 55
  },
  input: {
    borderWidth: 1,
    height: 40,
    margin: 12,
    width: '90%',
    padding: 10,
  },
  secondComponent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
  },
  help: {
    marginTop: 200,
    alignSelf: "flex-end"
  },
  support: {
    alignSelf: "flex-end",
    color: 'blue',
  },
  arrowCircle: {
    position: 'absolute',
    bottom: -9,
    left: -7,
    backgroundColor: 'purple',
    alignSelf: 'flex-start',
    width: 60,
    height: 60,
    borderRadius: 60/2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  arrow: {
    width: 25,
    height: 25
  }
});

export default App;
