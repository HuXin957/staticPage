import React from 'react';
import {View, Text, Image, ScrollView, StatusBar} from 'react-native';
import y from '../style';
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";


export default () => (
  <View style={[y.uf1, y.bgColor('#f0f2f5')]}>
    <Header title={'真人认证'}/>
    <View style={[y.udr, y.uac, y.plr(54), y.mt(27)]}>
      <Text style={[y.fSize(8), y.color('#797979'), y.fWeight('bold')]}>1.上传照片</Text>
      <Text style={[y.mlr(15)]}>··········</Text>
      <Text style={[y.fSize(8), y.color('#797979'), y.fWeight('bold')]}>2.面容识别</Text>
      <Text style={[y.mlr(15)]}>··········</Text>
      <Text style={[y.fSize(8), y.color('#F1628D'), y.fWeight('bold')]}>3.完成认证</Text>
    </View>

    <View style={[y.bgColor('#fff'), y.ujc, y.uac, y.size(142),y.radiusA(71), y.uSelfCenter, y.mt(54)]}>
      <Image style={[y.w(71),y.h(56)]} source={require('../images/个人主页/successful.png')}/>
      <Text style={[y.fSize(17),y.color('#707070'),y.mt(4)]}>认证成功</Text>
    </View>
    <Text style={[y.mlr(65),y.fSize(8),y.color('#707070'),y.utxc,y.mt(30)]}>
      恭喜你！面容识别与你提供的照片认证成功
    </Text>
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#FFC1A3', '#F1628D']}
      style={[y.mt(117), y.radiusA(23), y.h(45),y.mlr(30), y.uac, y.ujc]}
    >
      <Text style={[y.color('#fff'), y.fSize(17)]}>重新认证</Text>
    </LinearGradient>
  </View>
)
