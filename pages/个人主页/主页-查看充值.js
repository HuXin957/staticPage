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
        <View
          style={[y.udr, y.uac, y.ml(22), y.mr(19), y.mt(12), y.plr(8), y.ptb(4), y.bgColor('#FAE2B3'), y.radiusA(5)]}>
          <Image style={[y.size(20), y.mr(6)]} source={require('../images/个人主页/mmlogo.png')}/>
          <Text style={[y.color('#AA7203'), y.uf1, y.fSize(8)]}>关注公众号【白雪佳人】享七折充值优惠！</Text>
          <View style={[y.h(18), y.w(57), y.ujc, y.uac, y.radiusA(9), y.bgColor('#DFB465')]}>
            <Text style={[y.fSize(8), y.color('#553F3F')]}>复制去微信</Text>
          </View>
        </View>
        <View style={[y.udr, y.uac, y.ujb,y.uWrap, y.ml(22), y.mr(19), y.mt(17)]}>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </View>
      </View>
    </View>
  </Modal>
)


const Item = () => (
  <View style={[y.w(100), y.pt(7), y.mb(15), y.pb(6),y.ujc, y.uac, y.ba(1), y.bdColor('#8F9AB3'), y.radiusA(5)]}>
    <View style={[y.udr, y.uac]}>
      <Image style={[y.size(14), y.mr(2)]} source={require('../images/个人主页/chat/txbb.png')}/>
      <Text style={[y.color('#8F9AB3'), y.fWeight('bold'), y.fSize(11)]}>126</Text>
    </View>
    <Text style={[y.fSize(8), y.color('#999'), y.mt(5)]}>￥18</Text>
  </View>
)
