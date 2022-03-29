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

export default () => {
  StatusBar.setTranslucent(true)
  StatusBar.setBackgroundColor(0, 0, 0, 0)
  return (
    <ImageBackground
      style={[y.h100, y.w100]}
      source={require('../images/登录注册切图/regbg.png')}>
      <Text style={[y.color('#222'), y.fSize(13), y.mt(40), y.uSelfEnd, y.mr(30)]}>密码登录</Text>
      <View style={[y.uac, y.mt(50)]}>
        <Image style={[y.bgColor('#333'), y.size(70), y.radiusA(10), y.mb(20)]}/>
        <Text style={[y.color('#333'), y.fSize(17)]}>欢迎使用白雪佳人</Text>
      </View>
      <View style={[y.plr(30), y.mt(87)]}>
        <Text style={[y.color('#333'), y.fSize(20), y.fWeight('bold')]}>快捷登录</Text>
        <View style={[y.bb(1), y.bdColor('#CCC'), y.mt(20),y.pb(10), y.udr, y.uac]}>
          <Text style={[y.color('#333'), y.fSize(15), y.fWeight('bold')]}>+86</Text>
          <Image style={[y.h(6), y.w(9), y.ml(11)]} source={require('../images/登录注册切图/xx.png')}/>
          <TextInput
            style={[y.ml(25), y.uf1, y.pa(0)]}
            placeholder={'请输入手机号码'}
            placeholderTextColor={'#ccc'}
          />
        </View>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#FFC1A3', '#F1628D']}
        style={[y.mlr(30), y.mt(50), y.radiusA(23), y.h(45), y.uac, y.ujc]}
      >
        <Text style={[y.color('#fff'), y.fSize(17)]}>获取验证码</Text>
      </LinearGradient>
    </ImageBackground>
  )
}
