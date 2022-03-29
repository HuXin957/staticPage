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
    <Header title={'我的邀请'}/>
    <ScrollView>
      <View style={[y.mt(8), y.plr(28), y.udr, y.uac]}>
        <Image style={[y.size(53), y.radiusA(10), y.bgColor('#333')]}/>
        <View style={[y.ml(13), y.uf1]}>
          <Text style={[y.fSize(20), y.color('#333'), y.fWeight('bold')]}>晴儿</Text>
          <View style={[y.udr, y.uac]}>
            <Text style={[y.fSize(12), y.color('#333')]}>邀请码：26866888</Text>
            <View style={[y.bdColor('#9A9898'), y.ba(1), y.ujc, y.uac, y.ml(11), y.plr(5), y.radiusA(7), y.h(14)]}>
              <Text style={[y.color('#666'), y.fSize(9)]}>复制</Text>
            </View>
          </View>
        </View>
        <Image
          style={[y.size(24)]}
          source={require('../images/设置切图/qrcode.png')}/>
      </View>
      <ImageBackground
        style={[y.h(189), y.mt(11), y.upr]}
        source={require('../images/设置切图/member.png')}>
        <View
          style={[y.ba(1), y.bdColor('#B0A79F'), y.upa, y.right(40), y.top(27), y.radiusA(8), y.h(16), y.w(41), y.ujc, y.uac]}>
          <Text style={[y.color('#9C9791'), y.fSize(9)]}>提款</Text>
        </View>
        <View style={[y.udr, y.uac, y.upa, y.bottom(80), y.ujb, y.w100, y.pl(43), y.pr(26)]}>
          <View style={[y.uac]}>
            <Text style={[y.color('#F8DBB5'), y.fSize(11)]}>推广用户(人）</Text>
            <Text style={[y.color('#E48C17'), y.fSize(12), y.mt(10)]}>10</Text>
          </View>
          <View style={[y.uac]}>
            <Text style={[y.color('#F8DBB5'), y.fSize(11)]}>总收益(元)</Text>
            <Text style={[y.color('#E48C17'), y.fSize(12), y.mt(10)]}>10</Text>
          </View>
          <View style={[y.uac]}>
            <Text style={[y.color('#F8DBB5'), y.fSize(11)]}>可提现收益(元）</Text>
            <Text style={[y.color('#E48C17'), y.fSize(12), y.mt(10)]}>500.00</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={[y.mt(15), y.bgColor('#fff'),y.plr(10),y.pt(9),y.pb(4), y.radiusA(5), y.udr, y.uWrap]}>
        <View style={[y.wRatio(50),y.ujc,y.uac,y.pt(9),y.pb(15),y.bb(1),y.br(1),y.bdColor('#E0E9EF')]}>
          <Text style={[y.color('#666'),y.fSize(9)]}>一级用户（个）</Text>
        </View>
        <View style={[y.wRatio(50),y.ujc,y.uac,y.bb(1),y.bdColor('#E0E9EF')]}>
          <Text style={[y.color('#666'),y.fSize(9)]}>二级用户（个）</Text>
        </View>
        <View style={[y.wRatio(50),y.ptb(25),y.ujc,y.uac,y.bb(1),y.br(1),y.bdColor('#E0E9EF')]}>
          <Text style={[y.color('#D78518'),y.fSize(9)]}>10</Text>
        </View>
        <View style={[y.wRatio(50),y.ptb(25),y.ujc,y.uac,y.bb(1),y.bdColor('#E0E9EF')]}>
          <Text style={[y.color('#D78518'),y.fSize(9)]}>3</Text>
        </View>
        <View style={[y.wRatio(50),y.ujc,y.uac,y.ptb(15),y.bb(1),y.br(1),y.bdColor('#E0E9EF')]}>
          <Text style={[y.color('#666'),y.fSize(9)]}>一级用户（个）</Text>
        </View>
        <View style={[y.wRatio(50),y.ujc,y.uac,y.bb(1),y.bdColor('#E0E9EF')]}>
          <Text style={[y.color('#666'),y.fSize(9)]}>二级用户（个）</Text>
        </View>
        <View style={[y.wRatio(50),y.ptb(25),y.ujc,y.uac,y.br(1),y.bdColor('#E0E9EF')]}>
          <Text style={[y.color('#D78518'),y.fSize(9)]}>500.00</Text>
        </View>
        <View style={[y.wRatio(50),y.ptb(25),y.ujc,y.uac,]}>
          <Text style={[y.color('#D78518'),y.fSize(9)]}>200.00</Text>
        </View>
      </View>
    </ScrollView>
  </View>
)
