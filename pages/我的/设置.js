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
import {Header, Item} from "../components";

export default () => (
  <ScrollView style={[y.bgColor('#fff')]}>
    <Header title={'设置'}/>
    <View style={[y.bt(8), y.bdColor('#F5F8FA'), y.plr(17), y.ptb(19)]}>
      <Text style={[y.fSize(14), y.color('#333')]}>隐私设置</Text>
    </View>
    <View style={[y.udr, y.uac, y.ujb, y.bt(1), y.bdColor('#F5F8FA'), y.plr(17), y.ptb(19)]}>
      <Text style={[y.fSize(14), y.color('#333')]}>允许有私聊权限的人对我发起通话</Text>
      <View style={[y.h(22), y.w(43), y.bgColor('#eee'), y.radiusA(11), y.ujc]}>
        <View style={[y.bgColor('#fff'), y.size(18), y.radiusA(9), y.ml(3)]}/>
      </View>
    </View>
    <Item title={'新消息通知'} style={[y.btb(8)]}/>
    <Item title={'手机号码'} value={'13847741358（仅自己可见）'} style={[y.bb(8)]}/>
    <Item title={'修改密码'} style={[y.bb(8)]}/>
    <Item title={'清除图片缓存'}/>
    <Item title={'设置App开锁图案'} style={[y.bb(8)]}/>
    <Item title={'平台使用规范'}/>
    <Item title={'清除图片缓存'}/>
    <Item title={'用户隐私政策'} style={[y.bb(8)]}/>
    <View style={[y.ptb(19)]}>
      <Text style={[y.color('#EB4E7E'), y.utxc,y.fSize(14)]}>退出登录</Text>
    </View>
  </ScrollView>
)

