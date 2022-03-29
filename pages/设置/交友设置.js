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

export default () => (
  <View style={[y.bgColor('#F5F8FA'), y.uf1]}>
    <Header title={'交友设置'}/>

    <View style={[y.udr, y.uac, y.plr(16), y.ujb, y.mt(7), y.ptb(14), y.bgColor('#fff')]}>
      <Text style={[y.color('#333'), y.fSize(14)]}>同性用户可以私聊我</Text>
      <View style={[y.h(22), y.w(43), y.bgColor('#eee'), y.radiusA(11), y.ujc]}>
        <View style={[y.bgColor('#fff'), y.size(18), y.radiusA(9), y.ml(3)]}/>
      </View>
    </View>

    <View style={[y.udr, y.uac, y.plr(16), y.ujb, y.mt(7), y.ptb(14), y.bgColor('#fff')]}>
      <Text style={[y.color('#333'), y.fSize(14)]}>同性用户可查看我的个人资料</Text>
      <View style={[y.h(22), y.w(43), y.bgColor('#38CC76'), y.radiusA(11), y.ujc, y.uae]}>
        <View style={[y.bgColor('#fff'), y.size(18), y.radiusA(9), y.mr(3)]}/>
      </View>
    </View>

  </View>
)
