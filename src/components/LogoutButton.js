import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const LogoutScreen = ({onLogout}) => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogoutScreen;
