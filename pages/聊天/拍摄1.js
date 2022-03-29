import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  StatusBar,
  Modal
} from 'react-native';
import y from '../style'
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.bgColor('#7D7D7D'), y.uf1, y.ujb]}>
    <View style={[y.bgColor('#FF0000'), y.plr(2), y.mt(42), y.uSelfCenter]}>
      <Text style={[y.color('#fff'), y.fSize(14)]}>00:00:00</Text>
    </View>
    <View style={[y.mb(113), y.uSelfCenter, y.ujc, y.uac, y.ba(5), y.size(74), y.radiusA(37), y.bdColor('#fff')]}>
      <View style={[y.size(27), y.radiusA(5), y.bgColor('#B70505')]}/>
    </View>
  </View>
)
