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
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';

const window_height = Dimensions.get('window').height;
const window_width = Dimensions.get('window').width;

const TermofDivor = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {t} = useTranslation();
  const backToTerms = () => {
    navigation.navigate('Terms');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{t('תנאידיווח')}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.text_approve}>{t('ipsameloren')}</Text>
      </View>

      <View style={styles.footer}>
        <LinearGradient
          style={styles.gradient_op}
          colors={['rgba(253,42,249,0.7)', 'rgba(253,42,211,0.52)']}>
          <TouchableOpacity onPress={() => backToTerms()}>
            <Text style={styles.text_appr_con}>{t('approveandcontinue')}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
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
    height: window_height * 0.3,
    width: '100%',
    backgroundColor: '#ffffff',
  },

  tinyLogo: {
    marginRight: 5,
    width: 120,
    height: 100,
  },

  text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 40,
    marginTop: 15,
  },
  text_approve: {
    color: 'rgba(91,89,89,0.98)',
    fontSize: 24,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    height: window_height * 0.3,
    width: '100%',
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
    height: window_height * 0.1,
  },

  Radio_b_section_text: {
    fontSize: 20,
  },

  Radio_b_section_link_Reporting_conditions: {
    fontSize: 15,
    color: 'blue',
    marginTop: 30,
    marginRight: 0,
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
    width: '60%',
    borderRadius: 20,
  },

  text_appr_con: {
    fontSize: 25,
    color: '#F7F9F9',
  },

  checked: {
    backgroundColor: 'blue',
  },
  unchecked: {
    backgroundColor: 'white',
  },
});

export default TermofDivor;

/*
 <Text style={styles.Radio_b_section_text}>{t("Givemethings")}</Text>

 */
