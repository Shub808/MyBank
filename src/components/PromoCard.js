import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FontFamily, FontSize, Color, Border} from '../GlobalStyles';

const PromoCard = () => {
  return (
    <View style={styles.characterCard}>
      <View style={[styles.characterCard1, styles.characterCard1Position]}>
        <Image
          style={[styles.charachterAddIcon, styles.characterCard1Position]}
          resizeMode="cover"
          source={require('../assets/charachter-add.png')}
        />
        <Text style={[styles.shareInviteYour, styles.get12FreeTypo]}>
          Invite your friends!
        </Text>
        <Text style={[styles.inviteFriendsRegis, styles.invitePosition]}>
          For every user you invite and signs up, you can earn up $5.
        </Text>
        <Text style={[styles.inviteNow, styles.invitePosition]}>
          Invite Now
        </Text>
        <Text style={[styles.get12Free, styles.get12FreeTypo]}>
          Get $12 free!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  characterCard1Position: {
    overflow: 'hidden',
    left: '0%',
    right: '0%',
    top: '0%',
    width: '100%',
    position: 'absolute',
  },
  get12FreeTypo: {
    textAlign: 'left',
    top: '50%',
    fontFamily: FontFamily.h336pxBoldDMSans,
    fontWeight: '700',
    position: 'absolute',
  },
  invitePosition: {
    lineHeight: 20,
    textAlign: 'left',
    left: '6.18%',
    top: '50%',
    position: 'absolute',
  },
  charachterAddIcon: {
    height: '48.14%',
    bottom: '51.86%',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  shareInviteYour: {
    marginTop: 20,
    fontSize: FontSize.p116pxRegDMSans_size,
    color: Color.pURPLEBLACK,
    left: '6.18%',
    textAlign: 'left',
    top: '50%',
  },
  inviteFriendsRegis: {
    marginTop: 53,
    width: '88.53%',
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.p116pxRegDMSans,
    color: Color.lIGHTPURPLEBLACK,
  },
  inviteNow: {
    marginTop: 111,
    fontSize: FontSize.size_mini,
    color: Color.bLUE,
    fontFamily: FontFamily.h336pxBoldDMSans,
    fontWeight: '700',
    lineHeight: 20,
  },
  get12Free: {
    marginTop: -121,
    left: '50.29%',
    fontSize: FontSize.size_3xl,
    color: Color.nICEWHITE,
    textAlign: 'left',
    top: '50%',
  },
  characterCard1: {
    height: '100%',
    bottom: '0%',
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
  },
  characterCard: {
    top: 1230,
    left: 30,
    width: 340,
    height: 322,
    position: 'absolute',
  },
});

export default PromoCard;
