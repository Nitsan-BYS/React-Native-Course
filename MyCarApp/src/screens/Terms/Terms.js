import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {loginIcons} from '../../uiKit/icons';
import {termsIcons} from '../../uiKit/termsIcons';
import LinearGradient from 'react-native-linear-gradient';
import ModalT from '../Modals/ModalT';
import {translate} from '../../locals';
const window_height = Dimensions.get('window').height;
const window_width = Dimensions.get('window').width;

const Terms = ({navigation}) => {
  const [addsCheck1, setAddsCheck] = useState(false);
  const [addsCheck2, setAddsCheck2] = useState(false);
  const [modal, setModal] = useState(<></>);

  const checkTermUse = () => {
    if (addsCheck2) {
      navigation.navigate('Greeting');
    } else {
      Alert.alert('You must approve the Term Use.');
    }
  };

  const showTermsModal = () => {
    setModal(
      <ModalT
        closeModal={() => setModal(<></>)}
        title={'תנאי אישור באפליקציה'}
        text={'ipsameloren'}
        buttonText={'אישור תנאי שימוש'}></ModalT>,
    );
  };

  const showReportTerms = () => {
    setModal(
      <ModalT
        closeModal={() => setModal(<></>)}
        title={'תנאי דיוור'}
        text={'ipsamelorendev'}
        buttonText={'אישור תנאי דיוור'}></ModalT>,
    );
  };

  return (
    <View style={styles.container}>
      {modal}
      <View style={styles.header}>
        <Image style={styles.closeImg} source={termsIcons.close} />
        <Image style={styles.tinyLogo} source={loginIcons.logo} />
        <Text style={styles.text}>{translate('terms')}</Text>
        <View style={styles.gray_line}></View>
        <View style={styles.textAlignment}>
          <Text style={styles.text_approve}>{translate('beforeBegin')}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.Radio_b_section}>
          <Text style={styles.Radio_b_section_text}>
            {' '}
            {translate('Givemethings')}{' '}
            <TouchableOpacity onPress={() => showReportTerms()}>
              <Text style={styles.Radio_b_section_link_mail_approval}>
                {translate('mailApproval')}
              </Text>
            </TouchableOpacity>
          </Text>
          <RadioButton
            value={addsCheck1}
            status={addsCheck1 ? 'checked' : 'unchecked'}
            style={addsCheck1 ? styles.rb_checked : styles.rb_unchecked}
            onPress={() => setAddsCheck(!addsCheck1)}
          />
        </View>
        <View style={styles.Radio_b_section}>
          <TouchableOpacity onPress={() => showTermsModal()}>
            <Text style={styles.Radio_b_section_link_termuse}>
              {translate('termuse')}
            </Text>
          </TouchableOpacity>
          <Text style={styles.Radio_b_section_text}>
            {translate('Approve')}{' '}
          </Text>
          <RadioButton
            value={'first'}
            status={addsCheck2 ? 'checked' : 'unchecked'}
            style={addsCheck2 ? styles.rb_checked : styles.rb_unchecked}
            onPress={() => setAddsCheck2(!addsCheck2)}
          />
        </View>
      </View>

      <LinearGradient
        style={styles.gradient_op}
        colors={['#A9333A', '#E1578A', '#FAE98F']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <TouchableOpacity onPress={() => checkTermUse()}>
          <Text style={styles.text_appr_con}>
            {translate('approveAndContinue')}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
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
    backgroundColor: '#FDFEFE',
    height: '100%',
  },

  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: window_height * 0.5,
    width: '100%',
  },

  closeImg: {
    width: 40,
    height: 40,
    marginLeft: 280,
    marginBottom: 50,
  },

  tinyLogo: {
    marginRight: 5,
  },

  text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 15,
  },

  textAlignment: {
    width: '90%',
  },

  text_approve: {
    color: 'rgba(91,89,89,0.98)',
    fontSize: 20,
  },

  gray_line: {
    marginTop: 30,
    marginBottom: 30,
    width: '90%',
    height: 3,
    backgroundColor: '#6c6e6e',
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    height: window_height * 0.3,
    width: '90%',
    backgroundColor: '#ffffff',
    borderWidth: 4,
    borderColor: '#ffffff',
    marginTop: 20,
    marginBottom: 20,
  },

  Radio_b_section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },

  Radio_b_section_text: {
    fontSize: 18,
  },

  mailApproveLink: {
    marginTop: 10,
  },

  Radio_b_section_link_mail_approval: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },

  Radio_b_section_link_termuse: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  footer: {
    display: 'flex',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },

  gradient_op: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '80%',
    borderRadius: 30,
  },

  text_appr_con: {
    fontSize: 25,
    color: '#F7F9F9',
  },

  rb_checked: {
    backgroundColor: '#2267E6',
    width: 100,
    height: 50,
  },

  rb_unchecked: {
    backgroundColor: '#E54F34',
  },
});
export default Terms;
