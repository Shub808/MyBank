import React, {useMemo} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {FontFamily, Border, Color, FontSize} from '../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) {
    return;
  }
  return {[key]: value === 'unset' ? undefined : value};
};
const SquareProfileCard = ({
  squareProfileCardPosition,
  squareProfileCardWidth,
  squareProfileCardHeight,
  squareProfileCardTop,
  squareProfileCardRight,
  squareProfileCardBottom,
  squareProfileCardLeft,
  rectangleCopy4BackgroundColor,
  textColor,
  haileyFontSize,
  haileyLineHeight,
  haileyFontWeight,
  haileyFontFamily,
}) => {
  const squareProfileCardStyle = useMemo(() => {
    return {
      ...getStyleValue('position', squareProfileCardPosition),
      ...getStyleValue('width', squareProfileCardWidth),
      ...getStyleValue('height', squareProfileCardHeight),
      ...getStyleValue('top', squareProfileCardTop),
      ...getStyleValue('right', squareProfileCardRight),
      ...getStyleValue('bottom', squareProfileCardBottom),
      ...getStyleValue('left', squareProfileCardLeft),
    };
  }, [
    squareProfileCardPosition,
    squareProfileCardWidth,
    squareProfileCardHeight,
    squareProfileCardTop,
    squareProfileCardRight,
    squareProfileCardBottom,
    squareProfileCardLeft,
  ]);

  const rectangleCopy43Style = useMemo(() => {
    return {
      ...getStyleValue('backgroundColor', rectangleCopy4BackgroundColor),
    };
  }, [rectangleCopy4BackgroundColor]);

  const text5Style = useMemo(() => {
    return {
      ...getStyleValue('color', textColor),
    };
  }, [textColor]);

  const haileyStyle = useMemo(() => {
    return {
      ...getStyleValue('fontSize', haileyFontSize),
      ...getStyleValue('lineHeight', haileyLineHeight),
      ...getStyleValue('fontWeight', haileyFontWeight),
      ...getStyleValue('fontFamily', haileyFontFamily),
    };
  }, [haileyFontSize, haileyLineHeight, haileyFontWeight, haileyFontFamily]);

  return (
    <View style={[styles.squareProfileCard, squareProfileCardStyle]}>
      <View style={[styles.squareProfileCard1, styles.rectangleCopy3Layout]}>
        <View
          style={[
            styles.rectangleCopy4,
            styles.rectangleCopy4Position,
            rectangleCopy43Style,
          ]}
        />
        <View style={styles.wrapperRectangleCopy3}>
          <Image
            style={[styles.rectangleCopy3, styles.rectangleCopy3Layout]}
            resizeMode="cover"
            source={require('../assets/rectangle-copy-3.png')}
          />
        </View>
        <Text style={[styles.text, styles.textTypo, text5Style]}>
          +090078601
        </Text>
        <Text style={[styles.hailey, styles.textTypo, haileyStyle]}>
          Hailey
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleCopy3Layout: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  rectangleCopy4Position: {
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
  },
  textTypo: {
    fontFamily: FontFamily.h336pxBoldDMSans,
    fontWeight: '700',
    top: '50%',
    position: 'absolute',
  },
  rectangleCopy4: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    width: '100%',
    height: '100%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    position: 'absolute',
  },
  rectangleCopy3: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    left: 0,
    top: 10,
    transform: [
      {
        scale: 1.571,
      },
    ],
  },
  wrapperRectangleCopy3: {
    height: '42.68%',
    width: '49.3%',
    top: '10.98%',
    right: '25.35%',
    bottom: '46.34%',
    left: '25.35%',
    borderRadius: Border.br_6xl,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  text: {
    marginTop: 47,
    left: '23.94%',
    fontSize: FontSize.size_xs,
    color: Color.pURPLEGREY,
    textAlign: 'center',
  },
  hailey: {
    marginTop: 27,
    left: '35.92%',
    fontSize: FontSize.size_smi,
    lineHeight: 20,
    color: Color.pURPLEBLACK,
    textAlign: 'left',
  },
  squareProfileCard1: {
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
  },
  squareProfileCard: {
    width: 142,
    height: 164,
  },
});

export default SquareProfileCard;
