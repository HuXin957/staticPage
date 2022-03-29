import React from 'react';
import {View, Text, Image, ScrollView, StatusBar} from 'react-native';
import y from '../style';
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.uf1, y.bgColor('#f0f2f5')]}>
    <Header title={'认证中心'}/>
    <ScrollView>
      <View style={[y.udr, y.uac, y.pt(17), y.pb(20), y.uja, y.bb(8), y.bdColor('#F5F8FA')]}>
        <View style={[y.uac]}>
          <View style={[y.w(140), y.h(200), y.ujc, y.uac, y.bgColor('#fff'), y.radiusA(5)]}>
            <Image style={[y.w(123), y.h(180)]} source={require('../images/个人主页/realperson.png')}/>
          </View>
          <View style={[y.bgColor('#F1628D'), y.w(115), y.h(25), y.mt(20), y.ujc, y.uac, y.radiusA(13)]}>
            <Text style={[y.color('#fff'), y.fSize(12)]}>真人认证</Text>
          </View>
        </View>
        <View style={[y.uac]}>
          <View style={[y.w(140), y.h(200), y.ujc, y.uac, y.bgColor('#fff'), y.radiusA(5)]}>
            <Image style={[y.w(123), y.h(180)]} source={require('../images/个人主页/goddessck.png')}/>
          </View>
          <View style={[y.bgColor('#F1628D'), y.w(115), y.h(25), y.mt(20), y.ujc, y.uac, y.radiusA(13)]}>
            <Text style={[y.color('#fff'), y.fSize(12)]}>真人认证</Text>
          </View>
        </View>
      </View>
      <View style={[y.udr, y.uac, y.mt(20), y.plr(18)]}>
        <View style={[y.h(1), y.bgColor('#CCCCCC'), y.uf1]}/>
        <Text style={[y.fSize(14), y.color('#333'), y.mlr(28)]}>认证特权</Text>
        <View style={[y.h(1), y.bgColor('#CCCCCC'), y.uf1]}/>
      </View>
      <View style={[y.bgColor('#F5F8FA'),y.mlr(18),y.mt(23),y.mb(10), y.radiusA(5),y.pl(22), y.pt(13),y.pb(40)]}>
        <View style={[y.udr]}>
          <Image style={[y.size(17)]} source={require('../images/个人主页/real1.png')}/>
          <View style={[y.ml(6)]}>
            <Text style={[y.fSize(12), y.color('#F1628D')]}>真人认证</Text>
            <Text style={[y.fSize(9), y.color('#666'),y.mt(18),y.ptb(4)]}>
              1，真人标识
            </Text>
            <Text style={[y.fSize(9), y.color('#666'),y.ptb(4)]}>
              2，每日免费发布5条动态
            </Text>
            <Text style={[y.fSize(9), y.color('#666'),y.ptb(4)]}>
              3，解锁评论功能
            </Text>
            <Text style={[y.fSize(9), y.color('#666'),y.ptb(4)]}>
              4，每日免费解锁私聊5次
            </Text>
          </View>
        </View>
        <View style={[y.udr,y.mt(40)]}>
          <Image style={[y.size(17)]} source={require('../images/个人主页/goddess11.png')}/>
          <View style={[y.ml(6)]}>
            <Text style={[y.fSize(12), y.color('#F1628D')]}>女神认证</Text>
            <Text style={[y.fSize(9), y.color('#666'),y.mt(18),y.ptb(4)]}>
              1，真人标识
            </Text>
            <Text style={[y.fSize(9), y.color('#666'),y.ptb(4)]}>
              2，每日免费发布5条动态
            </Text>
            <Text style={[y.fSize(9), y.color('#666'),y.ptb(4)]}>
              3，解锁评论功能
            </Text>
            <Text style={[y.fSize(9), y.color('#666'),y.ptb(4)]}>
              4，每日免费解锁私聊5次
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
)
