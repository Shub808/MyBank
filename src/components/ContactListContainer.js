import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Border, Color, FontSize, FontFamily} from '../GlobalStyles';

const ContactListContainer = () => {
  return (
    <View style={styles.contactList}>
      <View style={[styles.contactList1, styles.groupPosition]}>
        <View style={styles.rectangleCopy13} />
        <Text style={styles.allContats}>All contacts</Text>
        <View style={[styles.wrapperRectangleCopy14, styles.wrapperLayout]}>
          <Image
            style={styles.rectangleLayout1}
            resizeMode="cover"
            source={require('../assets/rectangle-copy-17.png')}
          />
        </View>
        <Image
          style={styles.path2Copy4}
          resizeMode="cover"
          source={require('../assets/path-2-copy-42.png')}
        />
        <Image
          style={[styles.path2Copy5, styles.path2Layout]}
          resizeMode="cover"
          source={require('../assets/path-2-copy-5.png')}
        />
        <Image
          style={[styles.path2Copy6, styles.path2Layout]}
          resizeMode="cover"
          source={require('../assets/path-2-copy-5.png')}
        />
        <View style={[styles.wrapperRectangleCopy15, styles.wrapperLayout]}>
          <Image
            style={styles.rectangleLayout1}
            resizeMode="cover"
            source={require('../assets/rectangle-copy-15.png')}
          />
        </View>
        <View style={[styles.wrapperRectangleCopy16, styles.wrapperLayout]}>
          <Image
            style={styles.rectangleLayout1}
            resizeMode="cover"
            source={require('../assets/rectangle-copy-16.png')}
          />
        </View>
        <Text style={[styles.copy3, styles.copyTypo]}>+090078601</Text>
        <Text style={[styles.haileySanders, styles.zaynMichelTypo]}>
          Hailey Sanders
        </Text>
        <Text style={[styles.copy4, styles.copyTypo]}>+090078601</Text>
        <Text style={[styles.zaynMichel, styles.zaynMichelTypo]}>
          Zayn Michel
        </Text>
        <Text style={[styles.copy5, styles.copyTypo]}>+090078601</Text>
        <Text style={[styles.thomasDenver, styles.zaynMichelTypo]}>
          Thomas Denver
        </Text>
        <View style={[styles.group, styles.groupPosition]}>
          <Image
            style={styles.loupeIcon}
            resizeMode="cover"
            source={require('../assets/loupe.png')}
          />
          <Text style={styles.searchNameOr}>Search name or number.</Text>
        </View>
        <View style={[styles.rectangle, styles.rectangleLayout]} />
        <View style={[styles.rectangleCopy2, styles.rectangleLayout]} />
        <Text style={[styles.invite, styles.inviteTypo]}>Invite</Text>
        <Text style={[styles.inviteCopy, styles.inviteTypo]}>Invite</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    overflow: 'hidden',
    position: 'absolute',
  },
  wrapperLayout: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: Border.br_xl,
    right: '85.21%',
    width: '14.79%',
    height: '14.03%',
    left: '0%',
    position: 'absolute',
  },
  path2Layout: {
    left: '0.49%',
    right: '0.05%',
    width: '99.45%',
    height: '0.52%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute',
  },
  copyTypo: {
    textAlign: 'center',
    color: Color.pURPLEGREY,
    fontSize: FontSize.size_xs,
    left: '19.73%',
    fontFamily: FontFamily.h336pxBoldDMSans,
    fontWeight: '700',
    top: '50%',
    position: 'absolute',
  },
  zaynMichelTypo: {
    lineHeight: 20,
    fontSize: FontSize.p116pxRegDMSans_size,
    left: '19.73%',
    textAlign: 'left',
    color: Color.pURPLEBLACK,
    fontFamily: FontFamily.h336pxBoldDMSans,
    fontWeight: '700',
    top: '50%',
    position: 'absolute',
  },
  rectangleLayout: {
    backgroundColor: Color.pURPLEGREY,
    borderRadius: Border.br_8xs,
    left: '80%',
    width: '20%',
    height: '9.09%',
    right: '0%',
    position: 'absolute',
  },
  inviteTypo: {
    color: Color.nICEWHITE,
    fontFamily: FontFamily.p116pxRegDMSans,
    left: '85.21%',
    fontSize: FontSize.p414pxRegDMSans_size,
    textAlign: 'center',
    top: '50%',
    position: 'absolute',
  },
  rectangleCopy13: {
    height: '12.73%',
    width: '99.73%',
    top: '11.69%',
    right: '0.27%',
    bottom: '75.58%',
    borderRadius: Border.br_3xs,
    backgroundColor: Color.nICEWHITE,
    left: '0%',
    position: 'absolute',
  },
  allContats: {
    marginTop: -192.5,
    fontSize: FontSize.size_lg,
    textAlign: 'left',
    color: Color.pURPLEBLACK,
    fontFamily: FontFamily.h336pxBoldDMSans,
    fontWeight: '700',
    left: '0.55%',
    top: '50%',
    position: 'absolute',
  },
  rectangleLayout1: {
    transform: [
      {
        scale: 1.741,
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
  wrapperRectangleCopy14: {
    top: '30.91%',
    bottom: '55.06%',
  },
  path2Copy4: {
    top: '50.13%',
    bottom: '49.35%',
    width: '99.45%',
    height: '0.52%',
    maxHeight: '100%',
    maxWidth: '100%',
    left: '0.55%',
    overflow: 'hidden',
    right: '0%',
    position: 'absolute',
  },
  path2Copy5: {
    top: '74.83%',
    bottom: '24.65%',
  },
  path2Copy6: {
    top: '99.25%',
    bottom: '0.23%',
  },
  wrapperRectangleCopy15: {
    top: '55.84%',
    bottom: '30.13%',
  },
  wrapperRectangleCopy16: {
    top: '80.52%',
    bottom: '5.45%',
  },
  copy3: {
    marginTop: -42.5,
  },
  haileySanders: {
    marginTop: -66.5,
  },
  copy4: {
    marginTop: 53.5,
  },
  zaynMichel: {
    marginTop: 29.5,
  },
  copy5: {
    marginTop: 148.5,
  },
  thomasDenver: {
    marginTop: 124.5,
  },
  loupeIcon: {
    height: '95%',
    width: '9.22%',
    right: '90.78%',
    bottom: '5%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    left: '0%',
    top: '0%',
    position: 'absolute',
  },
  searchNameOr: {
    marginTop: -10,
    left: '17.96%',
    fontSize: FontSize.p414pxRegDMSans_size,
    lineHeight: 20,
    color: Color.pURPLEGREY,
    textAlign: 'left',
    fontFamily: FontFamily.h336pxBoldDMSans,
    fontWeight: '700',
    top: '50%',
    position: 'absolute',
  },
  group: {
    height: '5.19%',
    width: '56.44%',
    top: '15.58%',
    right: '37.53%',
    bottom: '79.22%',
    left: '6.03%',
  },
  rectangle: {
    top: '33.51%',
    bottom: '57.4%',
  },
  rectangleCopy2: {
    top: '58.44%',
    bottom: '32.47%',
  },
  invite: {
    marginTop: -53.5,
  },
  inviteCopy: {
    marginTop: 42.5,
  },
  contactList1: {
    bottom: '0%',
    left: '0%',
    right: '0%',
    top: '0%',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  contactList: {
    top: 489,
    left: 25,
    width: 365,
    height: 385,
    position: 'absolute',
  },
});

export default ContactListContainer;
