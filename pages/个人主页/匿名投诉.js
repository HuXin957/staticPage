import React from 'react';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import y from '../style';
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.uf1]}>
    <Header title={'匿名投诉'}>
      <Text style={[y.color('#EB4E7E'), y.fSize(14), y.upa, y.fWeight('bold'), y.right(16)]}>提交</Text>
    </Header>
    <ScrollView style={[y.bgColor('#fff')]}>
      <View style={[y.bgColor('#FEF2DA'), y.plr(18), y.ptb(12)]}>
        <Text style={[y.fSize(12), y.color('#EB9E2A')]}>如果您在72小时内向Ta支付过“解锁私聊/查看相册” 费用，则核实投诉属实后，系统将自动退回相关的支付金额。</Text>
      </View>
      <View style={[y.bgColor('#F5F8FA'), y.pl(16), y.pt(19), y.pb(10)]}>
        <Text style={[y.fSize(12), y.color('#666')]}>请选择投诉原因</Text>
      </View>
      <Item title={'发广告'}/>
      <Item title={'骚扰/谩骂/不文明聊天'}/>
      <Item title={'虚假照片'}/>
      <Item title={'色情低俗'} isSelect/>
      <Item title={'无法联系'}/>
      <Item title={'存在欺诈骗钱行为'}/>
      <View style={[y.bgColor('#F5F8FA'), y.pl(16), y.pt(19), y.pb(10)]}>
        <Text style={[y.fSize(12), y.color('#666')]}>请提供相关截图，以便我们跟进核实</Text>
      </View>
      <View style={[y.bgColor('#fff'),y.udr,y.uac,y.uWrap,y.pl(18),y.ptb(16)]}>
        <ImageBackground style={[y.bgColor('#333'),y.mb(12),y.size(75),y.upr,y.mr(10),y.radiusA(10)]}>
          <Image style={[y.size(16),y.upa,y.right(-1),y.top(-2)]}  source={require('../images/个人主页/xxz.png')}/>
        </ImageBackground>
        <ImageBackground style={[y.bgColor('#333'),y.size(75),y.upr,y.mr(10),y.radiusA(10)]}>
          <Image style={[y.size(16),y.upa,y.right(-1),y.top(-2)]}  source={require('../images/个人主页/xxz.png')}/>
        </ImageBackground>
        <ImageBackground style={[y.bgColor('#333'),y.size(75),y.upr,y.mr(10),y.radiusA(10)]}>
          <Image style={[y.size(16),y.upa,y.right(-1),y.top(-2)]}  source={require('../images/个人主页/xxz.png')}/>
        </ImageBackground>
        <ImageBackground style={[y.bgColor('#333'),y.size(75),y.upr,y.mr(10),y.radiusA(10)]}>
          <Image style={[y.size(16),y.upa,y.right(-1),y.top(-2)]}  source={require('../images/个人主页/xxz.png')}/>
        </ImageBackground>
        <Image style={[y.size(75)]} source={require('../images/聚会/add.png')}/>
      </View>
      <View style={[y.bgColor('#F5F8FA'), y.pl(16), y.pt(19), y.pb(10)]}>
        <Text style={[y.fSize(12), y.color('#666')]}>补充描述</Text>
      </View>
      <View style={[y.bgColor('#fff'),y.h(150),y.pt(19),y.pl(16)]}>
        <Text style={[y.color('#ccc'),y.fSize(13)]}>为帮助审核人员尽快处理，可补充详细举报说明</Text>
      </View>
    </ScrollView>
  </View>
)

const Item = ({title, isSelect}) => (
  <View style={[y.bgColor('#fff'), y.plr(16), y.ptb(19), y.bb(1), y.bdColor('#F5F8FA'), y.udr, y.uac, y.ujb]}>
    <Text style={[y.fSize(14), y.color('#333')]}>{title}</Text>
    <Image style={[y.size(18)]}
           source={isSelect ? require('../images/个人主页/selected.png') : require('../images/个人主页/notselected.png')}/>
  </View>
)
