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
    <Header title={'设置阅后即焚'}>
      <Text style={[y.color('#737373'), y.fSize(8), y.upa, y.right(24)]}>取消选择</Text>
    </Header>
    <ScrollView style={[y.plr(16)]}>
      <View style={[y.udr, y.uWrap, y.ujb]}>
        <ImageBackground style={[y.bgColor('#333'), y.h(128), y.w(110), y.upr, y.mt(6)]}>
          <Image
            style={[y.size(18), y.upa, y.right(5), y.top(5)]}
            source={require('../images/设置切图/select.png')}/>
        </ImageBackground>
        <ImageBackground style={[y.bgColor('#333'), y.h(128), y.w(110), y.upr, y.mt(6)]}>
          <Image
            style={[y.size(18), y.upa, y.right(5), y.top(5)]}
            source={require('../images/设置切图/select.png')}/>
        </ImageBackground>
        <ImageBackground style={[y.bgColor('#333'), y.h(128), y.w(110), y.upr, y.mt(6)]}>
          <Image
            style={[y.size(18), y.upa, y.right(5), y.top(5)]}
            source={require('../images/设置切图/select.png')}/>
        </ImageBackground>
      </View>
    </ScrollView>
    <View style={[y.udr, y.uac, y.ujb, y.bgColor('#eee'), y.pl(24), y.pr(20), y.ptb(15)]}>
      <Text style={[y.color('#737373'), y.fSize(11)]}>阅后即焚（查看2秒后焚毁）</Text>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#FFC1A3', '#F1628D']}
        style={[y.w(92), y.radiusA(20), y.h(30), y.uac, y.ujc]}
      >
        <Text style={[y.color('#fff'), y.fSize(15)]}>(3)确认</Text>
      </LinearGradient>
    </View>
  </View>
)
