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

export default ()=>(
  <View style={[y.bgColor('#F5F8FA'), y.uf1]}>
    <Header title={'账号与安全'}/>
    <Item
      title={'手机号码'}
      value={'13847741358（仅自己可见）'}
    />
    <Item
      title={'实名认证'}
      value={'未认证'}
    />
    <Item
      title={'修改密码'}
    />
    <Item
      title={'注销账号'}
    />
    <Item
      title={'设置App开锁图案'}
    />
  </View>
)

const Item = ({icon, title, value}) => (
  <View style={[y.udr, y.uac, y.plr(18), y.ptb(16), y.bgColor('#fff'), y.bt(8), y.bdColor('#F5F8FA')]}>
    <Text style={[y.color('#333'), y.fSize(14), y.ml(7), y.uf1]}>{title}</Text>
    <Text style={[y.fSize(9), y.color('#676767'), y.mr(6)]}>{value}</Text>
    <Image
      style={[y.h(11), y.w(6)]}
      source={require('../images/我的切图/forward.png')}/>
  </View>
)

