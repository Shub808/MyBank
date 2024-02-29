import React, {useMemo} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) {
    return;
  }
  return {[key]: value === 'unset' ? undefined : value};
};
const ChartCard = ({chartCardPosition, chartCardTop, chartCardLeft}) => {
  const chartCardStyle = useMemo(() => {
    return {
      ...getStyleValue('position', chartCardPosition),
      ...getStyleValue('top', chartCardTop),
      ...getStyleValue('left', chartCardLeft),
    };
  }, [chartCardPosition, chartCardTop, chartCardLeft]);

  return (
    <View style={[styles.chartCard, chartCardStyle]}>
      <View style={styles.chartCard1}>
        <View style={[styles.rectangleCopy, styles.pathIconPosition]} />
        <Text style={[styles.text, styles.textTypo]}>$1,460</Text>
        <Text style={[styles.copy, styles.textTypo]}>$17,715</Text>
        <Text style={[styles.spent, styles.spentTypo]}>Spent</Text>
        <Text style={[styles.earned, styles.spentTypo]}>Earned</Text>
        <Image
          style={[styles.ovalIcon, styles.ovalIconLayout]}
          resizeMode="cover"
          source={require('../../src/assets/oval1.png')}
        />
        <Image
          style={[styles.ovalCopyIcon, styles.ovalIconLayout]}
          resizeMode="cover"
          source={require('../../src/assets/oval2.png')}
        />
        <Image
          style={[styles.pathIcon, styles.ovalIconLayout]}
          resizeMode="cover"
          source={require('../../src/assets/path1.png')}
        />
        <Text
          style={[
            styles.youSpent2732,
            styles.tellMeMorePosition,
          ]}>{`You spent $2,732 on dining out this month.
Let’s try to make it lower`}</Text>
        <Text style={[styles.tellMeMore, styles.tellMeMorePosition]}>
          Tell me more
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pathIconPosition: {
    left: '0%',
    right: '0%',
    width: '100%',
  },
  textTypo: {
    textAlign: 'center',
    color: Color.pURPLEBLACK,
    fontSize: FontSize.size_5xl,
    top: '50%',
    marginTop: -64,
    fontFamily: FontFamily.h424BoldDMSans,
    fontWeight: '700',
    position: 'absolute',
  },
  spentTypo: {
    textAlign: 'left',
    color: Color.lIGHTPURPLEBLACK,
    fontSize: FontSize.size_2xs,
    marginTop: -79,
    fontFamily: FontFamily.p116pxRegDMSans,
    top: '50%',
    position: 'absolute',
  },
  ovalIconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute',
  },
  tellMeMorePosition: {
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    left: '6.18%',
    textAlign: 'left',
    top: '50%',
    position: 'absolute',
  },
  rectangleCopy: {
    borderRadius: Border.br_3xs,
    backgroundColor: '#f6f6fb',
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    left: '0%',
    right: '0%',
    width: '100%',
  },
  text: {
    left: '12.65%',
  },
  copy: {
    left: '62.65%',
  },
  spent: {
    left: '12.65%',
  },
  earned: {
    left: '62.65%',
  },
  ovalIcon: {
    right: '90.88%',
    left: '6.18%',
    maxWidth: '100%',
    bottom: '70.28%',
    top: '25%',
    width: '2.94%',
    height: '4.72%',
  },
  ovalCopyIcon: {
    right: '40.88%',
    left: '56.18%',
    bottom: '70.28%',
    top: '25%',
    width: '2.94%',
    height: '4.72%',
    maxWidth: '100%',
  },
  pathIcon: {
    height: '0.47%',
    top: '44.34%',
    bottom: '55.19%',
    opacity: 0.2,
    left: '0%',
    right: '0%',
    width: '100%',
    maxWidth: '100%',
  },
  youSpent2732: {
    marginTop: 10,
    fontFamily: FontFamily.p116pxRegDMSans,
    fontSize: FontSize.size_smi,
    color: Color.pURPLEBLACK,
  },
  tellMeMore: {
    marginTop: 60,
    textDecoration: 'underline',
    color: Color.bLUE,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.h424BoldDMSans,
    fontWeight: '700',
  },
  chartCard1: {
    overflow: 'hidden',
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  chartCard: {
    width: 340,
    height: 212,
    right: -30,
    bottom: 90,
  },
});

export default ChartCard;
