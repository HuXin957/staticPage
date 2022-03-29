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
  <View>
    <Header title={'设置'}/>
    <Item
      title={'账号与安全'}
      icon={require('../images/设置切图/sec1.png')}
    />
    <Item
      title={'新消息通知'}
      icon={require('../images/设置切图/msg1.png')}
    />
    <Item
      title={'交友设置'}
      icon={require('../images/设置切图/make1.png')}
    />
    <Item
      title={'黑名单'}
      icon={require('../images/设置切图/blacklist1.png')}
    />
    <Item
      title={'清理缓存'}
      value={'300M'}
      icon={require('../images/设置切图/clean1.png')}
    />
    <Item
      title={'关于我们'}
      icon={require('../images/设置切图/about1.png')}
    />
    <View style={[y.udr, y.uac,y.ujc, y.plr(18), y.ptb(19), y.bgColor('#fff'), y.bt(8), y.bdColor('#F5F8FA')]}>
      <Text style={[y.color('#676767'), y.fSize(14),y.fWeight('bold')]}>退出登录</Text>
    </View>
  </View>
)

const Item = ({icon, title, value}) => (
  <View style={[y.udr, y.uac, y.plr(18), y.ptb(16), y.bgColor('#fff'), y.bt(8), y.bdColor('#F5F8FA')]}>
    <Image
      resizeMode={'contain'}
      style={[y.w(15), y.h(19)]}
      source={icon}/>
    <Text style={[y.color('#333'), y.fSize(14), y.ml(7), y.uf1]}>{title}</Text>
    <Text style={[y.fSize(9), y.color('#676767'), y.mr(6)]}>{value}</Text>
    <Image
      style={[y.h(11), y.w(6)]}
      source={require('../images/我的切图/forward.png')}/>
  </View>
)
