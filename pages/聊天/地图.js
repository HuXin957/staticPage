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

export default () => (
  <View style={[y.uf1]}>
    <View style={[y.bgColor('#333'), y.upr, y.plr(14), y.h(244), y.pt(29), y.ujb, y.udr]}>
      <Text style={[y.color('#fff'), y.fSize(16)]}>取消</Text>
      <View style={[y.bgColor('#F2638E'), y.radiusA(5), y.h(25), y.plr(13)]}>
        <Text style={[y.color('#fff'), y.fSize(14)]}>发送</Text>
      </View>
      <Image
        style={[y.upa, y.right(14), y.bottom(12), y.size(45)]}
        source={require('../images/聊天/sho0001.png')}/>
    </View>
    <View>
      <View style={[y.bgColor('#F2F2F0'), y.h(35), y.udr, y.ujc, y.uac, y.mlr(34), y.radiusA(18), y.mtb(12)]}>
        <Image style={[y.size(11), y.mr(2)]} source={require('../images/聊天/sho.png')}/>
        <Text style={[y.color('#8C8C8C'), y.fSize(10)]}>搜索地点</Text>
      </View>
      <View style={[y.pl(24), y.pr(19),y.bb(1), y.pb(7), y.pt(10), y.bdColor('#F5F8FA')]}>
        <View style={[y.udr, y.uac, y.ujb]}>
          <Text style={[y.color('#1A1A18'), y.fSize(12)]}>零距丽国际健身连锁</Text>
          <Image style={[y.bgColor('#333'), y.w(13), y.h(9)]}/>
        </View>
        <Text style={[y.color('#C8C8C8'), y.fSize(10)]}>2.1km | 时代城室外广场</Text>
      </View>
    </View>
  </View>
)
