import React, {useMemo} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import SwitchIcon from './SwitchIcon';
import SwitchOffIcon from './SwitchOffIcon';
import {Color, FontFamily, FontSize} from '../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) {
    return;
  }
  return {[key]: value === 'unset' ? undefined : value};
};
const SettingCategory = ({
  settingCategoryPosition,
  settingCategoryTop,
  settingCategoryLeft,
}) => {
  const settingCategoryStyle = useMemo(() => {
    return {
      ...getStyleValue('position', settingCategoryPosition),
      ...getStyleValue('top', settingCategoryTop),
      ...getStyleValue('left', settingCategoryLeft),
    };
  }, [settingCategoryPosition, settingCategoryTop, settingCategoryLeft]);

  return (
    <View style={[styles.settingCategory, settingCategoryStyle]}>
      <View style={[styles.settingCategory1, styles.path2Copy4Position]}>
        <Text style={[styles.setCardLimit, styles.setCardTypo]}>
          Contactless Payments
        </Text>
        <Text style={[styles.setCardLimit1, styles.setCardTypo]}>
          Set card limit
        </Text>
        <Text style={[styles.youSetBudget, styles.youTypo]}>
          Payments are turned on
        </Text>
        <Text style={[styles.youSetBudget1, styles.youTypo]}>
          You set budget for 3 categories
        </Text>
        <Image
          style={[styles.path2Copy4, styles.path2Copy4Position]}
          resizeMode="cover"
          source={require('../assets/path-2-copy-41.png')}
        />
        <SwitchIcon
          dimensions={require('../assets/switch-copy.png')}
          propMarginTop={-50.5}
          propRight={0}
        />
        <SwitchOffIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  path2Copy4Position: {
    overflow: 'hidden',
    left: '0%',
    right: '0%',
    width: '100%',
    position: 'absolute',
  },
  setCardTypo: {
    textAlign: 'left',
    color: Color.pURPLEBLACK,
    fontFamily: FontFamily.h336pxBoldDMSans,
    fontWeight: '700',
    fontSize: FontSize.p116pxRegDMSans_size,
    top: '50%',
    left: '0%',
    position: 'absolute',
  },
  youTypo: {
    color: Color.lIGHTPURPLEBLACK,
    fontFamily: FontFamily.p116pxRegDMSans,
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    textAlign: 'left',
    top: '50%',
    left: '0%',
    position: 'absolute',
  },
  setCardLimit: {
    marginTop: -67.5,
  },
  setCardLimit1: {
    marginTop: 19.5,
  },
  youSetBudget: {
    marginTop: -39.5,
  },
  youSetBudget1: {
    marginTop: 47.5,
  },
  path2Copy4: {
    height: '0.74%',
    top: '46.67%',
    bottom: '52.59%',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  settingCategory1: {
    height: '100%',
    top: '0%',
    bottom: '0%',
  },
  settingCategory: {
    width: 343,
    height: 135,
  },
});

export default SettingCategory;
