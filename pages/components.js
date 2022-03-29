import {Image, Text, View} from "react-native";
import y from "./style";
import React from "react";

export const IconText = ({text, img}) => (
  <View style={[y.udr, y.uac, y.mt(10), y.pl(2)]}>
    <Image
      source={img}
      resizeMode={'contain'}
      style={[y.size(14), y.mr(12)]}/>
    <Text style={[y.color('#666'), y.fSize(12)]}>{text}</Text>
  </View>
)


export const Header = ({title, style = [], children = null}) => (
  <View style={[y.ptb(15), y.bgColor('#fff'), y.ujc, y.uac, y.upr, ...style]}>
    <Image
      source={require('./images/我的切图/back.png')}
      style={[y.w(11), y.h(19), y.upa, y.left(16)]}/>
    <Text style={[y.color('#333'), y.fSize(17), y.fWeight('bold')]}>{title}</Text>
    {children}
  </View>
)

export const Item = ({title, value, style = []}) => (
  <View style={[y.udr, y.uac, y.bb(1), y.bdColor('#F5F8FA'), y.plr(17), y.ptb(19), ...style]}>
    <Text style={[y.fSize(14), y.uf1, y.color('#333')]}>{title}</Text>
    <Text style={[y.color('#999'), y.fSize(14)]}>{value}</Text>
    <Image
      source={require('./images/我的切图/forward.png')}
      style={[y.ml(11), y.w(6), y.h(11)]}/>
  </View>
)

