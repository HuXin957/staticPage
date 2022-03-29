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
    <View style={[y.bgColor('rgba(0,0,0,.5)'), y.uje, y.uf1]}>
      <View style={[y.bgColor('#fff'), y.radiusTL(10), y.radiusTR(10)]}>
        <View style={[y.plr(20), y.bb(1), y.bdColor('#F1EFEF'),  y.uac,y.ujc, y.pt(16), y.pb(11)]}>
          <Text style={[y.color('#494949'), y.fSize(12)]}>申请查看</Text>
        </View>
        <View style={[y.udr,y.ujc,y.uac, y.mt(35)]}>
          <Image style={[y.size(15),y.mr(3)]} source={require('../images/个人主页/lock1.png')}/>
          <Text style={[y.fSize(14), y.color('#333')]}>申请查看Ta限制，需发一张照片给Ta</Text>
        </View>
        <Text style={[y.fSize(10), y.color('#787878'), y.uSelfCenter, y.mt(9)]}>（照片在阅读6秒后自动焚毁）</Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#FFC1A3', '#F1628D']}
          style={[y.uac, y.ujc, y.w(180), y.h(28), y.mtb(31),y.uSelfCenter,y.radiusA(14)]}>
          <Text style={[y.color('#fff'), y.fSize(12)]}>选择一张照片发给Ta</Text>
        </LinearGradient>
      </View>
    </View>
  </Modal>
)
