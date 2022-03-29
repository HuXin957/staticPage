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
  <View style={[y.uf1]}>
    <Header title={'基本资料'}/>
    <View style={[y.uf1, y.bgColor('#F5F8FA'), y.plr(9)]}>
      <Item title={'身高体重'}
            label={'请选择你的身高体重'}
            icon={require('../images/登录注册切图/height.png')}/>
      <Item title={'常驻城市'}
            label={'请选择你的常驻城市'}
            icon={require('../images/登录注册切图/city.png')}/>
      <Item title={'职业'}
            label={'请选择你的职业 '}
            icon={require('../images/登录注册切图/occupation.png')}/>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#FFC1A3', '#F1628D']}
        style={[y.mlr(30), y.mt(50), y.radiusA(23), y.h(45), y.uac, y.ujc]}
      >
        <Text style={[y.color('#fff'), y.fSize(17)]}>下一步</Text>
      </LinearGradient>
    </View>
    <Modal
      visible={true}
      transparent>
      <View style={[y.bgColor('rgba(0,0,0,.5)'), y.uje, y.uf1]}>
        <View style={[y.bgColor('#fff'), y.upr, y.radiusTL(15), y.uac, y.radiusTR(15)]}>
          <View
            style={[y.udr, y.uac, y.ujb, y.bb(1), y.bdColor('#F1EFEF'), y.pl(17), y.pr(38), y.pt(18), y.pb(14), y.w100]}>
            <Text style={[y.color('#494949'), y.fSize(12)]}>取消</Text>
            <Text style={[y.color('#494949'), y.fSize(12)]}>身高体重</Text>
            <Text style={[y.color('#EB4E7E'), y.fSize(12)]}>确认</Text>
          </View>
          <View style={[y.pb(24), y.w100]}>
            <View style={[y.udr, y.uac, y.ujc, y.mt(28)]}>
              <Text style={[y.color('#8F8F8F'), y.fSize(14)]}>164CM</Text>
              <Text style={[y.color('#8F8F8F'), y.fSize(14), y.ml(50)]}>164CM</Text>
            </View>
            <View style={[y.udr, y.uac, y.ujc, y.mt(28)]}>
              <Text style={[y.color('#EB4E7E'), y.bb(1), y.bdColor('#F1EFEF'), y.fSize(14)]}>164CM</Text>
              <Text style={[y.color('#EB4E7E'), y.bb(1), y.bdColor('#F1EFEF'), y.fSize(14), y.ml(50)]}>164CM</Text>
            </View>
            <View style={[y.udr, y.uac, y.ujc, y.mt(28)]}>
              <Text style={[y.color('#8F8F8F'), y.fSize(14)]}>164CM</Text>
              <Text style={[y.color('#8F8F8F'), y.fSize(14), y.ml(50)]}>164CM</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  </View>
)

const Item = ({title, label, icon}) => (
  <View style={[y.mt(27)]}>
    <View style={[y.udr, y.uac]}>
      <Image
        style={[y.h(14), y.w(11), y.mr(3)]}
        source={icon}/>
      <Text style={[y.fSize(14), y.color('#000'), y.fWeight('bold')]}>{title}</Text>
    </View>
    <View style={[y.bgColor('#fff'), y.mt(8), y.pl(19), y.pr(6), y.ujb, y.h(46), y.udr, y.uac, y.radiusA(3)]}>
      <Text style={[y.color('#8C8C8C'), y.fSize(10)]}>{label}</Text>
      <Image
        style={[y.h(11), y.w(6)]}
        source={require('../images/我的切图/forward.png')}/>
    </View>
  </View>
)
