import React from 'react';
import {View, Text, Image, ScrollView, ImageBackground, Modal} from 'react-native';
import y from '../style';
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <Modal
    visible={true}
    transparent
  >
    <View style={[y.bgColor('rgba(0,0,0,.5)'), y.uje, y.uf1]}>
      <View style={[y.bgColor('#fff'), y.pt(17), y.pb(10), y.radiusTL(10), y.radiusTR(10)]}>
        <Text style={[y.color('#333'), y.fSize(14), y.uSelfCenter]}>真人认证</Text>
        <Image style={[y.size(56), y.uSelfCenter, y.mt(23)]} source={require('../images/个人主页/verification.png')}/>
        <Text style={[y.color('#787878'), y.fSize(8), y.mt(16), y.uSelfCenter]}>为了保证交友的真实性，真人认证之后才能继续聊天哦</Text>
        <View style={[y.udr, y.ujb, y.mt(28), y.mlr(34)]}>
          <View style={[y.uac]}>
            <View style={[y.ba(1), y.mb(3), y.bdColor('#F40909'), y.radiusA(14), y.h(28), y.ujc, y.uac, y.w(101)]}>
              <Text style={[y.color('#EB4E7E'), y.fSize(12)]}>开通会员</Text>
            </View>
            <Text style={[y.color('#989898'), y.fSize(8)]}>会员免费解锁</Text>
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#FFC1A3', '#F1628D']}
            style={[y.radiusA(14), y.h(28), y.w(176), y.uac, y.ujc]}
          >
            <Text style={[y.color('#fff'), y.fSize(12)]}>真人认证</Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  </Modal>
)
