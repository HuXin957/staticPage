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

export default () => (
  <View style={[y.uf1, y.bgColor('#fff')]}>
    <View style={[y.upr, y.udr, y.ujc, y.uac, y.pb(20), y.pt(10)]}>
      <View style={[y.mr(28), y.uac]}>
        <Text style={[y.fSize(18), y.color('#333'), y.fWeight('bold')]}>私聊</Text>
        <View style={[y.h(3), y.w(10), y.mt(4), y.bgColor('#F1628D'), y.radiusA(1)]}/>
      </View>
      <Text style={[y.color('#bbb'), y.fSize(15), y.fWeight('bold')]}>通知</Text>
      <Image style={[y.upa, y.right(15), y.size(19)]} source={require('../images/我的切图/set.png')}/>
    </View>
    <View style={[y.uac,y.upr]}>
      <Image
        resizeMode={'contain'}
        style={[y.h(291), y.w(238)]} source={require('../images/消息切图/defpoto.png')}/>
      <Text style={[y.color('#666'), y.fSize(9),y.upa,y.bottom(10)]}>一直会等到您出现！</Text>
    </View>
  </View>
)
