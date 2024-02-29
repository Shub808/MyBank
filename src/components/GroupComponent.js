import React, {useMemo} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import SquareProfileCard from './SquareProfileCard';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) {
    return;
  }
  return {[key]: value === 'unset' ? undefined : value};
};
const GroupComponent = ({groupViewPosition, groupViewTop, groupViewLeft}) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue('position', groupViewPosition),
      ...getStyleValue('top', groupViewTop),
      ...getStyleValue('left', groupViewLeft),
    };
  }, [groupViewPosition, groupViewTop, groupViewLeft]);

  return (
    <View style={[styles.profileCardsParent, groupView1Style]}>
      <View style={styles.profileCards}>
        <SquareProfileCard
          squareProfileCardPosition="absolute"
          squareProfileCardWidth="31.84%"
          squareProfileCardHeight="100%"
          squareProfileCardTop="0%"
          squareProfileCardRight="68.16%"
          squareProfileCardBottom="0%"
          squareProfileCardLeft="0%"
          rectangleCopy4BackgroundColor="#fefefe"
          textColor="#443d84"
          haileyFontSize={14}
          haileyFontWeight="unset"
          haileyFontFamily="DMSans-Regular"
        />
        <View style={[styles.group, styles.groupPosition]}>
          <View style={styles.rectangleShadowBox} />
          <View style={styles.wrapperRectangleCopy6}>
            <Image
              style={styles.rectangleLayout}
              resizeMode="cover"
              source={require('../assets/rectangle-copy-6.png')}
            />
          </View>
          <Text style={[styles.copy, styles.copyTypo]}>+090078601</Text>
          <Text style={[styles.zayn, styles.zaynTypo]}>Zayn</Text>
        </View>
        <View style={[styles.rectangleCopy7Parent, styles.groupPosition]}>
          <View style={styles.rectangleShadowBox} />
          <View style={styles.wrapperRectangleCopy6}>
            <Image
              style={styles.rectangleLayout}
              resizeMode="cover"
              source={require('../assets/rectangle-copy-8.png')}
            />
          </View>
          <Text style={[styles.copy2, styles.copyTypo]}>+090078601</Text>
          <Text style={[styles.thomson, styles.zaynTypo]}>Thomson</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    overflow: 'hidden',
    width: '31.84%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
  },
  copyTypo: {
    textAlign: 'center',
    color: Color.lIGHTPURPLEBLACK,
    fontFamily: FontFamily.h336pxBoldDMSans,
    fontWeight: '700',
    fontSize: FontSize.size_xs,
    top: '50%',
    marginTop: 47,
    position: 'absolute',
  },
  zaynTypo: {
    textAlign: 'left',
    color: Color.pURPLEBLACK,
    fontFamily: FontFamily.p116pxRegDMSans,
    fontSize: FontSize.p414pxRegDMSans_size,
    marginTop: 27,
    top: '50%',
    position: 'absolute',
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 60,
    shadowRadius: 60,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    backgroundColor: Color.nICEWHITE,
    borderRadius: Border.br_3xs,
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  rectangleLayout: {
    transform: [
      {
        scale: 1.571,
      },
    ],
    top: 10,
    left: 0,
    objectFit: 'contain',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  wrapperRectangleCopy6: {
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
  copy: {
    left: '23.24%',
  },
  zayn: {
    left: '38.73%',
  },
  group: {
    right: '34.08%',
    left: '34.08%',
  },
  copy2: {
    marginLeft: -28,
    left: '50%',
  },
  thomson: {
    left: '35.92%',
  },
  rectangleCopy7Parent: {
    left: '68.16%',
    right: '0%',
    overflow: 'hidden',
    width: '31.84%',
  },
  profileCards: {
    left: '0%',
    bottom: '0%',
    top: '0%',
    width: '100%',
    height: '100%',
    right: '0%',
    position: 'absolute',
  },
  profileCardsParent: {
    width: 446,
    height: 164,
  },
});

export default GroupComponent;
