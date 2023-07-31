import React from 'react';
import {Text, Image, View, Dimensions, StyleSheet} from 'react-native';
import {loginIcons} from '../../../uiKit/icons';

const windowHeight = Dimensions.get('window').height; //returns height of window

const styles = StyleSheet.create({
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
    height: windowHeight * 0.2, //20% of total screen
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 10,
    backgroundColor: 'white',
  },
  image: {
    marginLeft: 70,
    marginTop: 70,
  },
});

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.image}>
        <Image source={loginIcons.logo} />
      </View>
    </View>
  );
};

export default Header;
