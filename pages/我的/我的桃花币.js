import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import y from '../style';
import {Header} from "../components";


export default () => (
  <View style={[y.uf1]}>
    <Header title={'我的桃花币'}/>
    <View style={[y.bgColor('#fff'), y.bb(8), y.bdColor('#F5F8FA')]}>

      <ImageBackground
        source={require('../images/我的切图/wallet.png')}
        style={[y.h(207), y.w100, y.plr(30), y.upr, y.radiusA(10)]}>
        <View style={[y.mt(40), y.udr, y.uac]}>
          <Image style={[y.size(15), y.bgColor('#fff')]}/>
          <Text style={[y.fSize(12), y.color('#fff'), y.ml(5), y.mr(7)]}>桃花币总额</Text>
          <Image style={[y.size(14), y.bgColor('#fff')]}/>
        </View>
        <Text style={[y.fSize(30), y.color('#fff'), y.fWeight('bold'), y.mt(6)]}>3555.50</Text>
        <View style={[y.udr, y.uac, y.mt(15)]}>
          <View style={[y.uac]}>
            <Text style={[y.color('#fff'), y.fSize(12)]}>今日收红包</Text>
            <Text style={[y.color('#fff'), y.fSize(15), y.mt(5)]}>3.88</Text>
          </View>
          <View style={[y.uac, y.ml(40)]}>
            <Text style={[y.color('#fff'), y.fSize(12)]}>今日收红包</Text>
            <Text style={[y.color('#fff'), y.fSize(15), y.mt(5)]}>3.88</Text>
          </View>
        </View>
        <View
          style={[y.h(30), y.w(60), y.ujc, y.uac, y.bgColor('#fff'), y.radiusA(5), y.upa, y.right(30), y.top(40)]}>
          <Text style={[y.color('#FE6C32'), y.fSize(14), y.fWeight('bold')]}>充值</Text>
        </View>
      </ImageBackground>
    </View>
    <ScrollView style={[y.bgColor('#fff'), y.plr(20)]}>
      <Text style={[y.color('#333'), y.fWeight('bold'), y.mt(13), y.fSize(15)]}>桃花币明细</Text>
      <View style={[y.ptb(16), y.bb(1), y.bdColor('#F5F5F5')]}>
        <View style={[y.udr, y.uac]}>
          <Text style={[y.color('#666'), y.fSize(12), y.uf1]}>你花200桃花币解锁Areres 呵的相册</Text>
          <Text style={[y.color('#38CC76')]}>- 14.00</Text>
        </View>
        <View style={[y.udr, y.uac]}>
          <Text style={[y.color('#ccc'), y.fSize(12), y.uf1]}>2018-09-12 15:32</Text>
          <Text style={[y.color('#999'), y.fSize(12), y.mt(11)]}>3800.50</Text>
        </View>
      </View>
      <View style={[y.ptb(16), y.bb(1), y.bdColor('#F5F5F5')]}>
        <View style={[y.udr, y.uac]}>
          <Text style={[y.color('#666'), y.fSize(12), y.uf1]}>你花200桃花币解锁Areres 呵的相册</Text>
          <Text style={[y.color('#FE6C32')]}>- 14.00</Text>
        </View>
        <View style={[y.udr, y.uac]}>
          <Text style={[y.color('#ccc'), y.fSize(12), y.uf1]}>2018-09-12 15:32</Text>
          <Text style={[y.color('#999'), y.fSize(12), y.mt(11)]}>3800.50</Text>
        </View>
      </View>
      <View style={[y.ptb(16), y.bb(1), y.bdColor('#F5F5F5')]}>
        <View style={[y.udr, y.uac]}>
          <Text style={[y.color('#666'), y.fSize(12), y.uf1]}>你花200桃花币解锁Areres 呵的相册</Text>
          <Text style={[y.color('#38CC76')]}>- 14.00</Text>
        </View>
        <View style={[y.udr, y.uac]}>
          <Text style={[y.color('#ccc'), y.fSize(12), y.uf1]}>2018-09-12 15:32</Text>
          <Text style={[y.color('#999'), y.fSize(12), y.mt(11)]}>3800.50</Text>
        </View>
      </View>

    </ScrollView>
  </View>
)
