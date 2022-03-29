import React from 'react';
import {View, Text, Image, ScrollView, StatusBar} from 'react-native';
import y from '../style';
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.uf1, y.bgColor('#fff')]}>
    <Header title={'认证中心'} style={[y.bgColor('#FAFAFA')]}/>
    <ScrollView>
      <View style={[y.uac, y.bgColor('#fff'), y.pt(17), y.pb(20), y.uja, y.bb(8), y.bdColor('#F5F8FA')]}>
        <View style={[y.w(140), y.h(200), y.ujc, y.uac, y.bgColor('#F5F8FA'), y.radiusA(5)]}>
          <Image style={[y.w(123), y.h(180)]} source={require('../images/安全账号/mancertification.png')}/>
        </View>
        <View style={[y.bgColor('#F1628D'), y.w(115), y.h(25), y.mt(20), y.ujc, y.uac, y.radiusA(13)]}>
          <Text style={[y.color('#fff'), y.fSize(12)]}>真人认证</Text>
        </View>
      </View>
      <View style={[y.udr, y.uac, y.mt(20), y.plr(18), y.bgColor('#fff')]}>
        <View style={[y.h(1), y.bgColor('#CCCCCC'), y.uf1]}/>
        <Text style={[y.fSize(14), y.color('#333'), y.mlr(28)]}>认证特权</Text>
        <View style={[y.h(1), y.bgColor('#CCCCCC'), y.uf1]}/>
      </View>
      <View style={[y.udr, y.uac, y.uja, y.mt(23), y.mb(10), y.radiusA(5),  y.pt(13), y.pb(40)]}>
        <View>
          <Image style={[y.size(50), y.mb(10)]} source={require('../images/安全账号/rz001.png')}/>
          <Text style={[y.fSize(12), y.color('#676767')]}>真人标识</Text>
        </View>
        <View>
          <Image style={[y.size(50), y.mb(10)]} source={require('../images/安全账号/rz001.png')}/>
          <Text style={[y.fSize(12), y.color('#676767')]}>真人标识</Text>
        </View>
        <View>
          <Image style={[y.size(50), y.mb(10)]} source={require('../images/安全账号/rz001.png')}/>
          <Text style={[y.fSize(12), y.color('#676767')]}>真人标识</Text>
        </View>
      </View>
    </ScrollView>
  </View>
)
