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
    <Header title={'发布心愿 '}/>
    <ScrollView>
      <View style={[y.pl(15), y.pr(28), y.ptb(19), y.mt(8), y.bgColor('#fff'), y.udr, y.uac]}>
        <Text style={[y.fSize(14), y.color('#333')]}>心愿主题</Text>
        <Text style={[y.fSize(14), y.color('#999'), y.ml(30), y.uf1]}>为您的心愿选择透人的标题吧</Text>
        <Image style={[y.w(14), y.h(8)]} source={require('../images/安全账号/xll.png')}/>
      </View>
      <View style={[y.pl(15), y.pr(28), y.ptb(19), y.bgColor('#fff'), y.mt(1)]}>
        <View style={[y.udr, y.uac]}>
          <Text style={[y.fSize(14), y.color('#333')]}>心愿主题</Text>
          <Text style={[y.fSize(14), y.color('#999'), y.uf1, y.ml(30)]}>任选一种方式回报</Text>
        </View>
        <View style={[y.ml(87), y.udr, y.uac, y.mt(19)]}>
          <View style={[y.bgColor('#F5F8FA'), y.ujc, y.uac, y.w(63), y.h(75)]}>
            <Image style={[y.size(19)]} source={require('../images/安全账号/imgdefult.png')}/>
            <Text style={[y.fSize(7), y.color('#333'), y.mt(5)]}>添加图片</Text>
          </View>
          <View style={[y.bgColor('#F5F8FA'), y.ml(23), y.ujc, y.uac, y.w(63), y.h(75)]}>
            <Image style={[y.size(19)]} source={require('../images/安全账号/imgdefult.png')}/>
            <Text style={[y.fSize(7), y.color('#333'), y.mt(5)]}>添加图片</Text>
          </View>
          <View style={[y.bgColor('#F5F8FA'), y.ml(23), y.ujc, y.uac, y.w(63), y.h(75)]}>
            <Image style={[y.size(19)]} source={require('../images/安全账号/imgdefult.png')}/>
            <Text style={[y.fSize(7), y.color('#333'), y.mt(5)]}>添加图片</Text>
          </View>
        </View>
        <View style={[y.udr, y.uac, y.mt(13)]}>
          <Image style={[y.size(13), y.mr(2)]} source={require('../images/安全账号/ts.png')}/>
          <Text style={[y.color('#999'), y.fSize(10)]}>请勿上传低俗祼露的照片、视频、语音严重者将作封号处理</Text>
        </View>
      </View>
      <View style={[y.pl(15), y.pt(16),y.mt(8), y.pb(11), y.pr(54), y.bgColor('#fff')]}>
        <Text style={[y.color('#333'), y.fSize(14)]}>我的心愿奖励</Text>
        <View style={[y.udr, y.uac]}>
          <View
            style={[y.udr, y.uac, y.ml(14), y.bgColor('#F5F8FA'), y.uac, y.mt(19), y.radiusA(3), y.pl(13), y.ba(1), y.bdColor('#DEE0E1'), y.h(70), y.w(160)]}>
            <Image style={[y.size(15), y.mr(7)]} source={require('../images/安全账号/jj.png')}/>
            <Text style={[y.fSize(14), y.color('#7E7E7E')]}>选择心愿奖励</Text>
          </View>
          <View
            style={[y.udr, y.uac, y.ml(14), y.bgColor('#F5CAB7'), y.mt(19), y.radiusA(3), y.upr, y.pl(13), y.h(70), y.w(160)]}>
            <Image style={[y.w(7), y.h(6), y.upa, y.right(5), y.top(4)]} source={require('../images/安全账号/off01.png')}/>
            <View style={[y.udr]}>
              <View>
                <Image style={[y.size(36)]} source={require('../images/个人主页/chat/gift001.png')}/>
                <Text style={[y.fSize(9), y.color('#F25A87'), y.mt(7)]}>100桃花币</Text>
              </View>
              <Text style={[y.fSize(14), y.color('#494949')]}>666</Text>
            </View>
            <View style={[y.udr, y.uac,y.upa,y.right(12),y.bottom(8)]}>
              <Image style={[y.size(15)]} source={require('../images/安全账号/jj1.png')}/>
              <Text style={[y.fSize(12),y.color('#515151'),y.minw(32),y.utxc]}>1</Text>
              <Image style={[y.size(15)]} source={require('../images/安全账号/jj2.png')}/>
            </View>
          </View>
        </View>
        <Text style={[y.fSize(10), y.color('#7E7E7E'), y.uSelfEnd, y.mt(13)]}>
          总额：
          <Text style={[y.color('#F1628D')]}>0 桃花币</Text>
        </Text>
      </View>
      <View style={[y.udr, y.uac, y.plr(16), y.ujb, y.mt(7), y.ptb(14), y.bgColor('#fff')]}>
        <Text style={[y.color('#333'), y.fSize(14)]}>禁止评论</Text>
        <View style={[y.h(22), y.w(43), y.bgColor('#eee'), y.radiusA(11), y.ujc]}>
          <View style={[y.bgColor('#fff'), y.size(18), y.radiusA(9), y.ml(3)]}/>
        </View>
      </View>

      <View style={[y.udr, y.uac, y.plr(16), y.ujb, y.mt(1), y.ptb(14), y.bgColor('#fff')]}>
        <Text style={[y.color('#333'), y.fSize(14)]}>对同性别用户隐藏</Text>
        <View style={[y.h(22), y.w(43), y.bgColor('#38CC76'), y.radiusA(11), y.ujc, y.uae]}>
          <View style={[y.bgColor('#fff'), y.size(18), y.radiusA(9), y.mr(3)]}/>
        </View>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#FFC1A3', '#F1628D']}
        style={[y.radiusA(23), y.h(45), y.mt(69), y.mlr(10), y.mb(8), y.uac, y.ujc]}
      >
        <Text style={[y.color('#fff'), y.fSize(15)]}>立即发布</Text>
      </LinearGradient>
    </ScrollView>
  </View>
)
