import React, {useMemo} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {Color, Border, FontFamily, FontSize} from '../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) {
    return;
  }
  return {[key]: value === 'unset' ? undefined : value};
};
const FiledIcons = ({
  user1,
  filedIconsPosition,
  filedIconsWidth,
  filedIconsHeight,
  filedIconsTop,
  filedIconsRight,
  filedIconsBottom,
  filedIconsLeft,
  user1IconWidth,
  user1IconRight,
  user1IconLeft,
}) => {
  const filedIconsStyle = useMemo(() => {
    return {
      ...getStyleValue('position', filedIconsPosition),
      ...getStyleValue('width', filedIconsWidth),
      ...getStyleValue('height', filedIconsHeight),
      ...getStyleValue('top', filedIconsTop),
      ...getStyleValue('right', filedIconsRight),
      ...getStyleValue('bottom', filedIconsBottom),
      ...getStyleValue('left', filedIconsLeft),
    };
  }, [
    filedIconsPosition,
    filedIconsWidth,
    filedIconsHeight,
    filedIconsTop,
    filedIconsRight,
    filedIconsBottom,
    filedIconsLeft,
  ]);

  const user1IconStyle = useMemo(() => {
    return {
      ...getStyleValue('width', user1IconWidth),
      ...getStyleValue('right', user1IconRight),
      ...getStyleValue('left', user1IconLeft),
    };
  }, [user1IconWidth, user1IconRight, user1IconLeft]);

  return (
    <View style={[styles.filedIcons, filedIconsStyle]}>
      <View style={styles.filedIcons1}>
        <View style={[styles.off, styles.onPosition]}>
          <View style={[styles.rectangleCopy10, styles.rectanglePosition2]} />
          <View style={styles.bank}>
            <View style={[styles.rectangle, styles.rectanglePosition1]} />
            <View style={[styles.rectangle1, styles.rectanglePosition1]} />
            <Image
              style={[styles.pathIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require('../assets/path4.png')}
            />
            <View style={[styles.rectangle2, styles.rectanglePosition]} />
            <View style={[styles.rectangle3, styles.rectanglePosition]} />
            <View style={[styles.rectangle4, styles.rectanglePosition]} />
            <View style={[styles.rectangle5, styles.rectanglePosition]} />
          </View>
          <View style={[styles.rectangleCopy11, styles.rectanglePosition2]} />
          <Image
            style={[styles.wirelessSymbolIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/wirelesssymbol.png')}
          />
          <View style={[styles.rectangleCopy12, styles.rectanglePosition2]} />
          <Image
            style={[styles.qrCodeIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require('../assets/qrcode1.png')}
          />
          <Text style={[styles.bank1, styles.bank1Typo]}>Bank</Text>
          <Text style={[styles.online, styles.bank1Typo]}>Online</Text>
          <Text style={[styles.qrCode, styles.bank1Typo]}>QR code</Text>
        </View>
        <View style={[styles.on, styles.onPosition]}>
          <View style={[styles.rectangleCopy9, styles.rectanglePosition2]} />
          <Image
            style={[styles.user1Icon, styles.iconLayout, user1IconStyle]}
            resizeMode="cover"
            source={user1}
          />
          <Text style={[styles.mobile, styles.bank1Typo]}>Mobile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onPosition: {
    top: 0,
    position: 'absolute',
    height: 89,
  },
  rectanglePosition2: {
    backgroundColor: Color.lIGHTGREYWHITE,
    borderRadius: Border.br_lgi,
    bottom: '30.34%',
    height: '69.66%',
    top: '0%',
    position: 'absolute',
  },
  rectanglePosition1: {
    backgroundColor: Color.bLUE,
    height: '11.89%',
    left: '0%',
    right: '0%',
    width: '100%',
    position: 'absolute',
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute',
  },
  rectanglePosition: {
    bottom: '17.3%',
    top: '43.24%',
    width: '11.89%',
    height: '39.46%',
    backgroundColor: Color.bLUE,
    position: 'absolute',
  },
  bank1Typo: {
    textAlign: 'left',
    color: Color.lIGHTGREYWHITE,
    fontFamily: FontFamily.p116pxRegDMSans,
    fontSize: FontSize.p414pxRegDMSans_size,
    top: '50%',
    marginTop: 24.5,
    position: 'absolute',
  },
  rectangleCopy10: {
    right: '78.34%',
    width: '23.66%',
    borderRadius: Border.br_lgi,
    bottom: '30.34%',
    height: '69.66%',
    left: '0%',
  },
  rectangle: {
    top: '88.11%',
    bottom: '0%',
    backgroundColor: Color.bLUE,
    height: '11.89%',
  },
  rectangle1: {
    top: '25.41%',
    bottom: '62.7%',
  },
  pathIcon: {
    height: '19.46%',
    width: '95.14%',
    right: '2.7%',
    bottom: '80.54%',
    left: '2.16%',
    top: '0%',
    maxWidth: '100%',
  },
  rectangle2: {
    right: '79.46%',
    left: '8.65%',
  },
  rectangle3: {
    right: '55.68%',
    left: '32.43%',
  },
  rectangle4: {
    right: '32.43%',
    left: '55.68%',
  },
  rectangle5: {
    right: '8.65%',
    left: '79.46%',
  },
  bank: {
    height: '20.79%',
    width: '7.06%',
    right: '84.54%',
    bottom: '54.49%',
    left: '8.4%',
    top: '24.72%',
    position: 'absolute',
  },
  rectangleCopy11: {
    right: '38.17%',
    left: '34.17%',
    width: '23.66%',
    borderRadius: Border.br_lgi,
    bottom: '30.34%',
    height: '69.66%',
  },
  wirelessSymbolIcon: {
    height: '14.27%',
    width: '7.29%',
    top: '27.42%',
    right: '46.53%',
    bottom: '58.31%',
    left: '42.18%',
  },
  rectangleCopy12: {
    right: '-0.38%',
    left: '68.72%',
    width: '23.66%',
    borderRadius: Border.br_lgi,
    bottom: '30.34%',
    height: '69.66%',
  },
  qrCodeIcon: {
    height: '19.55%',
    width: '6.64%',
    right: '8.63%',
    bottom: '55.73%',
    left: '77.73%',
    top: '24.72%',
  },
  bank1: {
    left: '5.49%',
  },
  online: {
    left: '37.75%',
  },
  qrCode: {
    left: '70.48%',
  },
  off: {
    left: 100,
    width: 262,
  },
  rectangleCopy9: {
    borderStyle: 'solid',
    borderColor: Color.lIGHTGREYWHITE,
    borderWidth: 3,
    borderRadius: Border.br_lgi,
    bottom: '30.34%',
    height: '69.66%',
    left: '0%',
    right: '0%',
    width: '100%',
  },
  user1Icon: {
    height: '19.1%',
    width: '25.81%',
    top: '25.84%',
    right: '37.1%',
    bottom: '55.06%',
    left: '37.1%',
  },
  mobile: {
    left: '15.74%',
  },
  on: {
    left: 0,
    width: 62,
  },
  filedIcons1: {
    height: '100%',
    overflow: 'hidden',
    right: '0%',
    width: '100%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    position: 'absolute',
  },
  filedIcons: {
    width: 362,
    height: 89,
  },
});

export default FiledIcons;
