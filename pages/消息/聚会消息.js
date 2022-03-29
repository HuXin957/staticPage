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
import {Header, IconText, Item} from "../components";

export default () => (
  <ScrollView style={[y.bgColor('#fff')]}>
    <Header title={'聚会消息'}/>
    <MsgItem/>
    <MsgItem/>
    <MsgItem/>
  </ScrollView>
)

const MsgItem = () => (
  <View style={[y.pl(15), y.ptb(12), y.udr, y.uf1]}>
    <Image style={[y.size(50), y.radiusA(10), y.bgColor('#333')]}/>
    <View style={[y.ml(15), y.uf1,y.mt(5), y.bb(1), y.bdColor('#F3F4F7'), y.pr(20)]}>
      <Text style={[y.fSize(13), y.color('#333')]}>你喜欢的用户
        <Text style={[y.color('#EB4E7E')]}>Areres</Text>
        呵发布了一条聚会广播，
        快去看看吧~</Text>
      <View style={[y.udr, y.uac, y.ptb(15)]}>
        <Text style={[y.color('#ccc'), y.fSize(12), y.uf1]}>5分钟以前</Text>
        <Text style={[y.fSize(12), y.color('#EB4E7E')]}>去看看</Text>
        <Image style={[y.h(10), y.w(6), y.ml(4)]} source={require('../images/消息切图/xrxx.png')}/>
      </View>
    </View>
  </View>
)
