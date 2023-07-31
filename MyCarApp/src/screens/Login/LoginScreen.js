import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
} from 'react-native';
import Header from './components/Header';
import {translate} from '../../locals/index';
import {loginIcons} from '../../uiKit/icons';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}
    accessible={false}>
    {children}
  </TouchableWithoutFeedback>
);

const LoginScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [inputError, setInputError] = useState(null);

  const onChangeNumber = inputValue => {
    // Validate the input value to allow only numeric characters
    const regex = /^[0-9]*$/; // Only allow digits (0-9)
    if (regex.test(inputValue) || inputValue === '') {
      setNumber(inputValue);
    }
  };

  const onChangeText = text => {
    setText(text);
  };

  const handleButtonPress = () => {
    if (text.trim() === '' || number.trim() === '') {
      setInputError('All fields are required.');
    } else {
      setInputError(null);
      navigation.navigate('AuthCode');
    }
  };

  const openDialScreen = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+1234567890}';
    } else {
      phoneNumber = 'telprompt:${+1234567890}';
    }
    Linking.openURL(phoneNumber);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <DismissKeyboard>
        <View style={styles.rootContainer}>
          <Header />
          <View style={styles.textPart}>
            <Text>{translate('enterDetails')}</Text>
            <View>
              <View style={styles.container}>
                <View style={styles.sectionStyle}>
                  <TextInput
                    placeholder="כתובת מייל"
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                  />
                  <Image
                    source={loginIcons.callSquare}
                    style={styles.imageStyle}
                  />
                </View>
                <View style={styles.sectionStyle}>
                  <TextInput
                    placeholder="מספר טלפון"
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                  />
                  <Image
                    source={loginIcons.messageSquare}
                    style={styles.imageStyle}
                  />
                </View>
              </View>
            </View>
            <View>
              {!!inputError && (
                <Text style={styles.errorText}>{inputError}</Text>
              )}
            </View>
            <View style={styles.secondComponent}>
              <View>
                <Text style={styles.help}>{translate('helpText')}</Text>
              </View>
              <TouchableHighlight onPress={openDialScreen}>
                <View>
                  <Text style={styles.support}>{translate('linkText')}</Text>
                </View>
              </TouchableHighlight>
              <View style={styles.arrowCircle}>
                <TouchableOpacity onPress={handleButtonPress}>
                  <LinearGradient
                    colors={['#A9333A', '#E1578A', '#FAE98F']}
                    style={styles.gradient}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}>
                    <Image
                      style={styles.arrow}
                      source={loginIcons.loginButtonArrow}
                    />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

const windowHeight = Dimensions.get('window').height; //returns height of window

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
    marginRight: 74,
  },
  headerContainer: {
    width: '100%',
    justifyContent: 'space-around',
    height: windowHeight * 0.1, //10% of total screen
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: 'white',
  },
  textPart: {
    flex: 1,
    flexDirection: 'column',
    padding: 40,
  },
  secondComponent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  help: {
    marginTop: 50,
    alignSelf: 'flex-end',
  },
  support: {
    alignSelf: 'flex-end',
    color: 'blue',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    margin: 10,
  },
  gradient: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -12.5}, {translateY: -12.5}],
  },
  arrowCircle: {
    position: 'absolute',
    bottom: -9,
    left: -7,
    alignSelf: 'flex-start',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  input: {
    width: '85%',
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;
