import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import y from '../style';

export default () => (
  <Modal
    visible={true}
    transparent
  >
    <View style={[y.bgColor('rgba(0,0,0,.5)'), y.uje, y.uf1]}>
      <View style={[y.bgColor('#fff'), y.pb(22), y.radiusTR(10), y.radiusTL(10)]}>
        <View style={[y.plr(20), y.ptb(10), y.bb(1), y.bdColor('#F1EFEF'), y.udr]}>
          <Image style={[y.size(15), y.mr(3)]} resizeMode={'contain'} source={require('../images/个人主页/mgift.png')}/>
          <Text style={[y.color('#494949'), y.fSize(12), y.uf1]}>礼物</Text>
          <Image style={[y.size(17), y.mr(3)]} source={require('../images/个人主页/chat/txbb.png')}/>
          <Text style={[y.color('#FDAF01'), y.fSize(12)]}>50</Text>
        </View>
        <Text style={[y.color('#898888'), y.fSize(8), y.uSelfCenter, y.mtb(6)]}>为避免过度打扰，送Ta小礼物表达诚意开启聊天吧</Text>
        <View style={[y.udr, y.uWrap, y.plr(20)]}>
          <View style={[y.uac, y.wRatio(25)]}>
            <View
              style={[y.h(66), y.w(57), y.ba(1), y.bdColor('#F47391'), y.radiusA(5), y.ujc, y.uac, y.bgColor('#F5CAB7')]}>
              <Image style={[y.h(41), y.w(37)]} source={require('../images/个人主页/chat/gift001.png')}/>
              <Text style={[y.fSize(8), y.color('#414141')]}>666</Text>
            </View>
            <View style={[y.udr, y.mt(2)]}>
              <Image style={[y.size(17), y.mr(3)]} source={require('../images/个人主页/chat/txbb.png')}/>
              <Text style={[y.color('#FDAF01'), y.fSize(12)]}>50</Text>
            </View>
          </View>
          <Item name={'蓝玫瑰'} img={require('../images/个人主页/chat/gift002.png')} price={100}/>
          <Item name={'棒棒糖'} img={require('../images/个人主页/chat/gift003.png')} price={100}/>
          <Item name={'蓝玫瑰'} img={require('../images/个人主页/chat/gift004.png')} price={100}/>
          <Item name={'蓝玫瑰'} img={require('../images/个人主页/chat/gift005.png')} price={100}/>
          <Item name={'蓝玫瑰'} img={require('../images/个人主页/chat/gift006.png')} price={100}/>
          <Item name={'蓝玫瑰'} img={require('../images/个人主页/chat/gift007.png')} price={100}/>
          <Item name={'蓝玫瑰'} img={require('../images/个人主页/chat/gift008.png')} price={100}/>
        </View>
        <View style={[y.plr(32),y.ujb, y.udr, y.uac, y.mt(26)]}>
          <View style={[y.radiusA(14), y.ba(1), y.ujc,y.h(28), y.plr(12), y.bdColor('#F40909')]}>
            <Text style={[y.color('#EB4E7E'), y.fSize(11)]}>支付168桃花币</Text>
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#FFC1A3', '#F1628D']}
            style={[y.radiusA(20), y.h(28), y.plr(14),y.uac, y.ujc]}
          >
            <Text style={[y.color('#fff'), y.fSize(12)]}>使用会员特权解锁 (剩余8次)</Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  </Modal>
)

const Item = ({name, price, img}) => (
  <View style={[y.uac, y.wRatio(25)]}>
    <View style={[y.h(66), y.w(57), y.radiusA(5), y.ujc, y.uac]}>
      <Image style={[y.h(41), y.w(37)]} source={img}/>
      <Text style={[y.fSize(8), y.color('#414141')]}>{name}</Text>
    </View>
    <View style={[y.udr, y.mt(2)]}>
      <Image style={[y.size(17), y.mr(3)]} source={require('../images/个人主页/chat/txbb.png')}/>
      <Text style={[y.color('#FDAF01'), y.fSize(12)]}>{price}</Text>
    </View>
  </View>
)
