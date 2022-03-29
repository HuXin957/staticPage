import React from 'react';
import {View, Text, Image, ScrollView, ImageBackground, StatusBar} from 'react-native';
import y from '../style';
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.uf1, y.bgColor('#F5F8FA')]}>
    <Header title={'设置开锁图案'}/>
    <Image style={[y.w(37), y.h(39), y.uSelfCenter, y.mt(12)]} source={require('../images/安全账号/setdrawing.png')}/>
    <Text style={[y.fSize(10), y.color('#696969'), y.uSelfCenter, y.mt(4)]}>请绘制新的开锁图案</Text>
    <Text style={[y.fSize(10), y.color('#EF2323'), y.uSelfCenter, y.mt(14)]}>密码错误，你还有4次机会</Text>
    <View style={[y.mt(28), y.ba(1), y.uf1, y.uac]}>
      <Text>开锁图</Text>
    </View>
  </View>
)
