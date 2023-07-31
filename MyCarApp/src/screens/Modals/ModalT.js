import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {translate} from '../../locals';
const window_height = Dimensions.get('window').height;
const window_width = Dimensions.get('window').width;

const Modal_T = props => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
          </View>

          <ScrollView style={styles.body}>
            <Text style={styles.text_body}>{translate('loremIpsum')}</Text>
          </ScrollView>

          <View style={styles.footer}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#A9333A', '#fa7676']}
              style={styles.linearGradient}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => props.closeModal()}>
                <Text style={styles.textStyle}>{props.buttonText}</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    height: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    height: window_height * 0.1,
  },

  headerText: {
    marginTop: 15,
    marginRight: 15,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  body: {
    marginTop: 5,
    marginBottom: 10,
    height: window_height * 0.8,
    width: window_width * 0.8,
  },

  text_body: {
    fontSize: 20,
    color: '#010a0e',
    fontWeight: 'bold',
  },

  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: window_width * 0.8,
    height: window_height * 0.2,
  },

  linearGradient: {
    marginTop: 30,
    borderRadius: 30,
    height: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: '100%',
    elevation: 2,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default Modal_T;
