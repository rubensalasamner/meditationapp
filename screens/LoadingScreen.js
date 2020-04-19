import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';

class LoadingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
