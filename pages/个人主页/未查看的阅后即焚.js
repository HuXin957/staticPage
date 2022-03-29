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
  <View style={[y.uf1, y.bgColor('#333'), y.uac, y.ujc, y.upr]}>
    <View style={[y.size(60), y.ujc, y.uac, y.bgColor("#fff"), y.radiusA(30)]}>
      <Image style={[y.w(32), y.h(39)]} source={require('../images/个人主页/afrreading.png')}/>
    </View>
    <Text style={[y.fSize(18), y.color('#fff'), y.mt(16), y.fWeight('bold')]}>阅后即焚照片</Text>
    <Text style={[y.fSize(13), y.color('#fff'), y.mt(12)]}>松手即焚毁</Text>
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#FFC1A3', '#F1628D']}
      style={[y.radiusA(20), y.h(40), y.w(150), y.mt(30), y.uac, y.ujc]}
    >
      <Text style={[y.fSize(15), y.color('#fff')]}>按住屏幕查看</Text>
    </LinearGradient>
    <Text style={[y.fSize(15), y.color('#fff'), y.upa, y.bottom(34)]}>31/44</Text>
  </View>
)
