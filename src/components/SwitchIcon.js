import React, {useMemo} from 'react';
import {Image, StyleSheet, ImageSourcePropType} from 'react-native';

const getStyleValue = (key, value) => {
  if (value === undefined) {
    return;
  }
  return {[key]: value === 'unset' ? undefined : value};
};
const SwitchIcon = ({dimensions, propMarginTop, propRight}) => {
  const switchIconStyle = useMemo(() => {
    return {
      ...getStyleValue('marginTop', propMarginTop),
      ...getStyleValue('right', propRight),
    };
  }, [propMarginTop, propRight]);

  return (
    <Image
      style={[styles.switchIcon, switchIconStyle]}
      resizeMode="cover"
      source={dimensions}
    />
  );
};

const styles = StyleSheet.create({
  switchIcon: {
    position: 'absolute',
    marginTop: 38,
    top: '50%',
    right: 22,
    width: 51,
    height: 31,
  },
});

export default SwitchIcon;
