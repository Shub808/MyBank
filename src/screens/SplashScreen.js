import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FontFamily = {
  dMSansBoldItalic: 'YourFontName-BoldItalic',
};

const Color = {
  nICEWHITE: '#FFFFFF',
  bLUE: '#0000FF',
  dARKLAVENDER: '#1800FF',
};

const FontSize = {
  h424BoldDMSans_size: 24,
};

const Padding = {
  p_5xl: 32,
};

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashScreen}>
      <View style={styles.bankeeParent}>
        <Text style={[styles.bankee, styles.bankeeTypo]}>MyBank</Text>
        <View style={styles.bankFinanceKitWrapper}>
          <Text style={[styles.bankFinanceKit, styles.bankeeTypo]}>
            Your friendly bank
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bankeeTypo: {
    textAlign: 'center',
    fontWeight: '700',
  },
  bankee: {
    fontSize: 96,
    letterSpacing: -2,
    fontStyle: 'italic',
    fontFamily: FontFamily.dMSansBoldItalic,
    color: Color.nICEWHITE,
  },
  bankFinanceKit: {
    fontSize: FontSize.h424BoldDMSans_size,
    lineHeight: 28,
    fontFamily: FontFamily.dMSansBoldItalic,
    color: Color.nICEWHITE,
  },
  bankFinanceKitWrapper: {
    borderBottomWidth: 1,
    borderColor: Color.bLUE,
    paddingBottom: 6,
    alignItems: 'center',
  },
  bankeeParent: {
    padding: Padding.p_5xl,
    alignItems: 'center',
  },
  splashScreen: {
    backgroundColor: Color.dARKLAVENDER, // Background color set to purple
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
