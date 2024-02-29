import React, {useMemo} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {FontSize, FontFamily, Color} from '../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) {
    return;
  }
  return {[key]: value === 'unset' ? undefined : value};
};
const BarsStatusBariPhonexTime = ({
  time,
  timeHeight,
  timeWidth,
  timeTop,
  timeRight,
  timeBottom,
  timeLeft,
  timeBackgroundColor,
  propFontWeight,
  propFontFamily,
  propColor,
}) => {
  const barsStatusBariPhonexTimeStyle = useMemo(() => {
    return {
      ...getStyleValue('height', timeHeight),
      ...getStyleValue('width', timeWidth),
      ...getStyleValue('top', timeTop),
      ...getStyleValue('right', timeRight),
      ...getStyleValue('bottom', timeBottom),
      ...getStyleValue('left', timeLeft),
      ...getStyleValue('backgroundColor', timeBackgroundColor),
    };
  }, [
    timeHeight,
    timeWidth,
    timeTop,
    timeRight,
    timeBottom,
    timeLeft,
    timeBackgroundColor,
  ]);

  const timeStyle = useMemo(() => {
    return {
      ...getStyleValue('fontWeight', propFontWeight),
      ...getStyleValue('fontFamily', propFontFamily),
      ...getStyleValue('color', propColor),
    };
  }, [propFontWeight, propFontFamily, propColor]);

  return (
    <View
      style={[styles.barsstatusBariphonextime, barsStatusBariPhonexTimeStyle]}>
      <Text style={[styles.time, timeStyle]}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    marginTop: -3.5,
    top: '50%',
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: '100',
    fontFamily: FontFamily.interThin,
    color: Color.colorBlack,
    textAlign: 'center',
    width: 54,
    position: 'absolute',
  },
  barsstatusBariphonextime: {
    height: '0.81%',
    width: '0.35%',
    top: '0%',
    right: '99.65%',
    bottom: '99.19%',
    left: '0%',
    backgroundColor: Color.colorWhite,
    position: 'absolute',
  },
});

export default BarsStatusBariPhonexTime;
