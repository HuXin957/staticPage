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
  <View style={[y.uf1]}>
    <View style={[y.bgColor('#000'), y.ujc, y.uac, y.h(76)]}>
      <Text style={[y.color('#fff'), y.fSize(14)]}>00:00:00</Text>
    </View>

    <View style={[y.uf1, y.bgColor('#7D7D7D')]}>

    </View>
    <View style={[y.bgColor('#000'), y.udr, y.ujb, y.uac, y.plr(40), y.pt(61), y.pb(39)]}>
      <Text style={[y.fSize(14), y.color('#fff')]}>取消</Text>
      <View style={[y.uSelfCenter, y.ujc, y.uac, y.ba(5), y.size(74), y.radiusA(37), y.bdColor('#fff')]}>
        <View style={[y.size(60), y.radiusA(30), y.bgColor('#B70505')]}/>
      </View>
      <View style={[y.size(50), y.radiusA(25), y.ujc, y.uac, y.bgColor('#1D1D1D')]}>
        <Image style={[y.size(27)]} source={require('../images/聊天/fm001.png')}/>
      </View>
    </View>
  </View>
)
