import React, {Children, useEffect, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Image,
  Pressable,
  Button,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {loginIcons} from '../../uiKit/icons';

const DefaultModal = ({
  modalState,
  children,
  headerImage,
  modalTitle,
  modalText,
  buttonText,
  hideModal,
  setModalVisible,
  modalSecondText,
  close,
  navigation,
}) => {
  const closeModal = () => {
    hideModal();
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
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalState}
        onRequestClose={closeModal}>
        <View>
          <View style={styles.modalView}>
            {headerImage ? (
              <View style={styles.logoBg}>
                <Image
                  style={styles.headerImageStyle}
                  source={loginIcons.logoSmall}
                />
              </View>
            ) : (
              ''
            )}
            <Text style={styles.modalText}>{modalTitle}</Text>
            <Text style={styles.modalInnerText}>{modalText}</Text>
            {modalSecondText ? (
              <Text style={styles.modalInnerText}>{modalSecondText}</Text>
            ) : (
              ''
            )}
            <LinearGradient
              colors={['#A9333A', '#E1578A', '#FAE98F']}
              style={styles.gradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              {buttonText === 'פנייה למוקד' ? (
                <Pressable style={[styles.button]} onPress={openDialScreen}>
                  <Text style={styles.textStyle}>{buttonText}</Text>
                </Pressable>
              ) : (
                <Pressable style={[styles.button]} onPress={hideModal}>
                  <Text style={styles.textStyle}>{buttonText}</Text>
                </Pressable>
              )}
            </LinearGradient>
            {close ? (
              <TouchableOpacity onPress={hideModal}>
                <Text style={styles.closeText}>{close}</Text>
              </TouchableOpacity>
            ) : (
              ''
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    flex: 1,
    backgroundColor: 'white',
  },
  modalView: {
    marginTop: 120,
    marginLeft: 45,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: 300,
    elevation: 5,
  },
  logoBg: {
    margin: 10,
  },
  headerImageStyle: {},
  button: {
    padding: 10,
    width: 150,
    height: 43,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  modalInnerText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  gradient: {
    borderRadius: 30,
  },
  closeText: {
    color: 'blue',
    marginTop: 6,
  },
});

export default DefaultModal;
