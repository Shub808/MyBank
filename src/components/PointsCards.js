import React, {useMemo} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {Color, Border, FontFamily, FontSize} from '../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) {
    return;
  }
  return {[key]: value === 'unset' ? undefined : value};
};
const PointsCards = ({
  pointsCardsPosition,
  pointsCardsTop,
  pointsCardsLeft,
  pointsCardsElevation,
}) => {
  const pointsCardsStyle = useMemo(() => {
    return {
      ...getStyleValue('position', pointsCardsPosition),
      ...getStyleValue('top', pointsCardsTop),
      ...getStyleValue('left', pointsCardsLeft),
      ...getStyleValue('elevation', pointsCardsElevation),
    };
  }, [
    pointsCardsPosition,
    pointsCardsTop,
    pointsCardsLeft,
    pointsCardsElevation,
  ]);

  return (
    <View style={[styles.pointsCards, pointsCardsStyle]}>
      <View style={styles.pointsCards1}>
        <View style={[styles.rectangleCopy3, styles.rectangleLayout]} />
        <View style={[styles.rectangleCopy4, styles.rectangleLayout]} />
        <View style={[styles.rectangleCopy5, styles.rectangleLayout]} />
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Image
          style={[styles.lock1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/lock-1.png')}
        />
        <View style={[styles.rectangleCopy2, styles.rectanglePosition]} />
        <Image
          style={[styles.shieldIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/shield.png')}
        />
        <View style={[styles.rectangleCopy6, styles.rectanglePosition]} />
        <Image
          style={[styles.creditCard4Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/creditcard-4.png')}
        />
        <Text style={[styles.topUp, styles.topUpTypo]}>Top Up</Text>
        <Text style={[styles.changePin, styles.topUpTypo]}>Change PIN</Text>
        <Text style={[styles.lockCard, styles.topUpTypo]}>Lock Card</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    backgroundColor: Color.nICEWHITE,
    borderRadius: Border.br_3xs,
    width: '31.38%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
  },
  rectanglePosition: {
    backgroundColor: Color.bLUE,
    bottom: '50%',
    top: '16.67%',
    width: '11.14%',
    height: '33.33%',
    borderRadius: Border.br_3xs,
    position: 'absolute',
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute',
  },
  topUpTypo: {
    textAlign: 'center',
    color: Color.pURPLEBLACK,
    fontFamily: FontFamily.p116pxRegDMSans,
    fontSize: FontSize.size_smi,
    top: '50%',
    marginTop: 21,
    position: 'absolute',
  },
  rectangleCopy3: {
    right: '68.62%',
    left: '0%',
    backgroundColor: Color.nICEWHITE,
    borderRadius: Border.br_3xs,
    width: '31.38%',
  },
  rectangleCopy4: {
    right: '34.31%',
    left: '34.31%',
  },
  rectangleCopy5: {
    left: '68.62%',
    right: '0%',
    backgroundColor: Color.nICEWHITE,
    borderRadius: Border.br_3xs,
    width: '31.38%',
  },
  rectangle: {
    right: '78.59%',
    left: '10.26%',
  },
  lock1Icon: {
    width: '3.52%',
    right: '82.4%',
    left: '14.08%',
    bottom: '59.65%',
    top: '26.32%',
    height: '14.04%',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  rectangleCopy2: {
    right: '44.28%',
    left: '44.57%',
  },
  shieldIcon: {
    width: '4.11%',
    right: '47.8%',
    left: '48.09%',
    bottom: '59.65%',
    top: '26.32%',
    height: '14.04%',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  rectangleCopy6: {
    right: '9.97%',
    left: '78.89%',
  },
  creditCard4Icon: {
    height: '12.28%',
    width: '6.16%',
    top: '27.19%',
    right: '12.32%',
    bottom: '60.53%',
    left: '81.52%',
  },
  topUp: {
    left: '78.3%',
  },
  changePin: {
    left: '39.88%',
  },
  lockCard: {
    left: '7.04%',
  },
  pointsCards1: {
    width: '100%',
    overflow: 'hidden',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    left: '0%',
    right: '0%',
  },
  pointsCards: {
    width: 341,
    height: 114,
  },
});

export default PointsCards;
