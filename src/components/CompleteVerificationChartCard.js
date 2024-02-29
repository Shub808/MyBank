import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Border, Color, FontFamily, FontSize} from '../GlobalStyles';

const CompleteVerificationChartCard = () => {
  return (
    <View style={styles.chartCardHorizontal}>
      <View style={styles.chartCardHorizontal1}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={[styles.rectangleCopy8, styles.rectanglePosition]} />
        <Text style={[styles.personalInformation, styles.textTypo]}>
          Personal Information
        </Text>
        <Text style={[styles.verification, styles.verificationTypo]}>
          Verification
        </Text>
        <Text style={[styles.confirmEmail, styles.verificationTypo]}>
          Confirm email
        </Text>
        <Image
          style={styles.user1Icon}
          resizeMode="cover"
          source={require('../assets/user-12.png')}
        />
        <Image
          style={[styles.identityCardIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require('../assets/identitycard.png')}
        />
        <Image
          style={[styles.emailIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require('../assets/email.png')}
        />
        <Text style={[styles.text, styles.textTypo]}>75%</Text>
        <Text style={[styles.whenYouRegister, styles.of10CompletedPosition]}>
          Please provide documents to verify your source of income personal
          informmation.
        </Text>
        <Text style={[styles.continue, styles.continueTypo]}>Continue</Text>
        <Text style={[styles.of10Completed, styles.of10CompletedPosition]}>
          7 of 10 completed
        </Text>
        <Image
          style={[styles.path2Copy, styles.path2Layout]}
          resizeMode="cover"
          source={require('../assets/path-2-copy.png')}
        />
        <Image
          style={[styles.path2Copy2, styles.path2Layout]}
          resizeMode="cover"
          source={require('../assets/path-2-copy.png')}
        />
        <Image
          style={[styles.path2Icon, styles.path2Layout]}
          resizeMode="cover"
          source={require('../assets/path-2.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    borderRadius: Border.br_8xs,
    bottom: '79.41%',
    top: '18.14%',
    height: '2.45%',
    left: '6.18%',
    position: 'absolute',
  },
  textTypo: {
    textAlign: 'left',
    color: Color.pURPLEBLACK,
    fontFamily: FontFamily.h336pxBoldDMSans,
    fontWeight: '700',
    top: '50%',
    position: 'absolute',
  },
  verificationTypo: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: '500',
    textAlign: 'left',
    color: Color.pURPLEBLACK,
    fontSize: FontSize.p414pxRegDMSans_size,
    left: '16.47%',
    top: '50%',
    position: 'absolute',
  },
  iconPosition: {
    right: '87.65%',
    width: '6.18%',
    maxHeight: '100%',
    maxWidth: '100%',
    left: '6.18%',
    overflow: 'hidden',
    position: 'absolute',
  },
  of10CompletedPosition: {
    fontFamily: FontFamily.p116pxRegDMSans,
    color: Color.pURPLEBLACK,
    top: '50%',
    position: 'absolute',
  },
  continueTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    textAlign: 'left',
    left: '16.47%',
  },
  path2Layout: {
    height: '0.25%',
    maxHeight: '100%',
    maxWidth: '100%',
    right: '7.35%',
    overflow: 'hidden',
    position: 'absolute',
  },
  rectangle: {
    backgroundColor: Color.colorGray_300,
    right: '7.35%',
    borderRadius: Border.br_8xs,
    bottom: '79.41%',
    top: '18.14%',
    width: '86.47%',
    height: '2.45%',
  },
  rectangleCopy8: {
    width: '58.24%',
    right: '35.59%',
    backgroundColor: Color.bLUE,
    borderRadius: Border.br_8xs,
    bottom: '79.41%',
    top: '18.14%',
    height: '2.45%',
  },
  personalInformation: {
    marginTop: -71,
    fontSize: FontSize.p414pxRegDMSans_size,
    color: Color.pURPLEBLACK,
    left: '16.47%',
  },
  verification: {
    marginTop: 84,
  },
  confirmEmail: {
    marginTop: 151,
  },
  user1Icon: {
    height: '4.17%',
    width: '4.41%',
    top: '32.6%',
    right: '89.38%',
    bottom: '63.24%',
    left: '6.21%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute',
  },
  identityCardIcon: {
    height: '3.43%',
    top: '70.59%',
    bottom: '25.98%',
  },
  emailIcon: {
    height: '3.68%',
    top: '87.25%',
    bottom: '9.07%',
  },
  text: {
    marginTop: -177,
    fontSize: FontSize.size_6xl,
    left: '6.18%',
  },
  whenYouRegister: {
    marginTop: -40,
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    textAlign: 'left',
    left: '16.47%',
    width: '76.18%',
  },
  continue: {
    marginTop: 19,
    color: Color.bLUE,
    fontFamily: FontFamily.h336pxBoldDMSans,
    fontWeight: '700',
    top: '50%',
    fontSize: FontSize.size_smi,
    position: 'absolute',
  },
  of10Completed: {
    marginTop: -168,
    left: '63.24%',
    fontSize: FontSize.size_xs,
    textAlign: 'center',
  },
  path2Copy: {
    top: '64.46%',
    bottom: '35.29%',
    width: '76.18%',
    left: '16.47%',
    height: '0.25%',
  },
  path2Copy2: {
    top: '82.11%',
    bottom: '17.65%',
    width: '76.18%',
    left: '16.47%',
    height: '0.25%',
  },
  path2Icon: {
    top: '26.72%',
    bottom: '73.04%',
    left: '6.18%',
    height: '0.25%',
    width: '86.47%',
  },
  chartCardHorizontal1: {
    height: '100%',
    width: '100%',
    top: '30%',
    right: '0%',
    bottom: '0%',
    left: '0%',
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
    overflow: 'hidden',
    position: 'absolute',
  },
  chartCardHorizontal: {
    top: 610,
    left: 30,
    width: 340,
    height: 408,
    position: 'absolute',
  },
});

export default CompleteVerificationChartCard;
