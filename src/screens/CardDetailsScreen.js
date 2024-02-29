import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import GradientsBlueMoon from '../components/GradientsBlueMoon';
import MasterCard from '../components/MasterCard';
import PointsCards from '../components/PointsCards';
import SettingCategory from '../components/SettingCategory';
import Property1Default from '../components/Property1Default';
import {FontFamily, FontSize, Color, Border} from '../GlobalStyles';
import {ScrollView} from 'react-native-gesture-handler';

const CardDetailsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.cardDetailsScreen}>
        <View
          style={[styles.gradientsblueMoonWrapper, styles.rectanglePosition]}>
          <GradientsBlueMoon
            gradientsBlueMoonPosition="absolute"
            gradientsBlueMoonWidth="100%"
            gradientsBlueMoonHeight="276.54%"
            gradientsBlueMoonTop="0%"
            gradientsBlueMoonRight="0%"
            gradientsBlueMoonBottom="-176.54%"
            gradientsBlueMoonLeft="0%"
          />
        </View>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={styles.rectangleCopy2} />
        <Text style={[styles.settings, styles.settingsTypo]}>Settings</Text>
        <Text style={[styles.yourPlatniumCard, styles.settingsTypo]}>
          Your MyBank Card
        </Text>
        <MasterCard
          chip={require('../assets/chip1.png')}
          logoMastercardCopy={require('../assets/logomastercard-copy1.png')}
          masterCardPosition="absolute"
          masterCardTop={200}
          masterCardLeft={71}
          rectangleCopy6ShadowOffset="unset"
          chipIconWidth="15.51%"
          chipIconLeft="8.01%"
          logoMastercardCopyIconHeight="24.17%"
          logoMastercardCopyIconWidth="19.96%"
          logoMastercardCopyIconTop="64.8%"
          logoMastercardCopyIconRight="7.87%"
          logoMastercardCopyIconBottom="11.03%"
          logoMastercardCopyIconLeft="72.17%"
        />
        <PointsCards
          pointsCardsPosition="absolute"
          pointsCardsTop={413}
          pointsCardsLeft={37}
          pointsCardsElevation={60}
        />
        <SettingCategory
          settingCategoryPosition="absolute"
          settingCategoryTop={646}
          settingCategoryLeft={36}
        />
        <Property1Default
          property1DefaultWidth="82.13%"
          property1DefaultHeight="2.45%"
          property1DefaultRight="8.94%"
          property1DefaultBottom="94.87%"
        />
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
  settingsTypo: {
    fontFamily: FontFamily.h336pxBoldDMSans,
    fontWeight: '700',
    fontSize: FontSize.size_xl,
    position: 'absolute',
  },
  gradientsblueMoonWrapper: {
    top: 0,
    height: 306,
    overflow: 'hidden',
  },
  rectangle: {
    top: 306,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 591,
  },
  rectangleCopy2: {
    top: 858,
    left: 141,
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.bLUE,
    width: 133,
    height: 5,
    position: 'absolute',
  },
  settings: {
    top: 575,
    left: 36,
    color: Color.pURPLEBLACK,
    textAlign: 'left',
  },
  yourPlatniumCard: {
    top: 132,
    left: 122,
    color: Color.nICEWHITE,
    textAlign: 'center',
  },
  cardDetailsScreen: {
    backgroundColor: Color.nICEWHITE,
    flex: 1,
    width: '100%',
    height: 897,
    overflow: 'hidden',
  },
});

export default CardDetailsScreen;
