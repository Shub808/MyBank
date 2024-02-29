import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const getStyleValue = (key, value) => {
  if (value === undefined) {
    return;
  }
  return {[key]: value === 'unset' ? undefined : value};
};
const GradientsBlueMoon = ({
  gradientsBlueMoonPosition,
  gradientsBlueMoonWidth,
  gradientsBlueMoonHeight,
  gradientsBlueMoonTop,
  gradientsBlueMoonRight,
  gradientsBlueMoonBottom,
  gradientsBlueMoonLeft,
}) => {
  const gradientsBlueMoonStyle = useMemo(() => {
    return {
      ...getStyleValue('position', gradientsBlueMoonPosition),
      ...getStyleValue('width', gradientsBlueMoonWidth),
      ...getStyleValue('height', gradientsBlueMoonHeight),
      ...getStyleValue('top', gradientsBlueMoonTop),
      ...getStyleValue('right', gradientsBlueMoonRight),
      ...getStyleValue('bottom', gradientsBlueMoonBottom),
      ...getStyleValue('left', gradientsBlueMoonLeft),
    };
  }, [
    gradientsBlueMoonPosition,
    gradientsBlueMoonWidth,
    gradientsBlueMoonHeight,
    gradientsBlueMoonTop,
    gradientsBlueMoonRight,
    gradientsBlueMoonBottom,
    gradientsBlueMoonLeft,
  ]);

  return (
    <LinearGradient
      style={[styles.gradientsblueMoon, gradientsBlueMoonStyle]}
      locations={[0, 1]}
      colors={['#3a42e1', '#620c90']}
      useAngle={true}
      angle={135}
    />
  );
};

const styles = StyleSheet.create({
  gradientsblueMoon: {
    width: 226,
    height: 150,
    backgroundColor: 'transparent',
  },
});

export default GradientsBlueMoon;
