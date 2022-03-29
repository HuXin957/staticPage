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

export default () => (
  <View style={[y.uf1]}>
    <Header title={'愉悦公告'}/>
    <ScrollView style={[y.bgColor('#fff')]}>
      {/*一*/}
      <View style={[y.bgColor('#fff'), y.pa(15), y.bb(1), y.bdColor('#F3F4F7'), y.udr]}>
        <Image source={require('../images/消息切图/sysmsg.png')} style={[y.size(35)]}/>
        <View style={[y.ml(10), y.pt(4), y.uf1]}>
          <Text style={[y.color('#333'), y.fSize(13), y.fWeight('bold')]}>系统通知</Text>
          <Text style={[y.color('#666'), y.fSize(14), y.mt(13)]}>
            Hi,欢迎来到愉悦平台，在结交新朋友前，我们
            温馨提醒你：
          </Text>
          <Text style={[y.color('#666'), y.fSize(14), y.mb(15)]}>
            1）请遵守《平台使用规范》和《广播发布须知》，若发布违规内容
            （如：色情低俗内容），愉悦平台有权对账号作出限制权限，甚至冻结账号处理。
          </Text>
          <Text style={[y.color('#999'), y.fSize(12)]}>2020-06-05 16:00:37</Text>
        </View>
      </View>
      {/*  二*/}
      <View style={[y.bgColor('#fff'), y.pa(15), y.bb(1), y.bdColor('#F3F4F7'), y.udr]}>
        <Image source={require('../images/消息切图/sysmsg.png')} style={[y.size(35)]}/>
        <View style={[y.ml(10), y.pt(4), y.uf1]}>
          <Text style={[y.color('#333'), y.fSize(13), y.fWeight('bold')]}>系统通知</Text>
          <Text style={[y.color('#666'), y.fSize(14), y.mt(13)]}>
            邀请码申请成功！
          </Text>
          <Text style={[y.color('#666'), y.fSize(14), y.mtb(4)]}>
            邀请码：
            <Text style={[y.color('#EB4E7E'), y.fSize(14)]}>
              [98274121177411114]
            </Text>
          </Text>
          <Text style={[y.color('#999'), y.fSize(12), y.mb(15)]}>
            (点击可复制邀请码)
          </Text>
          <Text style={[y.color('#999'), y.fSize(12)]}>2020-06-05 16:00:37</Text>
        </View>
      </View>
      {/*  三*/}
      <View style={[y.bgColor('#fff'), y.pa(15), y.bb(1), y.bdColor('#F3F4F7'), y.udr]}>
        <Image source={require('../images/消息切图/sysmsg.png')} style={[y.size(35)]}/>
        <View style={[y.ml(10), y.pt(4), y.uf1]}>
          <Text style={[y.color('#333'), y.fSize(13), y.fWeight('bold')]}>系统通知</Text>
          <Text style={[y.color('#666'), y.fSize(14), y.mt(13)]}>
            DANNY 已同意你浏览Ta的主页，点击此消息即可查看
          </Text>
          <View style={[y.udr, y.uac, y.ujb]}>
            <Text style={[y.color('#999'), y.fSize(12), y.uf1]}>2020-06-05 16:00:37</Text>
            <Text style={[y.color('#EB4E7E'), y.fSize(12)]}>Ta的主页</Text>
            <Image source={require('../images/消息切图/xrxx.png')} style={[y.h(10), y.w(6),y.ml(4)]}/>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
)
