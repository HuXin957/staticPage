import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import y from '../style'
import {IconText} from '../components'

export default () => (
  <View style={[y.uf1, y.upr]}>
    <View
      style={[y.upa, y.top(55), y.right(15), y.zIndex(99), y.bgColor('#fff'), y.plr(19), y.ptb(17), y.radiusA(5), y.ba(1), y.bdColor('#EEEEEE')]}>
      <View style={[y.udr, y.uac]}>
        <Image resizeMode={'contain'} style={[y.size(20), y.mr(11)]} source={require('../images/聚会/reparty.png')}/>
        <Text style={[y.fSize(14), y.color('#333')]}>发布聚会</Text>
      </View>
      <View style={[y.udr, y.uac, y.mt(20)]}>
        <Image resizeMode={'contain'} style={[y.size(20), y.mr(11)]} source={require('../images/聚会/reactivities.png')}/>
        <Text style={[y.fSize(14), y.color('#333')]}>发布聚会</Text>
      </View>
    </View>
    <View style={[y.udr, y.uac, y.bgColor('#fff'), y.upr, y.pt(16), y.plr(17), y.pb(6)]}>
      <View style={[y.udr, y.uac]}>
        <Image
          resizeMode={'contain'}
          source={require('../images/首页切图/man.png')}
          style={[y.h(22), y.w(10)]}
        />
        <Image
          resizeMode={'contain'}
          source={require('../images/首页切图/wman1.png')}
          style={[y.h(22), y.w(10)]}
        />
      </View>
      <View style={[y.udr, y.uf1, y.ujc, y.uac]}>
        <Text style={[y.color('#bbb'), y.fSize(15), y.fWeight('bold')]}>我的动态</Text>

        <View style={[y.ml(35), y.uac]}>
          <Text style={[y.color('#333'), y.fSize(18), y.fWeight('bold')]}>我的聚会</Text>
          <View style={[y.bgColor('#F1628D'), y.w(10), y.h(3), y.mt(6), y.radiusA(1)]}/>
        </View>
      </View>
      <Image
        source={require('../images/我的切图/release.png')}
        style={[y.size(15), y.mr(7)]}/>
      <Text style={[y.color('#F67C88'), y.fSize(13)]}>发布</Text>
    </View>
    <View style={[y.bgColor('#fff'), y.plr(15)]}>
      <Image resizeMode={'contain'} style={[y.h(141), y.w(345)]} source={require('../images/聚会/btheme.png')}/>

    </View>
    {/* 列表*/}
    <ScrollView style={[y.bgColor('#fff'), y.bt(8), y.bdColor('#F5F8FA')]}>
      <View style={[y.plr(15), y.bgColor('#fff'), y.pt(22), y.pb(4)]}>
        <View style={[y.udr, y.uac]}>
          <Image style={[y.bgColor('#333'), y.size(40), y.radiusA(3)]}/>
          <View style={[y.ml(11), y.uf1]}>
            <Text style={[y.color("#333"), y.fSize(14), y.fWeight('bold')]}>KE小喵咪</Text>
            <Text style={[y.color('#999'), y.fSize(10), y.mt(4)]}>20岁 ｜ 模特 ｜ 谢手座 </Text>
          </View>
          <Image style={[y.h(3), y.w(15), y.bgColor('#333')]}/>
        </View>
        <View style={[y.udr, y.uac, y.bgColor('#FCD1CA'), y.plr(12), y.upr, y.h(70), y.radiusA(5), y.mt(10)]}>
          <View style={[y.upa, y.left(208)]}>
            <Text style={[y.fSize(12), y.color('rgba(226, 97, 112, 0.23)')]}>NEEDES</Text>
            <Text style={[y.fSize(12), y.color('rgba(226, 97, 112, 0.23)')]}>YOU</Text>
            <Text style={[y.fSize(12), y.color('rgba(226, 97, 112, 0.23)')]}>TO REALIZE</Text>
          </View>
          <View style={[y.ba(1), y.bdColor('#fff'), y.ptb(2), y.plr(4), y.radiusA(1), y.bgColor('#EEE')]}>
            <Image style={[y.h(33), y.w(23), y.bgColor('#333')]}/>
          </View>
          <View style={[y.ml(10), y.uf1]}>
            <Text style={[y.color('#DC3C3C'), y.fSize(12)]}>身材最好照片</Text>
            <View style={[y.udr, y.uac]}>
              <Image style={[y.size(20), y.mr(3)]} source={require('../images/个人主页/chat/gift001.png')}/>
              <Text style={[y.fSize(14), y.color('#F85766')]}>x 3</Text>
              <Image style={[y.size(20), y.ml(13), y.mr(3)]} source={require('../images/个人主页/chat/gift001.png')}/>
              <Text style={[y.fSize(14), y.color('#F85766')]}>x 3</Text>
            </View>
          </View>
          <View style={[y.bgColor('#F85766'), y.ujc, y.uac, y.radiusA(11), y.h(21), y.w(62)]}>
            <Text style={[y.fSize(12), y.color('#fff')]}>满足Ta</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
)




