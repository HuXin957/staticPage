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
import {Header} from "../components";
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.uf1, y.bgColor('#F5F8FA')]}>
    <Header title={'基本资料'}/>
    <ScrollView style={[y.plr(10)]}>
      <View style={[y.mt(25), y.udr, y.uac]}>
        <Image style={[y.h(13), y.w(15)]} source={require('../images/登录注册切图/hobby.png')}/>
        <Text style={[y.color('#000'), y.fSize(14), y.ml(3),]}>日常爱好</Text>
      </View>
      <View style={[y.bgColor('#fff'), y.mt(9), y.ujb, y.radiusA(3), y.udr, y.uWrap, y.plr(15), y.pb(12)]}>
        <Item title={'健康运动'}/>
        <Item title={'健康运动'}/>
        <Item title={'健康运动'}/>
        <Item title={'健康运动'}/>
        <Item title={'健康运动'}/>
        <Item title={'健康运动'}/>
        <Item title={'健康运动'}/>
        <Item title={'健康运动'}/>
        <Item title={'健康运动'}/>
      </View>
      <View style={[y.mt(25), y.udr, y.uac]}>
        <Image style={[y.h(13), y.w(15)]} source={require('../images/登录注册切图/friend.png')}/>
        <Text style={[y.color('#000'), y.fSize(14), y.ml(3),]}>喜欢的人</Text>
      </View>
      <View style={[y.bgColor('#fff'), y.mt(9), y.ujb, y.radiusA(3), y.udr, y.uWrap, y.plr(15), y.pb(12)]}>
        <Item title={'颜值高'}/>
        <Item title={'颜值高'}/>
        <Item title={'颜值高'}/>
        <Item title={'颜值高'}/>
        <Item title={'颜值高'}/>
        <Item title={'颜值高'}/>
        <Item title={'颜值高'}/>
        <Item title={'颜值高'}/>
        <Item title={'颜值高'}/>
      </View>
      <View style={[y.mt(25), y.udr, y.uac]}>
        <Image style={[y.h(13), y.w(15)]} source={require('../images/登录注册切图/friend.png')}/>
        <Text style={[y.color('#000'), y.fSize(14), y.ml(3),]}>个人介绍</Text>
      </View>
      <View style={[y.h(76),y.bgColor('#fff'), y.mt(9), y.ujb, y.radiusA(3), y.udr, y.uWrap, y.plr(15), y.ptb(8)]}>
        <Text style={[y.color('#A5A5A5'), y.fSize(10)]}>你不主动我们之间怎么有故事！</Text>
      </View>
    </ScrollView>
  </View>
)

const Item = ({title}) => (
  <View style={[y.w(85), y.h(28), y.ujc, y.uac, y.mt(14), y.ba(1), y.bdColor('#EEEEEE'), y.radiusA(3)]}>
    <Text style={[y.color('#525050'), y.fSize(13)]}>
      {title}
    </Text>
  </View>
)
