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
  <ScrollView style={[y.uf1, y.bgColor('#F5F8FA')]}>
    <Header title={'发动态'}/>
    <View style={[y.bgColor('rgba(245,175,36,.1)'), y.ujc, y.uac, y.h(30)]}>
      <Text style={[y.fSize(11), y.color('#F5AF24')]}>请勿发布低俗，色情交易或爆光他人隐私的内容！</Text>
    </View>
    <View style={[y.plr(16), y.pt(22), y.bgColor('#fff')]}>
      <Text style={[y.fSize(14), y.color('#ccc')]}>发表自己的心情</Text>
      <Image style={[y.size(65), y.mt(124)]} source={require('../images/聚会/add.png')}/>
      <View style={[y.mt(16), y.mb(12), y.udr, y.uac]}>
        <Image style={[y.size(13), y.mr(7)]} source={require('../images/聚会/tips.png')}/>
        <Text style={[y.color('#999'), y.fSize(11)]}>请勿上传低俗祼露的照片，严重者将作封号处理</Text>
      </View>
    </View>
    <View style={[y.mt(9)]}>
      <View style={[y.udr, y.uac, y.plr(16), y.ujb, y.ptb(14), y.bgColor('#fff')]}>
        <Text style={[y.color('#333'), y.fSize(14)]}>禁止评论</Text>
        <View style={[y.h(22), y.w(43), y.bgColor('#EEEEEE'), y.radiusA(11), y.ujc]}>
          <View style={[y.bgColor('#fff'), y.size(18), y.radiusA(9), y.ml(3)]}/>
        </View>
      </View>
      <View style={[y.udr, y.uac, y.plr(16), y.mt(1), y.ujb, y.ptb(14), y.bgColor('#fff')]}>
        <Text style={[y.color('#333'), y.fSize(14)]}>对同性别用户隐藏</Text>
        <View style={[y.h(22), y.w(43), y.bgColor('#38CC76'), y.radiusA(11), y.ujc, y.uae]}>
          <View style={[y.bgColor('#fff'), y.size(18), y.radiusA(9), y.mr(3)]}/>
        </View>
      </View>
    </View>
    <Text style={[y.fSize(11), y.color('#999'), y.mt(127), y.uSelfCenter]}>会员免费，非会员需120金币</Text>
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#FFC1A3', '#F1628D']}
      style={[y.radiusA(23), y.h(45), y.mt(13), y.mlr(10), y.mb(8), y.uac, y.ujc]}
    >
      <Text style={[y.color('#fff'), y.fSize(15)]}>立即发布</Text>
    </LinearGradient>
  </ScrollView>
)
