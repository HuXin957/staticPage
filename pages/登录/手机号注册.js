import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  StatusBar,
  TextInput
} from 'react-native';
import y from '../style'
import {Header, IconText, Item} from "../components";
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.uf1, y.bgColor('#fff')]}>
    <Image
      style={[y.h(19), y.w(11), y.ml(17), y.mt(17)]}
      source={require('../images/我的切图/back.png')}/>
    <View style={[y.plr(30), y.mt(38), y.uf1]}>
      <Text style={[y.color('#333'), y.fSize(20), y.fWeight('bold')]}>手机号注册</Text>
      <View style={[y.bb(1), y.bdColor('#CCC'), y.mt(50), y.pb(10), y.udr, y.uac]}>
        <View style={[y.w(70), y.udr, y.uac]}>
          <Text style={[y.color('#333'), y.fSize(15)]}>+86</Text>
          <Image style={[y.h(6), y.w(9), y.ml(11)]} source={require('../images/登录注册切图/xx.png')}/>
        </View>
        <TextInput
          style={[y.ml(10), y.uf1, y.pa(0)]}
          placeholder={'请输入手机号码'}
          placeholderTextColor={'#ccc'}
        />
        <Image
          resizeMode={'contain'}
          style={[y.size(12)]}
          source={require('../images/登录注册切图/xxx.png')}/>
      </View>
      <View style={[y.bb(1), y.bdColor('#CCC'), y.mt(30), y.pb(10), y.udr, y.uac]}>
        <Text style={[y.color('#333'), y.fSize(15), y.w(70)]}>验证码</Text>
        <TextInput
          style={[y.ml(10), y.uf1, y.pa(0)]}
          placeholder={'请输入验证码'}
          placeholderTextColor={'#ccc'}
        />
        <View style={[y.ba(1), y.bdColor('#EB4E7E'), y.h(26), y.plr(8), y.ujc, y.radiusA(18)]}>
          <Text style={[y.color('#EB4E7E'), y.fSize(12)]}>获取验证码</Text>
        </View>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#FFC1A3', '#F1628D']}
        style={[y.mt(50), y.radiusA(23), y.h(45), y.uac, y.ujc, y.opacity(.5)]}
      >
        <Text style={[y.color('#fff'), y.fSize(17)]}>立即注册</Text>
      </LinearGradient>
      <View style={[y.mt(17), y.plr(18), y.udr, y.uac]}>
        <Image
          style={[y.size(15)]}
          source={require('../images/登录注册切图/wxz.png')}/>
        <Text style={[y.color('#999'), y.fSize(12), y.ml(6)]}>注册代表你已经阅读并同意</Text>
        <Text style={[y.color('#5E89CD'), y.fSize(12)]}>《用户许可协议》</Text>
      </View>
    </View>
    <View style={[y.plr(30)]}>
      <View style={[y.udr, y.uac]}>
        <View style={[y.uf1, y.h(1), y.bgColor('#ccc')]}/>
        <Text style={[y.color('#ccc'), y.fSize(13), y.mlr(4)]}>其他方式</Text>
        <View style={[y.uf1, y.h(1), y.bgColor('#ccc')]}/>
      </View>
      <View style={[y.udr, y.uac, y.ujc,y.mtb(20)]}>
        <Image
          style={[y.size(40)]}
          source={require('../images/登录注册切图/wx.png')}/>
        <Image
          style={[y.size(40),y.ml(30)]}
          source={require('../images/登录注册切图/qq.png')}/>
      </View>
    </View>
  </View>
)
