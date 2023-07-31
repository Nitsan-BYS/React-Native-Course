import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Linking,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import {authIcons} from '../../uiKit/authIcons';
import {translate} from '../../locals/index';
import {codes} from './moc_data';
import DefaultModal from '../Modals/DefaultModal';
import Terms from '../Terms/Terms';
import {SafeAreaView} from 'react-native-safe-area-context';

const window_height = Dimensions.get('window').height;
const window_width = Dimensions.get('window').width;

const SendCode = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(new Date());
  const [isExpired, setIsExpired] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [invalidModalVisible, setInvalidModalVisible] = useState(false);
  const [number, setNumber] = useState('');

  const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );

  const onChangeNumber = inputValue => {
    // Validate the input value to allow only numeric characters
    const regex = /^[0-9]*$/; // Only allow digits (0-9)
    if (regex.test(inputValue) || inputValue === '') {
      setNumber(inputValue);
    }
  };

  const openExpiredModal = () => {
    setModalVisible(true);
    setIsExpired(true);
  };

  const hideExpiredModal = () => {
    setModalVisible(false);
    setIsExpired(false);
    navigation.navigate('AuthCode');
  };

  const openInvalidModal = () => {
    setInvalidModalVisible(true);
    setIsInvalid(true);
  };

  const hideInvalidModal = () => {
    setInvalidModalVisible(false);
    setIsInvalid(false);
  };

  const onchangecode = inputValue => {
    // Validate the input value to allow only numeric characters
    const regex = /[0-9]{5}$/; // Only allow five digit
    if (regex.test(inputValue) || inputValue === '') {
      setCode(inputValue);
    }
  };

  const back_to_login = () => {
    navigation.navigate('Login');
  };

  // Check if code has been active for more than 15 min.
  const codeCheck = () => {
    const current_time = new Date();
    const min_diff =
      Math.abs(timer.getTime() - current_time.getTime()) / (1000 * 60);
    if (min_diff > 0) {
      for (let i = 0; i < codes.length; i++) {
        if (code === codes[i].code) {
          navigation.navigate('Terms');
        } else {
          // If code does not exist in moc_data file - it's invalid
          openInvalidModal();
        }
      }
    } else {
      // If code is expired- has been active for more than 15 minutes
      openExpiredModal();
    }
  };

  return (
    <>
      {isExpired ? (
        <DefaultModal
          modalState={modalVisible}
          modalTitle={'קוד אינו בתוקף'}
          modalText={'הקוד שהוזן אינו בתוקף, האם לשלוח קוד התחברות חדש?'}
          buttonText={'שלח קוד חדש'}
          setModalVisible={setModalVisible}
          hideModal={hideExpiredModal}
          close={'סגירה'}
        />
      ) : isInvalid ? (
        <DefaultModal
          modalState={invalidModalVisible}
          modalTitle={'קוד לא תקין'}
          modalText={'קוד ההתחברות שהוזן אינו תקין,\n נא לנסות שוב.'}
          modalSecondText={
            'שימו לב, לאחר 5 ניסיונות האפליקציה תינעל. על מנת לשחררה יהיה עליכם לפנות למוקד השירות.'
          }
          buttonText={'פנייה למוקד'}
          setModalVisible={setModalVisible}
          hideModal={hideInvalidModal}
          close={'אישור'}
        />
      ) : (
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.back_arrow}
                onPress={() => back_to_login()}>
                <Image source={authIcons.backArrow} />
              </TouchableOpacity>
            </View>
            <View style={styles.codeContainer}>
              <Text style={styles.codeContainerText}>
                {translate('sendCode')}
              </Text>
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.codeInput}
                placeholder={translate('authCode')}
                value={code}
                onChangeText={setCode}
              />
              <Image source={authIcons.lock} style={styles.imageStyle} />
            </View>
          </View>
          <View style={styles.secondComponent}>
            <View>
              <Text style={styles.help}>{translate('codeNotReceived')}</Text>
            </View>
            <TouchableHighlight
              onPress={() => Linking.openURL('https://www.ynet.co.il')}>
              <View>
                <Text style={styles.sendCodeRequest}>
                  {translate('sendCodeAgain')}
                </Text>
              </View>
            </TouchableHighlight>
            <View style={styles.arrowCircle}>
              <TouchableOpacity onPress={codeCheck}>
                <LinearGradient
                  colors={['#A9333A', '#E1578A', '#FAE98F']}
                  style={styles.gradient}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}>
                  <Image style={styles.arrow} source={authIcons.arrow} />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    height: window_height * 0.2,
    width: '80%',
  },

  back_arrow: {
    width: 30,
    height: 30,
    marginRight: 4,
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
  },

  tinyLogo: {
    marginRight: 5,
    width: 40,
    height: 40,
  },

  text: {
    marginLeft: 100,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    fontSize: 40,
    fontStyle: 'italic',
  },

  codeContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
  },

  codeContainerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  body: {
    width: '50%',
    gap: 10,
  },

  input: {
    borderWidth: 1,
    padding: 15,
  },

  codeInput: {
    width: '75%',
    backgroundColor: '#FFFFFF',
  },

  notReceived: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
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

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    width: '100%',
    height: window_height * 0.2,
  },

  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  start: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
  },

  secondComponent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 50,
    width: '90%',
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
    marginLeft: 30,
  },

  arrow: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -12.5}, {translateY: -12.5}],
  },

  gradient: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text_input: {
    height: 80,
    width: '50%',
    marginLeft: 100,
  },

  help: {
    fontSize: 15,
  },
  link_help: {
    fontSize: 15,
    color: '#0000FF',
  },
  sendCodeRequest: {
    color: 'blue',
  },
});

export default SendCode;
