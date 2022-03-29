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
      <View style={[y.bgColor('#fff'), y.pt(45), y.pb(35), y.radiusTL(10), y.radiusTR(10)]}>
        <Text style={[y.fSize(14), y.color('#333'), y.uSelfCenter]}>您的余额不足哦~，请完成充值后再支付！</Text>
        <View style={[y.udr, y.uac, y.uja, y.mt(47)]}>
          <View style={[y.ba(1), y.bdColor('#CECBCB'), y.radiusA(13), y.ujc, y.uac, y.h(27), y.w(80)]}>
            <Text style={[y.color('#757474'), y.fSize(11)]}>取消</Text>
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#FFC1A3', '#F1628D']}
            style={[y.uac, y.ujc, y.w(65), y.h(28), y.radiusA(14)]}>
            <Text style={[y.color('#fff'), y.fSize(12)]}>去充值</Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  </Modal>
)
