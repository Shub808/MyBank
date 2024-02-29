import React from 'react';
import LogoutScreen from '../components/LogoutButton';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ChartCard from '../components/ChartCard';
import CardWithIconsAndText from '../components/CardWithIconsAndText';
import CompleteVerificationChartCard from '../components/CompleteVerificationChartCard';
import PromoCard from '../components/PromoCard';

const HomeScreen = ({navigation}) => {
  const handleLogout = () => {
    console.log('User logged out!');
    navigation.replace('Login');
  };

  return (
    <ScrollView>
      <View style={styles.mainScreen}>
        <TouchableOpacity
          style={styles.sideMenuButton}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            source={require('../assets/menu.png')}
            style={styles.sideMenuIcon}
          />
        </TouchableOpacity>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <LinearGradient
          colors={['#3a42e1', '#620c90']}
          useAngle={true}
          angle={135}
          style={[styles.gradientsblueMoonWrapper, styles.rectanglePosition]}
        />
        <ChartCard />
        <Text style={[styles.activity]}>Activity</Text>
        <CardWithIconsAndText />
        <Text style={[styles.CompleteVerificationChartCard]}>
          Complete Verification
        </Text>
        <CompleteVerificationChartCard />
        <Text style={[styles.PromoCard]}>News and promo</Text>
        <PromoCard />
        <View style={styles.rectangle1} />
        <Image source={require('../assets/dp.png')} style={styles.image} />
        <Text style={[styles.Nametext, styles.textPosition]}>Amey S</Text>
        <Text style={[styles.AccountNumber, styles.textPosition]}>
          **********4679
        </Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <View style={styles.logoutButtonContainer}>
            <Text style={styles.logoutButtonText}>Logout</Text>
            <LogoutScreen onLogout={handleLogout} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    height: 1565,
    overflow: 'hidden',
    flexDirection: 'column',
  },
  textPosition: {
    textAlign: 'center',
    left: 47,
    position: 'absolute',
  },
  gradientsblueMoonWrapper: {
    top: 0,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    height: 324,
    overflow: 'hidden',
  },
  Nametext: {
    top: 85,
    fontSize: 40,
    color: '#FFFFFF',
    fontFamily: 'YourFontName-Bold',
    fontWeight: '700',
    textAlign: 'center',
    left: 47,
  },
  textAlign: {
    top: 200,
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'YourFontName-Bold',
    fontWeight: '700',
    textAlign: 'center',
    left: 36,
  },
  AccountNumber: {
    top: 145,
    fontSize: 20,
    lineHeight: 25,
    fontFamily: 'YourFontName-Regular',
    color: '#E1E1E1',
    textAlign: 'center',
    left: 47,
  },
  image: {
    position: 'absolute',
    top: 80,
    right: 0,
    left: 250,
    bottom: 0,
    width: 150,
    height: 150,
  },
  logoutButton: {
    position: 'absolute',
    top: 15,
    right: 20,
    backgroundColor: '#f6f6fb',
    borderRadius: 30,
  },
  logoutButtonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  logoutButtonText: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '700',
    fontFamily: 'YourFontName-Bold',
  },
  sideMenuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    padding: 10,
  },
  sideMenuIcon: {
    width: 25,
    height: 25,
    tintColor: '#FFFFFF',
  },
  activity: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '700',
    fontFamily: 'YourFontName-Bold',
    textAlign: 'center',
    right: 135,
    bottom: 50,
  },
  CompleteVerificationChartCard: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '700',
    fontFamily: 'YourFontName-Bold',
    textAlign: 'right',
    right: 170,
    top: 10,
  },
  PromoCard: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '700',
    fontFamily: 'YourFontName-Bold',
    textAlign: 'right',
    right: 210,
    top: 480,
  },
});

export default HomeScreen;
