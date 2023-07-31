import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {MultiSelect} from 'react-native-element-dropdown';
import {formIcons} from '../../uiKit/formIcons';
import DefaultModal from '../Modals/DefaultModal';
import RegisterFormMethods from './RegisterFormMethods';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import {translate} from '../../locals/index';

const {closeFormModal, hideModal, submitForm, renderDataItem, uploadDocs} =
  RegisterFormMethods;

const licenseTypes = [
  {label: 'A', value: 1},
  {label: 'A1', value: 2},
  {label: 'A2', value: 3},
  {label: 'B', value: 4},
  {label: 'C', value: 5},
  {label: 'C1', value: 6},
  {label: 'C+E', value: 7},
  {label: 'D', value: 8},
  {label: 'D1', value: 9},
  {label: 'D2', value: 10},
  {label: 'D3', value: 11},
];

const RegisterForm = ({modalState, navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [employeeNumber, setEmployeeNumber] = useState(null);
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [licenseNumber, setLicenseNumber] = useState(null);
  const [licenseExpiration, setLicenseExpiration] = useState('');
  const [selectedLicenseTypes, setSelectedLicenseTypes] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [inputError, setInputError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const closeFormModal = () => {
    RegisterFormMethods.closeFormModal(setIsFormOpen);
  };

  const hideModal = () => {
    RegisterFormMethods.hideModal(setModalVisible);
  };

  const submitForm = () => {
    RegisterFormMethods.submitForm(
      firstName,
      lastName,
      employeeNumber,
      email,
      setInputError,
      setIsFormOpen,
      setModalVisible,
    );
  };

  const renderDataItem = item => {
    return RegisterFormMethods.renderDataItem(item, styles);
  };

  const uploadDocs = async () => {
    await RegisterFormMethods.uploadDocs();
  };

  return (
    <View style={styles.centeredView}>
      {/* Render Experience Modal on Submit */}
      {modalVisible ? (
        <DefaultModal
          headerImage={true}
          modalState={modalVisible}
          modalTitle={'החוויה שלך מתחילה כאן!'}
          modalText={
            'הגדרת החשבון הושלמה בהצלחה והאפליקציה מוכנה לשימוש. אנחנו מאחלים לך נסיעה טובה וחווית שירות מעולה.'
          }
          buttonText={'מעבר למסך הבית'}
          setModalVisible={setModalVisible}
          hideModal={hideModal}
        />
      ) : (
        <Modal
          animationType="slide"
          transparent={true}
          visible={isFormOpen}
          onRequestClose={closeFormModal}>
          <View style={styles.modalView}>
            <ScrollView contentContainerStyle={styles.modalContent}>
              <Text style={styles.modalTitle}>פרטים כלליים</Text>
              <View>
                <Text style={styles.titleSpacing}>
                  <Text style={styles.inputTitle}>* </Text>
                  <Text>שם פרטי</Text>
                </Text>
                <TextInput
                  placeholder="שם פרטי"
                  style={styles.reqInput}
                  value={firstName}
                  onChangeText={setFirstName}></TextInput>
                <View>
                  {!!inputError && (
                    <Text style={styles.errorText}>{inputError}</Text>
                  )}
                </View>
                <Text style={styles.titleSpacing}>
                  <Text style={styles.inputTitle}>* </Text>
                  <Text>שם משפחה</Text>
                </Text>
                <TextInput
                  placeholder="שם משפחה"
                  style={styles.reqInput}
                  value={lastName}
                  onChangeText={setLastName}
                />
                <View>
                  {!!inputError && (
                    <Text style={styles.errorText}>{inputError}</Text>
                  )}
                </View>
                <Text style={styles.titleSpacing}>
                  <Text style={styles.inputTitle}>* </Text>
                  <Text>מספר עובד</Text>
                </Text>
                <TextInput
                  placeholder="מספר עובד"
                  style={styles.reqInput}
                  value={employeeNumber}
                  onChangeText={setEmployeeNumber}
                />
                <View>
                  {!!inputError && (
                    <Text style={styles.errorText}>{inputError}</Text>
                  )}
                </View>
                <Text style={styles.titleSpacing}>
                  <Text>תאריך לידה</Text>
                </Text>
                <TextInput
                  placeholder="תאריך לידה"
                  style={[styles.formInput, styles.input]}
                  value={birthDate}
                  onChangeText={setBirthDate}
                />
              </View>
              <Text style={styles.modalText}>פרטי התקשרות</Text>
              <View>
                <Text style={styles.titleSpacing}>
                  <Text style={styles.inputTitle}>* </Text>
                  <Text>כתובת אימייל</Text>
                </Text>
                <TextInput
                  placeholder="כתובת אימייל"
                  style={styles.reqInput}
                  value={email}
                  onChangeText={setEmail}
                />
                <View>
                  {!!inputError && (
                    <Text style={styles.errorText}>{inputError}</Text>
                  )}
                </View>
                <Text style={styles.titleSpacing}>
                  <Text>מספר טלפון</Text>
                </Text>
                <TextInput
                  placeholder="טלפון"
                  style={[styles.formInput, styles.input]}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </View>
              <Text style={styles.modalText}>פרטי רישיון נהיגה</Text>
              <View>
                <Text style={styles.titleSpacing}>
                  <Text>מספר רישיון נהיגה</Text>
                </Text>
                <TextInput
                  placeholder="מספר רישיון נהיגה"
                  style={[styles.formInput, styles.input]}
                  value={licenseNumber}
                  onChangeText={setLicenseNumber}
                />
                <Text style={styles.titleSpacing}>
                  <Text>תוקף רישיון נהיגה</Text>
                </Text>
                <TextInput
                  placeholder="תוקף רישיון נהיגה"
                  style={[styles.formInput, styles.input]}
                  value={licenseExpiration}
                  onChangeText={setLicenseExpiration}
                />
                <Text style={styles.titleSpacing}>
                  <Text>סוג רישיון נהיגה</Text>
                </Text>
                <View style={styles.dropdownContainer}>
                  <MultiSelect
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={licenseTypes}
                    labelField="label"
                    valueField="value"
                    placeholder="בחר"
                    value={selectedLicenseTypes}
                    onChange={item => {
                      setSelectedLicenseTypes(item);
                    }}
                    renderItem={renderDataItem}
                    renderSelectedItem={(item, unSelect) => (
                      <TouchableOpacity
                        onPress={() => unSelect && unSelect(item)}>
                        <View style={styles.selectedStyle}>
                          <Text style={styles.textSelectedStyle}>
                            {item.label}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
              <Text style={styles.modalText}>מסמכים</Text>
              <TouchableOpacity onPress={uploadDocs}>
                <View style={styles.docsBox}>
                  <View style={styles.imageStyling}>
                    <Image
                      style={styles.imageStyle}
                      source={formIcons.documents}
                    />
                  </View>
                  <Text style={styles.copyLicense}>
                    צילום העתק רישיון נהיגה{'\n'}
                    <Text style={styles.secondaryCopyLicense}>הוסף צילום</Text>
                  </Text>
                  <View style={styles.roundBorder}>
                    <Image style={styles.plusStyle} source={formIcons.plus} />
                  </View>
                </View>
              </TouchableOpacity>

              <View style={styles.footer}>
                <LinearGradient
                  style={styles.gradient}
                  colors={['#d42f5b', '#d45e2f']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  location={[0.8, 0.95]}>
                  <TouchableOpacity style={styles.button} onPress={submitForm}>
                    <Text style={styles.buttonText}>
                      {translate('saveAndContinue')}
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </ScrollView>
          </View>
        </Modal>
      )}
    </View>
  );
};

const windowHeight = Dimensions.get('window').height; //returns height of window

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },

  modalView: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowRadius: 4,
    width: 400,
    height: windowHeight,
    elevation: 5,
  },

  modalContent: {
    padding: 30,
  },

  modalTitle: {
    marginTop: 0,
    marginBottom: 15,
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  modalText: {
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  titleSpacing: {
    marginBottom: 3,
  },

  inputTitle: {
    color: 'red',
    textAlign: 'right',
  },

  formInput: {
    borderWidth: 0.5,
    height: 40,
    width: '100%',
    borderColor: 'black',
    color: 'black',
  },

  input: {
    marginBottom: 15,
  },

  reqInput: {
    marginBottom: 10,
    borderWidth: 0.5,
    height: 40,
    width: '100%',
    borderColor: 'black',
    color: 'black',
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },

  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 220,
  },

  buttonText: {
    color: 'white',
  },

  gradient: {
    borderRadius: 30,
  },

  errorText: {
    color: 'red',
    fontSize: 13,
    marginBottom: 5,
  },

  /* Dropdown Styling */
  dropdownContainer: {
    paddingTop: 10,
    flex: 1,
  },
  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
  /* End Dropdown Styling */

  docsBox: {
    alignItems: 'flex-end',
    marginBottom: 30,
    flexDirection: 'row-reverse',
  },

  imageStyling: {
    height: 65,
    width: 70,
    alignItems: 'flex-end',
    padding: 3,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 9,
  },

  imageStyle: {
    width: 55,
    height: 55,
    marginLeft: 233,
    marginBottom: 10,
  },

  copyLicense: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: 5,
    marginBottom: 20,
  },

  secondaryCopyLicense: {
    fontWeight: 'normal',
    color: 'grey',
  },

  plusStyle: {
    height: 30,
    width: 30,
  },

  roundBorder: {
    backgroundColor: '#FFD4D4',
    alignSelf: 'flex-start',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginBottom: 12,
  },
});

export default RegisterForm;
