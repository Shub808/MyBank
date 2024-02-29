import React, {useMemo} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Border, FontSize, FontFamily, Color} from '../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) {
    return;
  }
  return {[key]: value === 'unset' ? undefined : value};
};
const MasterCard = ({
  chip,
  logoMastercardCopy,
  masterCardPosition,
  masterCardTop,
  masterCardLeft,
  rectangleCopy6ShadowOffset,
  chipIconWidth,
  chipIconLeft,
  logoMastercardCopyIconHeight,
  logoMastercardCopyIconWidth,
  logoMastercardCopyIconTop,
  logoMastercardCopyIconRight,
  logoMastercardCopyIconBottom,
  logoMastercardCopyIconLeft,
}) => {
  const masterCardStyle = useMemo(() => {
    return {
      ...getStyleValue('position', masterCardPosition),
      ...getStyleValue('top', masterCardTop),
      ...getStyleValue('left', masterCardLeft),
    };
  }, [masterCardPosition, masterCardTop, masterCardLeft]);

  const rectangleCopy6Style = useMemo(() => {
    return {
      ...getStyleValue('shadowOffset', rectangleCopy6ShadowOffset),
    };
  }, [rectangleCopy6ShadowOffset]);

  const chipIconStyle = useMemo(() => {
    return {
      ...getStyleValue('width', chipIconWidth),
      ...getStyleValue('left', chipIconLeft),
    };
  }, [chipIconWidth, chipIconLeft]);

  const logoMastercardCopyIconStyle = useMemo(() => {
    return {
      ...getStyleValue('height', logoMastercardCopyIconHeight),
      ...getStyleValue('width', logoMastercardCopyIconWidth),
      ...getStyleValue('top', logoMastercardCopyIconTop),
      ...getStyleValue('right', logoMastercardCopyIconRight),
      ...getStyleValue('bottom', logoMastercardCopyIconBottom),
      ...getStyleValue('left', logoMastercardCopyIconLeft),
    };
  }, [
    logoMastercardCopyIconHeight,
    logoMastercardCopyIconWidth,
    logoMastercardCopyIconTop,
    logoMastercardCopyIconRight,
    logoMastercardCopyIconBottom,
    logoMastercardCopyIconLeft,
  ]);

  return (
    <View style={[styles.masterCard, masterCardStyle]}>
      <View style={styles.masterCard1}>
        <LinearGradient
          style={[styles.rectangleCopy6, rectangleCopy6Style]}
          locations={[0, 0.25, 1]}
          colors={['#000', '#171b25', '#545b6d']}
          useAngle={true}
          angle={-45.27}
        />
        <Image
          style={[styles.chipIcon, styles.iconLayout, chipIconStyle]}
          resizeMode="cover"
          source={chip}
        />
        <Image
          style={[
            styles.logoMastercardCopyIcon,
            styles.iconLayout,
            logoMastercardCopyIconStyle,
          ]}
          resizeMode="cover"
          source={logoMastercardCopy}
        />
        <Text style={styles.adamWise}>Harry Doe</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute',
  },
  rectangleCopy6: {
    borderRadius: Border.br_3xs,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    backgroundColor: 'transparent',
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  chipIcon: {
    height: '21.14%',
    width: '15.81%',
    top: '31.43%',
    right: '76.47%',
    bottom: '47.43%',
    left: '7.72%',
  },
  logoMastercardCopyIcon: {
    height: '24.57%',
    width: '20.22%',
    top: '64.57%',
    right: '7.72%',
    bottom: '10.86%',
    left: '72.06%',
  },
  adamWise: {
    marginTop: 52.5,
    top: '50%',
    fontSize: FontSize.size_xs,
    fontWeight: '500',
    fontFamily: FontFamily.dMSansMedium,
    color: Color.colorGray_200,
    textAlign: 'left',
    left: '7.72%',
    position: 'absolute',
  },
  masterCard1: {
    overflow: 'hidden',
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  masterCard: {
    width: 272,
    height: 175,
  },
});

export default MasterCard;
