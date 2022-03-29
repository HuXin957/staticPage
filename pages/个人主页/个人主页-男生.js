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
            <Image style={[y.size(17), y.mr(6)]} source={require('../images/个人主页/vip11.png')}/>
            <Text style={[y.fSize(11), y.color('#999')]}>她已获得愉悦女神称号</Text>
          </View>
        </View>
        <View style={[y.bb(8), y.pa(20), y.bdColor('#f0f2f5')]}>
          <View style={[y.udr, y.uac,]}>
            <Text style={[y.color('#333'), y.fSize(15), y.fWeight('bold')]}>动态</Text>
            <Text style={[y.fSize(12), y.color('#999'), y.uf1]}>（10）</Text>
            <View style={[y.ba(1), y.mr(12), y.bdColor('#F67C88'), y.udr, y.uac, y.radiusA(11), y.h(22), y.plr(6)]}>
              <Image
                resizeMode={'contain'}
                style={[y.size(14), y.mr(6)]}
                source={require('../images/个人主页/rrbroadcast.png')}/>
              <Text style={[y.fSize(11), y.color('#F67C88')]}>Ta正在发起广播</Text>
            </View>
            <Image style={[y.w(7), y.h(11)]} source={require('../images/我的切图/forward.png')}/>
          </View>
          <View style={[y.udr, y.uac, y.mt(16)]}>
            <Image style={[y.size(35), y.radiusA(5), y.bgColor('#333'), y.mr(10)]}/>
            <Image style={[y.size(35), y.radiusA(5), y.bgColor('#333')]}/>
          </View>
        </View>
        <View style={[y.bb(8), y.pa(20), y.bdColor('#f0f2f5')]}>
          <View style={[y.udr, y.uac,]}>
            <Text style={[y.color('#333'), y.fSize(15), y.fWeight('bold')]}>相册</Text>
            <Text style={[y.fSize(12), y.color('#999'), y.uf1]}>（10）</Text>
            <Image style={[y.w(7), y.h(11)]} source={require('../images/我的切图/forward.png')}/>
          </View>
          <View style={[y.udr, y.mt(20)]}>
            <Image style={[y.bgColor('#333'), y.size(75), y.radiusA(10)]}/>
            <View
              style={[y.size(75), y.uof,y.ml(10), y.upr,  y.bgColor('#333'), y.ba(2), y.radiusA(10), y.bdColor('#F67C88')]}>
              <View
                style={[y.w(23), y.h(14), y.upa, y.right(0), y.top(0), y.radiusBL(5), y.radiusTR(8), y.bgColor('#F67C88')]}>
                <Text style={[y.color('#fff'), y.utxc, y.fSize(9)]}>本人</Text>
              </View>
              <View style={[y.udr, y.uac, y.upa, y.h(15), y.bottom(0), y.bgColor('#F67C88'), y.w100, y.ujc]}>
                <Image source={require('../images/消息切图/mburn.png')} style={[y.w(6), y.h(8), y.mr(4)]}/>
                <Text style={[y.fSize(9), y.color('#fff')]}>阅后即焚</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[y.bb(8), y.pa(20), y.bdColor('#f0f2f5')]}>
          <Text style={[y.color('#333'), y.fSize(15), y.fWeight('bold')]}>资料</Text>
          <View style={[y.mt(10), y.udr, y.uac]}>
            <View>
              <Text style={[y.fSize(13), y.color('#333'), y.lh(30)]}>身高体重</Text>
              <Text style={[y.fSize(13), y.color('#333'), y.lh(30)]}>身高体重</Text>
              <Text style={[y.fSize(13), y.color('#333'), y.lh(30)]}>身高体重</Text>
              <Text style={[y.fSize(13), y.color('#333'), y.lh(30)]}>社交账号</Text>
              <Text style={[y.fSize(13), y.color('#333'), y.lh(30)]}>身高体重</Text>

            </View>
            <View style={[y.ml(33)]}>
              <Text style={[y.fSize(13), y.color('#666'), y.lh(30)]}>165CM / 46KG</Text>
              <Text style={[y.fSize(13), y.color('#666'), y.lh(30)]}>165CM / 46KG</Text>
              <Text style={[y.fSize(13), y.color('#666'), y.lh(30)]}>165CM / 46KG</Text>
              <Text style={[y.fSize(13), y.color('#666'), y.lh(30)]}>
                已隐藏&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Text style={[y.color('#EB4E7E'), y.fSize(11), y.utxdu]}>
                  私聊向Ta索取
                </Text>
              </Text>
              <Text style={[y.fSize(13), y.color('#666'), y.lh(30)]}>165CM / 46KG</Text>
            </View>
          </View>
        </View>
        <View style={[y.bb(8), y.pa(20), y.bdColor('#f0f2f5')]}>
          <Text style={[y.color('#333'), y.fSize(15), y.fWeight('bold')]}>评价</Text>
          <View style={[y.udr, y.uWrap, y.mt(20)]}>
            <View style={[y.bgColor('#f0f2f5'), y.radiusA(2), y.pa(4)]}>
              <Text style={[y.fSize(11)]}>好玩(1)</Text>
            </View>
            <View style={[y.bgColor('#f0f2f5'), y.radiusA(2), y.pa(4), y.ml(10)]}>
              <Text style={[y.fSize(11)]}>好玩(1)</Text>
            </View>
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
