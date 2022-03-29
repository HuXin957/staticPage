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
    <Header title={'申请邀请码'}/>
    <View style={[y.ptb(12), y.bgColor('#FEF2DA'), y.uac]}>
      <Text style={[y.color('#EB9E2A'), y.fSize(12)]}>填写完整信息将提高邀请码获取速度</Text>
    </View>
    <View style={[y.bgColor('#fff'), y.bb(1), y.bdColor('#F5F8FA'), y.ptb(19), y.plr(16), y.udr, y.ujb]}>
      <Text style={[y.color('#333'), y.fSize(14)]}>所在地</Text>
      <Text style={[y.color('#ccc'), y.fSize(14)]}>所在地</Text>
    </View>
    <View style={[y.bgColor('#fff'), y.bb(1), y.bdColor('#F5F8FA'), y.ptb(19), y.plr(16), y.udr, y.ujb]}>
      <Text style={[y.color('#333'), y.fSize(14)]}>信息渠道</Text>
      <Text style={[y.color('#ccc'), y.fSize(14)]}>您从哪里知道白雪佳人</Text>
    </View>
    <View style={[y.bgColor('#fff'), y.bb(1), y.bdColor('#F5F8FA'), y.ptb(19), y.plr(16), y.udr, y.ujb]}>
      <Text style={[y.color('#333'), y.fSize(14)]}>微信号</Text>
      <Text style={[y.color('#ccc'), y.fSize(14)]}>您的微信号</Text>
    </View>
    <View style={[y.bgColor('#fff'), y.bt(7), y.bdColor('#F5F8FA'), y.ptb(19), y.plr(16), y.udr, y.ujb]}>
      <Text style={[y.color('#333'), y.fSize(14)]}>推荐人</Text>
      <Text style={[y.color('#ccc'), y.fSize(14)]}>选填</Text>
    </View>
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#FFC1A3', '#F1628D']}
      style={[y.radiusA(20), y.mlr(30), y.h(45), y.mt(30), y.uac, y.ujc]}
    >
      <Text style={[y.color('#fff'), y.fSize(15)]}>继续完善</Text>
    </LinearGradient>
  </View>
)
