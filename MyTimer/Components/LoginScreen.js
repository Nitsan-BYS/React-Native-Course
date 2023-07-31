import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  Text,
  Image,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Linking,
  Modal,
} from 'react-native';
import Header from './Header';

const LoginScreen = ({setIsAuthorized}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('הקלד אימייל');
  const [number, setNumber] = useState('הקלד מספר');

  const onPressLogin = () => {
    setIsLoading(true); /* hint Bonus point 2  */
    setTimeout(() => {
      setIsAuthorized(true);
      setIsLoading(false); /* hint Bonus point 2  */
    }, 3000);
  };

  const onChangeNumber = inputValue => {
    // Validate the input value to allow only numeric characters
    const regex = /^[0-9]*$/; // Only allow digits (0-9)
    if (regex.test(inputValue) || inputValue === '') {
      setNumber(inputValue);
    }
  };

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={isLoading}>
        <View style={styles.centeredView}>
          {/* Loader Gif */}
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      </Modal>
      <View style={styles.rootContainer}>
        <Header />
        <View style={styles.textPart}>
          <Text>
            להתחברות לאפליקציית טיימר אנא הזינו את מספר הטלפון והאימייל שלכם
          </Text>
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
              <View>
                <Text style={styles.help}>צריך עזרה?</Text>
              </View>
              <TouchableHighlight
                onPress={() => Linking.openURL('https://www.ynet.co.il')}>
                <View>
                  <Text style={styles.support}>יצירת קשר עם התמיכה</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={onPressLogin}>
                <View style={styles.arrowCircle}>
                  <Image
                    style={styles.arrow}
                    source={require('../images/login-button-arrow.png')}
                  />
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const windowHeight = Dimensions.get('window').height; //returns height of window

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    padding: 55,
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
    alignSelf: 'flex-end',
  },
  support: {
    alignSelf: 'flex-end',
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
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  arrow: {
    width: 25,
    height: 25,
  },
});

export default LoginScreen;
