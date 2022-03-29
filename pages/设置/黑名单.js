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

export default () => (
  <View style={[y.uf1, y.bgColor('#F5F8FA')]}>
    <Header title={'黑名单'} style={[y.bb(1), y.bdColor('#F5F8FA')]}/>
    <Item/>
    <Item isFocus/>
    <Item/>
    <Text style={[y.color('#ACACAC'), y.fSize(9), y.uSelfCenter, y.mt(21)]}>我已经到底了~</Text>
  </View>
)

const Item = () => (
  <View style={[y.h(66), y.pl(15), y.pt(10), y.bdColor('#F3F4F7'), y.bgColor('#fff'), y.udr]}>
    <Image style={[y.bgColor('#333'), y.size(50), y.radiusA(10)]}/>
    <View style={[y.bb(1), y.uf1, y.ml(15), y.bdColor('#F3F4F7'), y.h100]}>
      <View style={[y.udr,y.uac, y.pr(20)]}>
        <View style={[y.udr, y.uac, y.uf1]}>
          <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>梦瑶</Text>
          <Image
            resizeMode={'contain'}
            style={[y.w(40), y.h(17), y.ml(8)]}
            source={require('../images/我的切图/goddess.png')}/>
        </View>
        <Text style={[y.fSize(11), y.color('#F57589'),y.mt(18)]}>解除</Text>
      </View>
    </View>
  </View>
)
