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
          <Image style={[y.size(17), y.mr(4)]} source={require('../images/个人主页/bbxx.png')}/>
          <Text style={[y.color('#494949'), y.fSize(12), y.uf1]}>桃花币充值</Text>
          <Image style={[y.size(17), y.mr(3)]} source={require('../images/个人主页/chat/txbb.png')}/>
          <Text style={[y.color('#FFAE3E'), y.fSize(12)]}>50</Text>
        </View>
        <View style={[y.udr, y.uac, y.ujb, y.uWrap, y.ml(22), y.mr(19), y.mt(14)]}>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item isSelect/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </View>
        <View style={[y.plr(24)]}>
          <Text style={[y.color('#494949'), y.fSize(9)]}>选择支付方式</Text>
          <View style={[y.udr, y.uac, y.pt(9), y.ml(4)]}>
            <Image style={[y.size(17)]} source={require('../images/个人主页/wx.png')}/>
            <View style={[y.ml(6), y.bb(1), y.uf1, y.bdColor('#F1EFEF'), y.pb(7), y.udr, y.uac, y.ujb]}>
              <Text style={[y.fSize(11), y.color('#333')]}>微信支付</Text>
              <Image style={[y.size(14)]} source={require('../images/个人主页/notselected.png')}/>
            </View>
          </View>
          <View style={[y.udr, y.uac, y.pt(9), y.ml(4)]}>
            <Image style={[y.size(17)]} source={require('../images/个人主页/zfb.png')}/>
            <View style={[y.ml(6), y.uf1, y.pb(7), y.udr, y.uac, y.ujb]}>
              <Text style={[y.fSize(11), y.color('#333')]}>支付宝</Text>
              <Image style={[y.size(14)]} source={require('../images/个人主页/selected.png')}/>
            </View>
          </View>
        </View>
        <View style={[y.bgColor('#FAFAFA'),y.udr,y.uac,y.ujb, y.pl(28), y.mt(11), y.pr(18), y.pt(17), y.pb(13)]}>
          <Text style={[y.color('#737373'), y.fSize(11)]}>购买1680桃花币，
            <Text style={[y.color('#EB4E7E')]}>需支付168￥</Text>
          </Text>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#FFC1A3', '#F1628D']}
            style={[y.radiusA(14), y.h(29), y.plr(22),  y.uac, y.ujc]}
          >
            <Text style={[y.color('#fff'),y.fSize(12)]}>确认支付</Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  </Modal>
)

const Item = ({isSelect}) => (
  <View
    style={[y.w(100), y.pt(7), y.mb(15), y.pb(6), y.ujc, y.uac, y.ba(1), y.bdColor(isSelect ? '#DFB465' : '#8F9AB3'), y.bgColor(isSelect ? '#FFF7E6' : '#fff'), y.radiusA(5)]}>
    <View style={[y.udr, y.uac]}>
      <Image style={[y.size(14), y.mr(2)]} source={require('../images/个人主页/chat/txbb.png')}/>
      <Text style={[y.color(isSelect ? '#D1A13C' : '#8F9AB3'), y.fWeight('bold'), y.fSize(11)]}>126</Text>
    </View>
    <Text style={[y.fSize(8), y.color('#999'), y.mt(5)]}>￥18</Text>
  </View>
)
