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

export default () => (
  <View style={[y.bgColor('#F5F8FA'), y.uf1]}>
    <Header title={'交友设置'}/>
    {
      true ?
        < View style={[y.uf1, y.ujc, y.uac]}>
          <Image
            style={[y.w(61), y.h(50), y.mb(16)]}
            source={require('../images/我的切图/default.png')}/>
          <Text style={[y.color('#8F9AB3'), y.fSize(12)]}>还没有上传照片哦！</Text>
        </View>
        :
        <ScrollView style={[y.plr(16)]}>
          <View style={[y.udr, y.uWrap, y.ujb]}>
            <ImageBackground style={[y.bgColor('#333'), y.h(128), y.w(110), y.upr, y.mt(6)]}>
              <Image
                style={[y.w(21), y.h(24), y.upa, y.bottom(17), y.uSelfCenter]}
                source={require('../images/设置切图/burn1.png')}/>
              <View style={[y.bgColor('#F2668C'), y.w100, y.h(15), y.ujc, y.uac, y.upa, y.bottom(0)]}>
                <Text style={[y.color('#fff'), y.fSize(8)]}>阅后即焚照片</Text>
              </View>
            </ImageBackground>
            <ImageBackground style={[y.bgColor('#333'), y.h(128), y.w(110), y.upr, y.mt(6)]}>
              <Image
                style={[y.w(21), y.h(24), y.upa, y.bottom(17), y.uSelfCenter]}
                source={require('../images/设置切图/burn1.png')}/>
              <View style={[y.bgColor('#F2668C'), y.w100, y.h(15), y.ujc, y.uac, y.upa, y.bottom(0)]}>
                <Text style={[y.color('#fff'), y.fSize(8)]}>阅后即焚照片</Text>
              </View>
            </ImageBackground>
            <ImageBackground style={[y.bgColor('#333'), y.h(128), y.w(110), y.upr, y.mt(6)]}>
              <Image
                style={[y.w(21), y.h(24), y.upa, y.bottom(17), y.uSelfCenter]}
                source={require('../images/设置切图/burn1.png')}/>
              <View style={[y.bgColor('#F2668C'), y.w100, y.h(15), y.ujc, y.uac, y.upa, y.bottom(0)]}>
                <Text style={[y.color('#fff'), y.fSize(8)]}>阅后即焚照片</Text>
              </View>
            </ImageBackground>
          </View>
          <Text style={[y.fSize(9), y.color('#ACACAC'), y.uSelfCenter, y.mt(10)]}>长按可排序</Text>
        </ScrollView>
    }

    <View style={[y.udr, y.uac, y.uja, y.bgColor('#eee'), y.ptb(15)]}>
      <View style={[y.uac]}>
        <Image
          style={[y.size(18)]}
          source={require('../images/设置切图/upload.png')}/>
        <Text style={[y.color('#8F9AB3'), y.mt(6), y.fSize(8)]}>上传图片</Text>
      </View>
      <View style={[y.uac]}>
        <Image
          style={[y.size(18)]}
          source={require('../images/设置切图/burn.png')}/>
        <Text style={[y.color('#8F9AB3'), y.mt(6), y.fSize(8)]}>阅后即焚</Text>
      </View>
      <View style={[y.uac]}>
        <Image
          style={[y.size(18)]}
          source={require('../images/设置切图/upload.png')}/>
        <Text style={[y.color('#8F9AB3'), y.mt(6), y.fSize(8)]}>删除照片</Text>
      </View>
    </View>

  </View>
)
