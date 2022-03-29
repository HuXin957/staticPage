import React from 'react';
import {View, Text, Image, ScrollView, ImageBackground, StatusBar} from 'react-native';
import y from '../style';
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.uf1]}>
    <Header title={'账号验证'}>
      <View style={[y.upa, y.right(17), y.udr, y.uac]}>
        <Image style={[y.size(14), y.mr(5)]} source={require('../images/安全账号/kf0001.png')}/>
        <Text style={[y.fSize(10), y.color('#666')]}>联系客服</Text>
      </View>
    </Header>
    <ScrollView>
      <View style={[y.upr, y.uf1,y.pt(40)]}>
        <Image resizeMode={'contain'} style={[y.h(480), y.w100]} source={require('../images/安全账号/account001.png')}/>
        <View style={[y.upa, y.left(42), y.top(430)]}>
          <Text style={[y.fSize(12), y.utxdt, y.color('#535353')]}>原价:88元</Text>
          <Text style={[y.fSize(24), y.color('#DD0B0B'), y.fWeight('bold')]}>限时特价</Text>
          <Text style={[y.fSize(18), y.color('#DD0B0B'),y.mt(10), y.fWeight('bold')]}>￥18</Text>
          <Text style={[y.fSize(14), y.color('#494949'),y.mt(10)]}>附近已有9740位用户</Text>
          <Text style={[y.fSize(14), y.color('#494949'),y.mt(6)]}>快与Ta一对一私密约会</Text>
        </View>
      </View>
      <Text style={[y.fSize(12), y.color('#868383'), y.mt(84), y.utxdu, y.uSelfCenter]}>为什么要缴纳费用？</Text>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#FFC1A3', '#F1628D']}
        style={[y.h(45), y.mlr(30),y.mb(30), y.mt(10), y.radiusA(22), y.uac, y.ujc]}
      >
        <Text style={[y.color('#fff'), y.fSize(17)]}>去验证</Text>
      </LinearGradient>
    </ScrollView>

  </View>
)
