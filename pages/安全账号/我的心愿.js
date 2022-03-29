import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import y from '../style'
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.uf1, y.bgColor('#F5F8FA')]}>
    <Header title={'我的心愿'}/>
    <View style={[y.pl(11), y.pr(19)]}>
      <View style={[y.udr, y.uac, y.bgColor('#FCD1CA'), y.plr(12), y.h(70), y.radiusA(5), y.mt(10)]}>

        <View style={[y.ba(1), y.bdColor('#fff'), y.ptb(2), y.plr(4), y.radiusA(1), y.bgColor('#EEE')]}>
          <Image style={[y.h(33), y.w(23), y.bgColor('#333')]}/>
        </View>
        <View style={[y.ml(10), y.uf1]}>
          <Text style={[y.color('#DC3C3C'), y.fSize(12)]}>身材最好照片</Text>
          <View style={[y.udr, y.uac]}>
            <Image style={[y.size(20), y.mr(3)]} source={require('../images/个人主页/chat/gift001.png')}/>
            <Text style={[y.fSize(14), y.color('#F85766')]}>x 3</Text>
            <Image style={[y.size(20), y.ml(13), y.mr(3)]} source={require('../images/个人主页/chat/gift001.png')}/>
            <Text style={[y.fSize(14), y.color('#F85766')]}>x 3</Text>
          </View>
        </View>
        <View style={[y.uae]}>
          <Text style={[y.fSize(10), y.color('#999')]}>10小时前</Text>
          <Text style={[y.fSize(10), y.color('#999'), y.mt(12)]}>
            收益：
            <Text style={[y.fSize(12), y.color('#DE4B4A')]}>
              20000桃花币
            </Text>
          </Text>
        </View>
      </View>
      <Text style={[y.fSize(9), y.color('#ACACAC'), y.mt(18), y.uSelfCenter]}>我已经到底了~</Text>
    </View>
  </View>
)
