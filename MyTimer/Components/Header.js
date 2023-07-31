import React from 'react';
import {Text, Image, View, Dimensions, StyleSheet} from 'react-native';

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
});

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Image source={require('../images/stopwatch.png')} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>My Timer</Text>
      </View>
    </View>
  );
};

export default Header;
