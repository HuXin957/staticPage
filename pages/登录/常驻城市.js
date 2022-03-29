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

export default () => {
  StatusBar.setBackgroundColor('#F3F4F6')

  return (
    <View style={[y.uf1, y.upr]}>
      <Header title={'常驻城市'} style={[y.bgColor('#F3F4F6')]}/>
      <View style={[y.udr]}>
        <ScrollView>
          <View style={[y.h(30), y.ujc, y.uac]}>
            <Text style={[y.color('#000'), y.fSize(14)]}>北京市</Text>
          </View>
          <View style={[y.h(30), y.ujc, y.uac]}>
            <Text style={[y.color('#000'), y.fSize(14)]}>北京市</Text>
          </View>
          <View style={[y.h(30), y.ujc, y.uac, y.bgColor('#EB4E7E')]}>
            <Text style={[y.color('#fff'), y.fSize(14)]}>辽宁省</Text>
          </View>
          <View style={[y.h(30), y.ujc, y.uac]}>
            <Text style={[y.color('#000'), y.fSize(14)]}>北京市</Text>
          </View>
          <View style={[y.h(30), y.ujc, y.uac]}>
            <Text style={[y.color('#000'), y.fSize(14)]}>北京市</Text>
          </View>
          <View style={[y.h(30), y.ujc, y.uac]}>
            <Text style={[y.color('#000'), y.fSize(14)]}>北京市</Text>
          </View>
        </ScrollView>
        <ScrollView>
          <View style={[y.h(30), y.ujc, y.uac]}>
            <Text style={[y.color('#000'), y.fSize(14)]}>北京市</Text>
          </View>
          <View style={[y.h(30), y.ujc, y.uac]}>
            <Text style={[y.color('#000'), y.fSize(14)]}>北京市</Text>
          </View>
          <View style={[y.h(30), y.ujc, y.uac]}>
            <Text style={[y.color('#EB4E7E'), y.fSize(14)]}>丹东市</Text>
          </View>
          <View style={[y.h(30), y.ujc, y.uac]}>
            <Text style={[y.color('#000'), y.fSize(14)]}>北京市</Text>
          </View>
          <View style={[y.h(30), y.ujc, y.uac]}>
            <Text style={[y.color('#000'), y.fSize(14)]}>北京市</Text>
          </View>
        </ScrollView>
      </View>
      <View style={[y.w100, y.upa, y.bottom(0), y.plr(30), y.ptb(16), y.udr, y.uac, y.ujb, y.bgColor('#F3F4F6')]}>
        <View style={[y.udr, y.uac]}>
          <View style={[y.bgColor('#EB4E7E'), y.upr, y.ujc, y.uac, y.h(18), y.radiusA(3), y.pl(11), y.pr(17)]}>
            <Text style={[y.fSize(9), y.color('#fff')]}>北京市</Text>
            <Image
              style={[y.size(5), y.upa, y.top(2), y.right(2)]}
              source={require('../images/登录注册切图/mxxx.png')}/>
          </View>
          <View
            style={[y.bgColor('#EB4E7E'), y.ml(11), y.upr, y.ujc, y.uac, y.h(18), y.radiusA(3), y.pl(11), y.pr(17)]}>
            <Text style={[y.fSize(9), y.color('#fff')]}>北京市</Text>
            <Image
              style={[y.size(5), y.upa, y.top(2), y.right(2)]}
              source={require('../images/登录注册切图/mxxx.png')}/>
          </View>
          <View
            style={[y.bgColor('#EB4E7E'), y.ml(11), y.upr, y.ujc, y.uac, y.h(18), y.radiusA(3), y.pl(11), y.pr(17)]}>
            <Text style={[y.fSize(9), y.color('#fff')]}>北京市</Text>
            <Image
              style={[y.size(5), y.upa, y.top(2), y.right(2)]}
              source={require('../images/登录注册切图/mxxx.png')}/>
          </View>
        </View>
        <Text style={[y.color('#EB4E7E'), y.fSize(12)]}>确认</Text>
      </View>
    </View>
  )
}
