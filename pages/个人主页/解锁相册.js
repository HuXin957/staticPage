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
        <View style={[y.plr(20), y.bb(1), y.bdColor('#F1EFEF'), y.udr, y.uac, y.pt(16), y.pb(11)]}>
          <Image style={[y.size(17), y.mr(4)]} source={require('../images/个人主页/bbpic.png')}/>
          <Text style={[y.color('#494949'), y.fSize(12), y.uf1]}>解锁相册</Text>
          <Image style={[y.size(17), y.mr(3)]} source={require('../images/个人主页/chat/txbb.png')}/>
          <Text style={[y.color('#FFAE3E'), y.fSize(12)]}>50</Text>
        </View>
        <Text style={[y.fSize(14), y.color('#333'), y.uSelfCenter,y.mt(26)]}>使用VIP特权解锁Ta的相册</Text>
        <Text style={[y.fSize(10), y.color('#787878'), y.uSelfCenter,y.mt(10)]}>（您今天还有2次VIP特权机会）</Text>
        <View style={[y.udr, y.uac, y.uja, y.mtb(35)]}>
          <View style={[y.ba(1), y.bdColor('#EB4E7E'), y.radiusA(13), y.ujc, y.uac, y.h(27), y.w(97)]}>
            <Text style={[y.color('#EB4E7E'), y.fSize(11)]}>支付25桃花币</Text>
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#FFC1A3', '#F1628D']}
            style={[y.uac, y.ujc, y.w(180), y.h(28), y.radiusA(14)]}>
            <Text style={[y.color('#fff'), y.fSize(12)]}>使用一次VIP特权机会</Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  </Modal>
)
