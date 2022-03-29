import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal
} from 'react-native';
import y from '../style'
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <ScrollView style={[y.uf1, y.bgColor('#F5F8FA')]}>
    <Header title={'发布聚会'}/>
    <View style={[y.udr,y.mt(8), y.uac, y.ujb, y.plr(16),y.ptb(19), y.bb(1), y.bgColor('#fff'),y.bdColor('#F5F8FA')]}>
      <Text style={[y.fSize(14),y.color('#333')]}>聚会主题</Text>
      <Text style={[y.fSize(14),y.color('#333')]}>趣运动</Text>
    </View>
    <View style={[y.udr,y.uac, y.ujb, y.plr(16),y.ptb(19), y.bb(1), y.bgColor('#fff'),y.bdColor('#F5F8FA')]}>
      <Text style={[y.fSize(14),y.color('#333')]}>地点</Text>
      <Text style={[y.fSize(14),y.color('#333')]}>深圳市.瑞星咖啡（财富港店）</Text>
    </View>
    <View style={[y.udr,y.mt(8), y.uac, y.ujb, y.plr(16),y.ptb(19), y.bb(1), y.bgColor('#fff'),y.bdColor('#F5F8FA')]}>
      <Text style={[y.fSize(14),y.color('#333')]}>聚会对象</Text>
      <Text style={[y.fSize(14),y.color('#999')]}>可以多选</Text>
    </View>
    <View style={[y.udr,y.uac, y.ujb, y.plr(16),y.ptb(19), y.bb(1), y.bgColor('#fff'),y.bdColor('#F5F8FA')]}>
      <Text style={[y.fSize(14),y.color('#333')]}>时间</Text>
      <Text style={[y.fSize(14),y.color('#999')]}>选择日期</Text>
    </View>
    <View style={[y.udr,y.uac,y.plr(16),y.ptb(19), y.bgColor('#fff')]}>
      <Text style={[y.fSize(14),y.color('#333')]}>配图</Text>
      <Text style={[y.fSize(11),y.color('#999')]}>（可不传）</Text>
    </View>
    <View style={[y.plr(15),y.bgColor('#fff')]}>
      <Image style={[y.size(65)]} source={require('../images/聚会/add.png')}/>
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
