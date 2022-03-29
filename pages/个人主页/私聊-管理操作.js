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

export default () => {
  // StatusBar.setTranslucent(true)
  // StatusBar.setBackgroundColor('rgba(0,0,0,.5)')
  return (
    <Modal
      visible={true}
      transparent
      statusBarTranslucent
    >
      <View style={[y.bgColor('rgba(0,0,0,.5)'), y.uje, y.pa(10), y.uf1]}>
        <View style={[y.radiusA(5), y.bgColor('#fff'), y.mb(10)]}>
          <View style={[y.h(44), y.bb(1), y.bdColor('#EEEEEE'), y.ujc, y.uac]}>
            <Text style={[y.color('#333'), y.fSize(14)]}>拉黑(屏蔽双方)</Text>
          </View>
          <View style={[y.h(44), y.bb(1), y.bdColor('#EEEEEE'), y.ujc, y.uac]}>
            <Text style={[y.color('#333'), y.fSize(14)]}>关闭消息提醒</Text>
          </View>
          <View style={[y.h(44), y.ujc, y.uac]}>
            <Text style={[y.color('#333'), y.fSize(14)]}>若名举报</Text>
          </View>
        </View>
        <View style={[y.bgColor('#fff'), y.radiusA(5), y.h(45), y.ujc, y.uac]}>
          <Text style={[y.color('#666'), y.fSize(14)]}>取消</Text>
        </View>
      </View>
    </Modal>
  )
}
