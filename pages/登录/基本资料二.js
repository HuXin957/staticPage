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
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <ScrollView style={[y.bgColor('#fff')]}>
    <View style={[y.uac, y.pt(15)]}>
      <Text style={[y.color('#333'), y.fSize(16), y.fWeight('bold')]}>基本资料</Text>
      <ImageBackground
        style={[y.bgColor('#333'), y.size(84), y.mt(24), y.radiusA(5), y.uSelfCenter, y.upr]}
      >
        <Image
          style={[y.size(20), y.upa, y.bottom(0), y.right(0)]}
          source={require('../images/登录注册切图/headpoto.png')}/>
      </ImageBackground>
      <Text style={[y.color('#707070'), y.mb(20), y.fSize(14), y.mt(14), y.uSelfCenter]}>上传清晰真实照片更容易认识TA哦</Text>
      <Tab title={'昵称'} value={'请填写'}/>
      <Tab title={'生日'} value={'请填写'}/>
      <Tab title={'邀请码'} value={'请填写'}/>
    </View>
    <View style={[y.udr, y.uac, y.plr(15), y.pt(9), y.pb(20), y.bt(4), y.bdColor('#F5F8FA')]}>
      <Text style={[y.color('#333'), y.fSize(14)]}>你是？</Text>
      <Text style={[y.color('#C1C1C1'), y.fSize(11), y.ml(25)]}>注册完成之后，你的性别将无法更改</Text>
    </View>
    <View style={[y.udr, y.uac, y.pl(45), y.pb(22)]}>
      <Image style={[y.w(150), y.h(100)]} source={require('../images/登录注册切图/man1.png')}/>
      <Image style={[y.w(150), y.h(100), y.ml(15)]} source={require('../images/登录注册切图/wman2.png')}/>
    </View>
    <View style={[y.bgColor('#F5F8FA')]}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#FFC1A3', '#F1628D']}
        style={[y.mlr(30), y.mt(50), y.mb(75), y.radiusA(23), y.h(45), y.uac, y.ujc]}
      >
        <Text style={[y.color('#fff'), y.fSize(17)]}>下一步</Text>
      </LinearGradient>
    </View>
    <View style={[y.pl(14), y.pr(16), y.pt(20)]}>
      <Text style={[y.fSize(14), y.color('#333'), y.fWeight('bold')]}>免费邀请码申请</Text>
      <View style={[y.mt(27), y.udr, y.uac, y.ujb]}>
        <Text style={[y.fSize(10), y.color('#A2A1A1')]}>你需填写一些个人资料，审核通过后会给你发送邀请码</Text>
        <View style={[y.bgColor('#F1628D'), y.h(15), y.plr(10), y.radiusA(8), y.ujc, y.uac]}>
          <Text style={[y.color('#fff'), y.fSize(9)]}>马上申请</Text>
        </View>
      </View>
      <View style={[y.udr, y.uac,y.mt(12),y.uje,y.mb(52)]}>
        <Text style={[y.color('#031A7D'), y.fSize(9)]}>查收邀请码</Text>
        <Image
          style={[y.h(7), y.w(4), y.ml(3)]}
          source={require('../images/登录注册切图/xyyy.png')}/>
      </View>
    </View>
  </ScrollView>
)
const Tab = ({title, value}) => (
  <View style={[y.udr, y.uac, y.plr(18), y.ptb(16), y.bb(1), y.bdColor('#F5F8FA')]}>
    <Text style={[y.color('#333'), y.fSize(14), y.uf1]}>{title}</Text>
    <Text style={[y.color('#ccc'), y.fSize(14), y.mr(12)]}>{value}</Text>
    <Image
      style={[y.h(11), y.w(6)]}
      source={require('../images/我的切图/forward.png')}/>
  </View>
)
