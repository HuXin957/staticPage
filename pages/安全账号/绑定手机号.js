import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import y from '../style'
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.uf1]}>
    <Header title={'绑定手机号'}/>
    <View style={[y.bgColor('#F5F8FA'), y.plr(20)]}>
      <Image source={require('../images/安全账号/iphone.png')} style={[y.h(42),y.w(32),y.uSelfCenter,y.mt(15)]}/>
      <Text style={[y.color('#6E6B6B'),y.fSize(10),y.uSelfCenter,y.mt(9)]}>绑定手机号，让你的账号更安全</Text>
      <View style={[y.udr, y.mt(30), y.bb(.5), y.bdColor('#ccc'), y.pb(8)]}>
        <Text style={[y.color('#333'), y.fSize(12), y.minw(60)]}>手机号码</Text>
        <Text style={[y.fSize(12), y.color('#ccc')]}>请输入手机号码</Text>
      </View>
      <View style={[y.udr, y.mt(30), y.bb(.5), y.bdColor('#ccc'), y.pb(8)]}>
        <Text style={[y.color('#333'), y.fSize(12), y.minw(60)]}>手机号码</Text>
        <Text style={[y.fSize(12), y.color('#ccc')]}>请输入手机号码</Text>
      </View>
      <View style={[y.udr, y.mt(30), y.bb(.5), y.bdColor('#ccc'), y.pb(8)]}>
        <Text style={[y.color('#333'), y.fSize(12), y.minw(60)]}>验证码</Text>
        <Text style={[y.fSize(12), y.color('#ccc'), y.uf1]}>请输入手机号码</Text>
        <View style={[y.h(24), y.radiusA(12), y.plr(8), y.ujc, y.ba(1), y.bdColor('#EB4E7E')]}>
          <Text style={[y.color('#EB4E7E'), y.fSize(12)]}>获取验证码</Text>
        </View>
      </View>
    </View>
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#FFC1A3', '#F1628D']}
      style={[y.mt(75), y.mlr(30), y.radiusA(23), y.h(45), y.uac, y.ujc]}
    >
      <Text style={[y.color('#fff'), y.fSize(17)]}>确定</Text>
    </LinearGradient>
  </View>
)
