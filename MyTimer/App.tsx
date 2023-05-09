import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  Button,
  Image,
  useColorScheme,
  View,
  TouchableHighlight,
  Linking,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const App = () =>  {
  const [text, setText] = useState('הקלד אימייל');
  const [number, setNumber] = useState('הקלד מספר');

  const onChangeNumber = (inputValue: string) => {
    // Validate the input value to allow only numeric characters
    const regex = /^[0-9]*$/; // Only allow digits (0-9)
    if (regex.test(inputValue) || inputValue === '') {
      setNumber(inputValue);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', borderWidth: 2, borderColor: 'black'}}>
      <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <View>
          <Image source={require('./images/stopwatch.png')}/>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>My Timer</Text>
        </View>
      </View>
        <View style={styles.textPart}>
          <Text>להתחברות לאפליקציית טיימר אנא הזינו את מספר הטלפון והאימייל שלכם</Text>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              keyboardType="numeric"
            />
            <View style={styles.secondComponent}>
              <View><Text style={styles.help}>צריך עזרה?</Text></View>
              <TouchableHighlight onPress={() =>Linking.openURL('https://www.ynet.co.il')}>
              <View><Text style={styles.support}>יצירת קשר עם התמיכה</Text></View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() =>
                Linking.openURL('https://www.google.com')}>
              <View style={styles.arrowCircle}>
                <Image style={styles.arrow} source={require('./images/login-button-arrow.png')}/>
              </View>
              </TouchableHighlight>
            </View>
          </View>
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
