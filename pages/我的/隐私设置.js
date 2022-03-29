import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  ImageBackground
} from 'react-native';
import y from '../style';
import {Header} from "../components";

export default () => {
  StatusBar.setTranslucent(false)
  return (
    <View style={[y.bgColor('#F5F8FA'), y.uf1]}>
      <Header title={'隐私设置'}/>
      <View style={[y.plr(17), y.ptb(12)]}>
        <Text style={[y.color('#999'), y.fSize(12)]}>隐身</Text>
      </View>
      <View style={[y.udr, y.uac, y.plr(16),y.ujb, y.ptb(14), y.bgColor('#fff')]}>
        <Text style={[y.color('#333'), y.fSize(14)]}>在首页列表隐藏我</Text>
        <View style={[y.h(22), y.w(43),  y.bgColor('#eee'),y.radiusA(11),y.ujc]}>
          <View style={[y.bgColor('#fff'),y.size(18),y.radiusA(9),y.ml(3)]}/>
        </View>
      </View>
      <View style={[y.plr(17), y.ptb(12)]}>
        <Text style={[y.color('#999'), y.fSize(12)]}>隐藏距离和在线时间</Text>
      </View>
      <View style={[y.udr, y.uac, y.plr(16),y.ujb, y.ptb(14), y.bgColor('#fff')]}>
        <Text style={[y.color('#333'), y.fSize(14)]}>对他人隐藏我的距离</Text>
        <View style={[y.h(22), y.w(43),  y.bgColor('#38CC76'),y.radiusA(11),y.ujc,y.uae]}>
          <View style={[y.bgColor('#fff'),y.size(18),y.radiusA(9),y.mr(3)]}/>
        </View>
      </View>
      <View style={[y.udr, y.uac, y.plr(16),y.ujb, y.ptb(14), y.bgColor('#fff')]}>
        <Text style={[y.color('#333'), y.fSize(14)]}>对他人隐藏我的在线时间</Text>
        <View style={[y.h(22), y.w(43),  y.bgColor('#38CC76'),y.radiusA(11),y.ujc,y.uae]}>
          <View style={[y.bgColor('#fff'),y.size(18),y.radiusA(9),y.mr(3)]}/>
        </View>
      </View>
      <View style={[y.plr(17), y.ptb(12)]}>
        <Text style={[y.color('#999'), y.fSize(12)]}>社交账号</Text>
      </View>
      <View style={[y.udr, y.uac, y.plr(16),y.ujb, y.ptb(14), y.bgColor('#fff')]}>
        <Text style={[y.color('#333'), y.fSize(14)]}>在首页列表隐藏我</Text>
        <View style={[y.h(22), y.w(43),  y.bgColor('#eee'),y.radiusA(11),y.ujc]}>
          <View style={[y.bgColor('#fff'),y.size(18),y.radiusA(9),y.ml(3)]}/>
        </View>
      </View>
    </View>
  )
}
