import * as React from 'react';
import {Image, StyleSheet} from 'react-native';

const SwitchOffIcon = () => {
  return (
    <Image
      style={styles.switchOffIcon}
      resizeMode="cover"
      source={require('../assets/switch-off1.png')}
    />
  );
};

const styles = StyleSheet.create({
  switchOffIcon: {
    position: 'absolute',
    marginTop: 32.5,
    top: '50%',
    right: 1,
    width: 51,
    height: 31,
  },
});

export default SwitchOffIcon;
