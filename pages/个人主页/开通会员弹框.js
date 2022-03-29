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
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <Modal
    visible={true}
    transparent
  >
    <View style={[y.bgColor('rgba(0,0,0,.5)'), y.ujc, y.plr(10), y.uac, y.uf1]}>
      <View style={[y.bgColor('#fff'), y.w100, y.ujc, y.uac, y.radiusA(10)]}>
        <Image style={[y.mt(18), y.h(19), y.w(80)]} source={require('../images/个人主页/viptit.png')}/>
        <Text style={[y.fSize(9), y.color('#553F3F'), y.mtb(47)]}>成为会员即可免费解锁私聊</Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#FFC1A3', '#F1628D']}
          style={[y.radiusA(19), y.w(315), y.h(37), y.uac, y.ujc]}
        >
          <Text style={[y.color('#fff'), y.fSize(11)]}>成为会员 (免费解锁）</Text>
        </LinearGradient>
        <View
          style={[y.ba(1), y.mt(11), y.mb(30), y.bdColor('#EB4E7E'), y.w(315), y.h(37), y.uac, y.ujc, y.radiusA(19)]}>
          <Text style={[y.color('#EB4E7E'), y.fSize(11)]}>解锁私聊 (消耗180桃花币)</Text>
        </View>
      </View>
      <View style={[y.uSelfCenter, y.ujc, y.uac, y.mt(6), y.size(32), y.radiusA(16), y.bgColor('#fff')]}>
        <Image style={[y.size(14)]} source={require('../images/个人主页/off11.png')}/>
      </View>
    </View>
  </Modal>
)
