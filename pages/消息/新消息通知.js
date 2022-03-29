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


export default () => {
  StatusBar.setTranslucent(false)
  return (
    <View style={[y.bgColor('#F5F8FA'), y.uf1]}>
      <Header title={'隐私设置'}/>
      <View style={[y.plr(17), y.ptb(12)]}>
        <Text style={[y.color('#999'), y.fSize(12)]}>愉悦未打开时</Text>
      </View>
      <Tab title={'私聊消息通知'}/>
      <Tab title={'广播报名通知'} isOpen/>
      <Tab title={'新点赞提醒'}/>
      <Tab title={'新评论提醒'} isOpen/>
      <Tab title={'新广播提醒'} isOpen/>
      <Tab title={'用户通过了我的查看请求'} isOpen/>
      <Tab title={'邀请码申请成功'} isOpen/>
      <View style={[y.plr(17), y.ptb(12)]}>
        <Text style={[y.color('#999'), y.fSize(12)]}>愉悦未打开时</Text>
      </View>
      <Tab title={'声音'} isOpen/>
      <Tab title={'震动'} isOpen/>
    </View>
  )
}

const Tab = ({title, isOpen}) => (
  <View style={[y.udr, y.uac, y.plr(16), y.ujb, y.ptb(14), y.bgColor('#fff')]}>
    <Text style={[y.color('#333'), y.fSize(14)]}>{title}</Text>
    {
      isOpen ?
        <View style={[y.h(22), y.w(43), y.bgColor('#38CC76'), y.radiusA(11), y.ujc, y.uae]}>
          <View style={[y.bgColor('#fff'), y.size(18), y.radiusA(9), y.mr(3)]}/>
        </View>
        :
        <View style={[y.h(22), y.w(43), y.bgColor('#eee'), y.radiusA(11), y.ujc]}>
          <View style={[y.bgColor('#fff'), y.size(18), y.radiusA(9), y.ml(3)]}/>
        </View>
    }
  </View>
)
