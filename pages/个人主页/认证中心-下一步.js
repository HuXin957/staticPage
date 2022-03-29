import React from 'react';
import {View, Text, Image, ScrollView, StatusBar} from 'react-native';
import y from '../style';
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";


export default () => (
  <View style={[y.uf1, y.bgColor('#f0f2f5')]}>
    <Header title={'真人认证'}/>
    <View style={[y.udr, y.uac, y.plr(54), y.mt(27)]}>
      <Text style={[y.fSize(8), y.color('#F1628D'), y.fWeight('bold')]}>1.上传照片</Text>
      <Text style={[y.mlr(15)]}>··········</Text>
      <Text style={[y.fSize(8), y.color('#797979'), y.fWeight('bold')]}>2.面容识别</Text>
      <Text style={[y.mlr(15)]}>··········</Text>
      <Text style={[y.fSize(8), y.color('#797979'), y.fWeight('bold')]}>3.完成认证</Text>
    </View>
    <View style={[y.bgColor('#fff'), y.ujc, y.uac, y.h(200), y.w(162), y.uSelfCenter, y.mt(32)]}>
      <Image style={[y.w(34), y.h(24)]} source={require('../images/个人主页/uploadimg.png')}/>
      <Text style={[y.color('#707070'), y.fSize(9), y.mt(6)]}>点击上传照片</Text>
    </View>
    <Text style={[y.mlr(90),y.fSize(8),y.color('#707070'),y.utxc,y.mt(22)]}>
      请上传一张本人五官清晰的正脸照片，认证成功后照片将上传至相册。
    </Text>
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#FFC1A3', '#F1628D']}
      style={[y.mt(70), y.radiusA(23), y.h(45),y.mlr(30), y.uac, y.ujc]}
    >
      <Text style={[y.color('#fff'), y.fSize(17)]}>下一步</Text>
    </LinearGradient>
  </View>
)
