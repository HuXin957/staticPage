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
    <View style={[y.bgColor('rgba(0,0,0,.5)'), y.ujc, y.uac, y.uf1]}>
      <View style={[y.bgColor('#fff'), y.w(300), y.radiusA(10), y.upr]}>
        <Image style={[y.size(11), y.upa, y.right(19), y.top(13)]} source={require('../images/个人主页/off11.png')}/>
        <Text style={[y.fSize(17), y.color('#333'), y.uSelfCenter, y.mt(21)]}>选择支付方式</Text>
        <View style={[y.mlr(30), y.mt(32), y.udr, y.uac]}>
          <Image style={[y.size(20)]} source={require('../images/个人主页/wx.png')}/>
          <Text style={[y.fSize(15), y.color('#333'), y.uf1, y.ml(12)]}>微信支付</Text>
          <Image style={[y.size(18)]} source={require('../images/个人主页/notselected.png')}/>
        </View>
        <View style={[y.mlr(30), y.mt(22), y.udr, y.uac]}>
          <Image style={[y.size(20)]} source={require('../images/个人主页/zfb.png')}/>
          <Text style={[y.fSize(15), y.color('#333'), y.uf1, y.ml(12)]}>支付宝支付</Text>
          <Image style={[y.size(18)]} source={require('../images/个人主页/selected.png')}/>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#FFC1A3', '#F1628D']}
          style={[y.radiusA(20), y.h(40), y.w(207), y.mtb(36), y.uSelfCenter, y.uac, y.ujc, y.udr]}
        >
          <Text style={[y.color('#fff'), y.fSize(15)]}>支付168元</Text>
        </LinearGradient>
      </View>
    </View>
  </Modal>
)
