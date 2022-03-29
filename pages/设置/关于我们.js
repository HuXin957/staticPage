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
    <Header title={'关于我们'}/>
    <View style={[y.ba(6), y.radiusA(15), y.mt(14), y.bdColor('#fff'), y.uSelfCenter]}>
      <Image style={[y.size(81)]} source={require('../images/设置切图/logo.png')}/>
    </View>
    <Text style={[y.mt(9), y.fSize(14), y.fWeight('bold'), y.color('#333'), y.uSelfCenter]}>白雪佳人</Text>
    <Text style={[y.fSize(10), y.mb(27), y.color('#9F9E9E'), y.uSelfCenter, y.mt(10)]}>版本1.1.2</Text>
    <Item title={'平台使用规范'}/>
    <Item title={'用户使用协议'}/>
    <Item title={'用户隐私政策'}/>
    <Item title={'版本更新'}/>
  </View>
)

const Item = ({title}) => (
  <View style={[y.udr, y.uac, y.plr(18), y.ptb(16), y.bgColor('#fff'), y.bt(8), y.bdColor('#F5F8FA')]}>
    <Text style={[y.color('#333'), y.fSize(14), y.ml(7), y.uf1]}>{title}</Text>
    <Image
      style={[y.h(11), y.w(6)]}
      source={require('../images/我的切图/forward.png')}/>
  </View>
)
