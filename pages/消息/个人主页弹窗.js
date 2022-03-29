import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  ImageBackground, StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import y from '../style';
import {Header} from "../components";

export default () => {
  StatusBar.setTranslucent(true)
  StatusBar.setBackgroundColor('rgba(0,0,0,.5)')
  return (
    <Modal
      visible={true}
      transparent>
      <View style={[y.bgColor('rgba(0,0,0,.5)'), y.uje, y.uf1]}>
        <View style={[y.bgColor('#fff'), y.upr, y.radiusTL(15), y.uac, y.radiusTR(15)]}>
          <Text style={[y.fSize(15), y.color('#333'), y.fWeight('bold'), y.mt(30), y.utxc]}>Ta的真实评价</Text>
          <Text style={[y.fSize(20), y.color('#999'), y.upa, y.right(16), y.top(13)]}>x</Text>
          <View style={[y.uWrap, y.udr, y.plr(28), y.mt(43), y.ujb]}>
            <Label title={'温柔(0)'}/>
            <Label title={'风趣(45)'}/>
            <Label title={'温柔(0)'} isCur/>
            <Label title={'温柔(0)'}/>
            <Label title={'温柔(0)'}/>
            <Label title={'温柔(0)'}/>
            <Label title={'温柔(0)'}/>
            <Label title={'温柔(0)'}/>
            <Label title={'温柔(0)'}/>
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#FFC1A3', '#F1628D']}
            style={[y.w(250), y.h(40), y.ujc, y.uac, y.radiusA(20),y.mb(17),y.mt(20)]}
          >
            <Text style={[y.color('#fff'), y.fSize(14)]}>匿名评价</Text>
          </LinearGradient>
          <Text style={[y.color('#EB4E7E'),y.fSize(12),y.mb(24)]}>严重问题请举报</Text>
        </View>
      </View>
    </Modal>
  )
}

const Label = ({title, isCur}) => (
  <View
    style={[y.ba(1), y.mb(17), y.bdColor(isCur ? '#EB4E7E' : '#eee'), y.ujc, y.uac, y.wRatio(30), y.h(40), y.radiusA(20)]}>
    <Text style={[y.color(isCur ? '#EB4E7E' : '#333'), y.fSize(14)]}>{title}</Text>
  </View>
)
