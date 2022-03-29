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
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.uf1]}>
    <View style={[y.bgColor('#000'), y.h(76)]}/>

    <View style={[y.uf1, y.bgColor('#7D7D7D')]}>

    </View>
    <View style={[y.bgColor('#000'), y.udr, y.ujc, y.uac, y.ptb(30)]}>
      <Text style={[y.fSize(14), y.color('#fff')]}>重拍</Text>
      <Image style={[y.size(28),y.mlr(80)]} source={require('../images/聊天/fm002.png')}/>
      <Text style={[y.fSize(14), y.color('#fff')]}>使用视频</Text>
    </View>
  </View>
)
