import * as React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import GradientsBlueMoon from '../components/GradientsBlueMoon';
import FiledIcons from '../components/FiledIcons';
import GroupComponent from '../components/GroupComponent';
import ContactListContainer from '../components/ContactListContainer';

import {FontFamily, Border, Color, FontSize} from '../GlobalStyles';

const TransferingScreen = () => {
  return (
    <ScrollView>
      <View style={styles.transferingScreen}>
        <View
          style={[styles.gradientsblueMoonWrapper, styles.rectanglePosition]}>
          <GradientsBlueMoon
            gradientsBlueMoonPosition="absolute"
            gradientsBlueMoonWidth="100%"
            gradientsBlueMoonHeight="276.55%"
            gradientsBlueMoonTop="0%"
            gradientsBlueMoonRight="0%"
            gradientsBlueMoonBottom="-176.55%"
            gradientsBlueMoonLeft="0%"
          />
        </View>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={[styles.rectangleCopy, styles.rectanglePosition]} />
        <FiledIcons
          user1={require('../assets/user-1.png')}
          filedIconsPosition="absolute"
          filedIconsWidth="87.44%"
          filedIconsHeight="9.92%"
          filedIconsTop="11.48%"
          filedIconsRight="6.28%"
          filedIconsBottom="78.6%"
          filedIconsLeft="6.28%"
          user1IconWidth="24.19%"
          user1IconRight="38.55%"
          user1IconLeft="37.26%"
        />
        <Text style={[styles.transfer, styles.recentTypo]}>Transfer By</Text>
        <Text style={[styles.recent, styles.recentTypo]}>Recent</Text>
        <GroupComponent
          groupViewPosition="absolute"
          groupViewTop={278}
          groupViewLeft={0}
        />
        <ContactListContainer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    width: 414,
    left: 0,
    position: 'absolute',
  },
  recentTypo: {
    fontFamily: FontFamily.h336pxBoldDMSans,
    fontWeight: '700',
    position: 'absolute',
  },
  gradientsblueMoonWrapper: {
    top: 0,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    height: 226,
    overflow: 'hidden',
  },
  rectangle: {
    top: 226,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 671,
  },
  rectangleCopy: {
    top: 469,
    height: 428,
    backgroundColor: Color.nICEWHITE,
  },
  transfer: {
    top: 61,
    left: 153,
    fontSize: FontSize.size_xl,
    color: Color.nICEWHITE,
    textAlign: 'center',
  },
  recent: {
    top: 241,
    left: 27,
    fontSize: FontSize.size_lg,
    color: Color.pURPLEBLACK,
    textAlign: 'left',
  },
  transferingScreen: {
    flex: 1,
    width: '100%',
    height: 897,
    overflow: 'hidden',
    backgroundColor: Color.nICEWHITE,
  },
});

export default TransferingScreen;
