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
import {Header, IconText, Item} from "../components";
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.bgColor('#fff'), y.uf1]}>
    <Header title={'完善资料'}/>
    <ScrollView>
      <ImageBackground
        style={[y.bgColor('#333'), y.size(84), y.mt(24), y.radiusA(5), y.uSelfCenter, y.upr]}
      >
        <Image
          style={[y.size(20), y.upa, y.bottom(0), y.right(0)]}
          source={require('../images/登录注册切图/headpoto.png')}/>
      </ImageBackground>
      <Text style={[y.color('#333'), y.mb(20), y.fSize(14), y.mt(14), y.uSelfCenter]}>上传头像</Text>
      <Tab title={'昵称'} value={'请填写'}/>
      <Tab title={'常驻城市'} value={'可以多选'}/>
      <Tab title={'生日'} value={'请填写'}/>
      <Tab title={'职业'} value={'请选择'}/>
      <Tab title={'日常爱好'} value={'可以多选'}/>
      <Tab title={'期望对象'} value={'可以多选'}/>
      <View style={[y.udr, y.uac, y.pt(20), y.pb(12), y.plr(16), y.bgColor('#F5F8FA')]}>
        <Text style={[y.color('#999'), y.fSize(12)]}>更多信息 </Text>
        <Text style={[y.color('#999'), y.fSize(10)]}>(选填)</Text>
      </View>
      <Tab title={'身高体重'} value={'请选择'}/>
      <Tab title={'个人介绍'} value={'介绍一下我自己'}/>
    </ScrollView>
    <Modal
      visible={true}
      transparent>
      <View style={[y.bgColor('rgba(0,0,0,.5)'), y.ujc, y.uac, y.uf1]}>
        <View style={[y.bgColor('#fff'), y.radiusA(10),y.plr(25), y.w(300), y.uac]}>
          <Text style={[y.color('#333'), y.fSize(17), y.fWeight('bold'), y.mt(26)]}>确定退出么？</Text>
          <Text style={[y.mt(30), y.fSize(13), y.color('#666'), y.utxc]}>
            你还未完善个人信息，现在退出下次进入
            请用已注册账号直接登录。
          </Text>
          <View style={[y.udr, y.uac, y.mt(36), y.mb(16)]}>
            <View style={[y.ba(1), y.bdColor('#bbb'), y.ujc, y.uac, y.radiusA(20), y.w(120), y.h(40)]}>
              <Text style={[y.color('#999'), y.fSize(15)]}>确定退出</Text>
            </View>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#FFC1A3', '#F1628D']}
              style={[y.w(120), y.radiusA(20), y.ml(10),y.h(40), y.uac, y.ujc]}
            >
              <Text style={[y.color('#fff'), y.fSize(15)]}>继续完善</Text>
            </LinearGradient>
          </View>
        </View>

      </View>
    </Modal>
  </View>
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


