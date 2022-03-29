import React from 'react';
import {View, Text, Image, ScrollView, ImageBackground, StatusBar} from 'react-native';
import y from '../style';
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.uf1, y.bgColor('#fff'), y.upr,]}>
    <Image style={[y.size(15), y.left(17), y.top(19)]} source={require('../images/个人主页/off11.png')}/>
    <Text style={[y.fSize(14), y.color('#F67C88'), y.uSelfCenter, y.mt(150)]}>未识别到人脸</Text>
    <Image style={[y.bgColor('#333'), y.mt(32), y.size(150), y.radiusA(75), y.uSelfCenter]}/>
  </View>
)
