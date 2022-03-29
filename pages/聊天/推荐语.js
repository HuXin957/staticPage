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
import {Header} from "../components";

export default () => (
  <View style={[y.bgColor('#fff'), y.uf1]}>
    <Header style={[y.bb(1), y.bdColor('#F5F8FA')]} title={'推荐语'}/>
    <View
      style={[y.udr, y.uac, y.bgColor('#fff'), y.ujb, y.bb(1), y.bdColor('#F5F8FA'), y.pt(17), y.pb(13), y.pl(17), y.pr(20)]}>
      <Text style={[y.fSize(10), y.color('#333333'), y.uf1]}>世上最浪漫的事，是一个人走很远的路 ，去看另...</Text>
      <Text style={[y.fSize(9), y.color('#D0CCCC')]}>500人推荐</Text>
    </View>
  </View>
)
