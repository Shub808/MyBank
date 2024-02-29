import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, Border, FontFamily, FontSize} from '../GlobalStyles';

const CardWithIconsAndText = ({
  cardWithIconsAndTextPosition,
  cardWithIconsAndTextTop,
  cardWithIconsAndTextLeft,
}) => {
  const navigation = useNavigation();

  const getStyleValue = (key, value) => {
    if (value === undefined) {
      return;
    }
    return {[key]: value === 'unset' ? undefined : value};
  };

  const handleTransferPress = () => {
    navigation.navigate('TransferScreen');
  };
  const handleCardDetailsPress = () => {
    navigation.navigate('CardDetailsScreen');
  };

  const styles = StyleSheet.create({
    cardWithIconsAndText: {
      width: 341,
      height: 114,
      left: '7%',
      bottom: '2%',
    },
    cardWithIconsAndText1: {
      width: '100%',
      overflow: 'hidden',
      bottom: '0%',
      top: '0%',
      height: '100%',
      position: 'absolute',
      left: '0%',
      right: '0%',
    },
    rectangleCopy3: {
      right: '68.62%',
      left: '0%',
      shadowOpacity: 1,
      elevation: 60,
      shadowRadius: 60,
      shadowOffset: {
        width: 0,
        height: 30,
      },
      shadowColor: 'rgba(0, 0, 0, 0.08)',
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
      shadowOpacity: 1,
      elevation: 60,
      shadowRadius: 60,
      shadowOffset: {
        width: 0,
        height: 30,
      },
      shadowColor: 'rgba(0, 0, 0, 0.08)',
      backgroundColor: Color.nICEWHITE,
      borderRadius: Border.br_3xs,
      width: '31.38%',
    },
    rectangle: {
      right: '78.59%',
      left: '10.26%',
    },
    sendIcon: {
      height: '15.26%',
      width: '5.31%',
      top: '25.7%',
      right: '81.52%',
      bottom: '59.04%',
      left: '13.17%',
    },
    rectangleCopy2: {
      right: '44.28%',
      left: '44.57%',
    },
    creditCard3Icon: {
      height: '11.4%',
      width: '5.87%',
      top: '28.07%',
      right: '46.92%',
      bottom: '60.53%',
      left: '47.21%',
    },
    rectangleCopy6: {
      right: '9.97%',
      left: '78.89%',
    },
    growthIcon: {
      height: '14.91%',
      width: '5.28%',
      top: '26.32%',
      right: '12.9%',
      bottom: '58.77%',
      left: '81.82%',
    },
    insight: {
      left: '78.59%',
    },
    myCard: {
      left: '42.52%',
    },
    transfer: {
      left: '8.8%',
    },
    rectangleShadowBox: {
      shadowOpacity: 1,
      elevation: 60,
      shadowRadius: 60,
      shadowOffset: {
        width: 0,
        height: 30,
      },
      shadowColor: 'rgba(0, 0, 0, 0.08)',
      borderRadius: Border.br_3xs,
      width: '31.38%',
      bottom: '0%',
      top: '0%',
      height: '100%',
      position: 'absolute',
      backgroundColor: '#f6f6fb',
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
    myCardTypo: {
      textAlign: 'center',
      color: Color.pURPLEBLACK,
      fontFamily: FontFamily.p116pxRegDMSans,
      fontSize: FontSize.size_smi,
      top: '50%',
      marginTop: 21,
      position: 'absolute',
    },
    touchableArea: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    sendIconTouchableArea: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });

  const cardWithIconsAndTextStyle = {
    ...getStyleValue('position', cardWithIconsAndTextPosition),
    ...getStyleValue('top', cardWithIconsAndTextTop),
    ...getStyleValue('left', cardWithIconsAndTextLeft),
  };

  return (
    <View style={[styles.cardWithIconsAndText, cardWithIconsAndTextStyle]}>
      <View style={styles.cardWithIconsAndText1}>
        <TouchableOpacity
          style={[
            styles.rectangleCopy3,
            styles.rectangleShadowBox,
            styles.touchableArea,
          ]}
          onPress={handleCardDetailsPress}
        />
        <View style={[styles.rectangleCopy4, styles.rectangleShadowBox]} />
        <View style={[styles.rectangleCopy5, styles.rectangleShadowBox]} />
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <TouchableOpacity
          style={[styles.sendIconTouchableArea]}
          onPress={handleTransferPress}>
          <Image
            style={[styles.sendIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/send.png')}
          />
        </TouchableOpacity>

        <View style={[styles.rectangleCopy2, styles.rectanglePosition]} />
        <Image
          style={[styles.creditCard3Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/creditcard-3.png')}
        />
        <View style={[styles.rectangleCopy6, styles.rectanglePosition]} />
        <Image
          style={[styles.growthIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/growth.png')}
        />
        <Text style={[styles.insight, styles.myCardTypo]}>Insight</Text>
        <Text style={[styles.myCard, styles.myCardTypo]}>My Card</Text>
        <Text style={[styles.transfer, styles.myCardTypo]}>Transfer</Text>
      </View>
    </View>
  );
};

export default CardWithIconsAndText;
