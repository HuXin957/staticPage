import React from 'react';
import {View, Text, Image, ScrollView, StatusBar} from 'react-native';
import y from '../style';
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";

export default () => {
  StatusBar.setTranslucent(true)
  StatusBar.setBackgroundColor(0, 0, 0, 0)
  return (
    <>
      <ScrollView style={[y.bgColor('#fff')]}>
        <View style={[y.h(109), y.plr(16), y.bgColor('#333'), y.pt(43), y.udr, y.ujb]}>
          <Image style={[y.w(11), y.h(19)]} source={require('../images/个人主页/mfollow.png')}/>
          <Image style={[y.w(22), y.h(4)]} source={require('../images/个人主页/w3d.png')}/>
        </View>
        <View style={[y.pl(20), y.pb(20), y.pr(28), y.bb(8), y.bdColor('#f0f2f5')]}>
          <View style={[y.udr, y.ujb, y.mt(-20)]}>
            <View style={[y.pa(2), y.bgColor('#fff'), y.radiusA(10)]}>
              <Image style={[y.bgColor('#333'), y.size(75), y.radiusA(10)]}/>
            </View>
            <View style={[y.uac]}>
              <Image style={[y.size(70)]} source={require('../images/个人主页/follow.png')}/>
              <Text style={[y.color('#F67C88'), y.fSize(11)]}>加入喜欢</Text>
            </View>
          </View>
          <View style={[y.mt(5), y.udr, y.uac]}>
            <Text style={[y.fSize(20), y.color('#333'), y.fWeight('bold')]}>晴儿</Text>
            <Image
              resizeMode={'contain'}
              style={[y.w(7), y.h(9), y.ml(20), y.mr(4)]} source={require('../images/个人主页/greenmap.png')}/>
            <Text style={[y.fSize(12), y.color('#38CC76')]}>1.1 · km在线</Text>
          </View>
          <View style={[y.udr, y.uac, y.mt(10)]}>
            <View style={[y.plr(8), y.h(17), y.radiusA(9), y.bgColor('#F6F7FB')]}>
              <Text style={[y.fSize(10), y.color('#8188AF')]}>深圳</Text>
            </View>
            <View style={[y.plr(8), y.h(17), y.radiusA(9), y.mlr(5), y.bgColor('#F6F7FB')]}>
              <Text style={[y.fSize(10), y.color('#8188AF')]}>22岁.白羊座</Text>
            </View>
            <View style={[y.plr(8), y.h(17), y.radiusA(9), y.bgColor('#F6F7FB')]}>
              <Text style={[y.fSize(10), y.color('#8188AF')]}>模特</Text>
            </View>
          </View>
          <View style={[y.mt(10), y.udr, y.uac]}>
            <Image style={[y.size(17), y.mr(6)]} source={require('../images/个人主页/real1.png')}/>
            <Text style={[y.fSize(11), y.color('#999')]}>她通过面容识别认证真实性</Text>
          </View>
          <View style={[y.mt(5), y.udr, y.uac]}>
            <Image style={[y.size(17), y.mr(6)]} source={require('../images/个人主页/goddess11.png')}/>
            <Text style={[y.fSize(11), y.color('#999')]}>她已获得愉悦女神称号</Text>
          </View>
        </View>
        <View style={[y.pt(85), y.uac]}>
          <Image style={[y.size(70)]} source={require('../images/个人主页/lock1.png')}/>
          <Text style={[y.fSize(12), y.color('#8F9AB3'), y.mt(23)]}>Ta设置了限制，查看资料需请求Ta的同意</Text>
          <View style={[y.ba(1), y.h(40), y.w(100), y.mt(25),y.ujc, y.uac, y.radiusA(20), y.bdColor('#F1628D')]}>
            <Text style={[y.fSize(14), y.color('#F67C88')]}>申请查看</Text>
          </View>
        </View>

      </ScrollView>
      <View style={[y.bgColor('#fafafa'), y.h(60), y.ujb, y.udr, y.uac, y.pl(28), y.pr(15)]}>
        <View style={[y.udr, y.uac]}>
          <Image
            style={[y.size(15), y.mr(8)]}
            source={require('../images/个人主页/evaluate1.png')}/>
          <Text style={[y.fSize(13), y.color('#8F9AB3')]}>评价</Text>
        </View>
        <View style={[y.udr, y.uac]}>
          <Image
            style={[y.size(15), y.mr(8)]}
            source={require('../images/个人主页/gift11.png')}/>
          <Text style={[y.fSize(13), y.color('#8F9AB3')]}>送礼物</Text>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#FFC1A3', '#F1628D']}
          style={[y.radiusA(22), y.h(44), y.plr(56), y.uac, y.ujc, y.udr]}
        >
          <Image style={[y.size(14)]} source={require('../images/个人主页/private.png')}/>
          <Text style={[y.color('#fff'), y.fSize(15)]}>私聊</Text>
        </LinearGradient>
      </View>
    </>
  )
}
