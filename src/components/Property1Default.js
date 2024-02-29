import React, {useMemo} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import BarsStatusBariPhonexTime from './BarsStatusBariPhonexTime';
import {Color} from '../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) {
    return;
  }
  return {[key]: value === 'unset' ? undefined : value};
};
const Property1Default = ({
  cap,
  wifi,
  cellularConnection,
  property1DefaultPosition,
  property1DefaultMarginLeft,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultRight,
  property1DefaultBottom,
  batteryWidth,
  batteryHeight,
  borderRight,
  borderBorderColor,
  capacityRight,
  capacityBackgroundColor,
  timeColor,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue('position', property1DefaultPosition),
      ...getStyleValue('marginLeft', property1DefaultMarginLeft),
      ...getStyleValue('top', property1DefaultTop),
      ...getStyleValue('left', property1DefaultLeft),
      ...getStyleValue('width', property1DefaultWidth),
      ...getStyleValue('height', property1DefaultHeight),
      ...getStyleValue('right', property1DefaultRight),
      ...getStyleValue('bottom', property1DefaultBottom),
    };
  }, [
    property1DefaultPosition,
    property1DefaultMarginLeft,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultRight,
    property1DefaultBottom,
  ]);

  const batteryStyle = useMemo(() => {
    return {
      ...getStyleValue('width', batteryWidth),
      ...getStyleValue('height', batteryHeight),
    };
  }, [batteryWidth, batteryHeight]);

  const borderStyle = useMemo(() => {
    return {
      ...getStyleValue('right', borderRight),
      ...getStyleValue('borderColor', borderBorderColor),
    };
  }, [borderRight, borderBorderColor]);

  const capacityStyle = useMemo(() => {
    return {
      ...getStyleValue('right', capacityRight),
      ...getStyleValue('backgroundColor', capacityBackgroundColor),
    };
  }, [capacityRight, capacityBackgroundColor]);

  const timeStyle = useMemo(() => {
    return {
      ...getStyleValue('color', timeColor),
    };
  }, [timeColor]);

  return (
    <View style={[styles.property1default, property1DefaultStyle]}>
      <View style={styles.group}>
        <View style={[styles.battery, styles.batteryPosition, batteryStyle]}>
          <View style={[styles.border, borderStyle]} />
          <Image
            style={[styles.capIcon, styles.batteryPosition]}
            resizeMode="cover"
            source={cap}
          />
          <View style={[styles.capacity, capacityStyle]} />
        </View>
        <Image style={styles.wifiIcon} resizeMode="cover" source={wifi} />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={cellularConnection}
        />
        <BarsStatusBariPhonexTime
          time="9:41"
          timeHeight={21}
          timeWidth={54}
          timeTop={0}
          timeRight="unset"
          timeBottom="unset"
          timeLeft={0}
          timeBackgroundColor="unset"
          propFontWeight="600"
          propFontFamily="Inter-SemiBold"
          propColor="#1c1939"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  batteryPosition: {
    right: 0,
    position: 'absolute',
  },
  border: {
    top: 0,
    right: 3,
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: Color.pURPLEBLACK,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    position: 'absolute',
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    top: 2,
    right: 5,
    borderRadius: 1,
    backgroundColor: Color.pURPLEBLACK,
    width: 18,
    height: 7,
    position: 'absolute',
  },
  battery: {
    top: 10,
    width: 25,
    height: 12,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  group: {
    height: '100%',
    width: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    overflow: 'hidden',
    position: 'absolute',
  },
  property1default: {
    width: 340,
    height: 22,
  },
});

export default Property1Default;
