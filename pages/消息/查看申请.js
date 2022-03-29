import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import y from '../style';
import {Header} from "../components";

export default () => (
  <View style={[y.uf1]}>
    <Header title={'查看申请'}/>
    <ScrollView style={[y.bgColor('#fff')]}>
      {/*一*/}
      <View style={[y.udr, y.pt(15), y.pl(15)]}>
        <Image style={[y.bgColor('#333'), y.size(50), y.radiusA(10)]}/>
        <View style={[y.ml(15), y.pr(20), y.uf1, y.pt(5), y.pb(15), y.bb(1), y.bdColor('#F3F4F7')]}>
          <View style={[y.udr, y.uac]}>
            <Text style={[y.color('#EB4E7E'), y.fSize(13)]}>浪子回头</Text>
            <Text style={[y.color('#333'), y.fSize(13)]}> 请求查看你的个人主页</Text>
          </View>
          <View
            style={[y.size(75), y.uof, y.upr, y.mt(17), y.bgColor('#333'), y.ba(2), y.radiusA(10), y.bdColor('#F67C88')]}>
            <View
              style={[y.w(23), y.h(14), y.upa, y.right(0), y.top(0), y.radiusBL(5), y.radiusTR(8), y.bgColor('#F67C88')]}>
              <Text style={[y.color('#fff'), y.utxc, y.fSize(9)]}>本人</Text>
            </View>
            <View style={[y.udr, y.uac, y.upa, y.h(15), y.bottom(0), y.bgColor('#F67C88'), y.w100, y.ujc]}>
              <Image source={require('../images/消息切图/mburn.png')} style={[y.w(6), y.h(8), y.mr(4)]}/>
              <Text style={[y.fSize(9), y.color('#fff')]}>阅后即焚</Text>
            </View>
          </View>
          <View style={[y.udr, y.uac, y.mt(13), y.mb(18)]}>
            <Text style={[y.fSize(12), y.color('#ccc'), y.uf1]}>17小时前</Text>
            <Text style={[y.color('#EB4E7E'), y.fSize(12)]}>Ta的主页</Text>
            <Image source={require('../images/消息切图/xrxx.png')} style={[y.h(10), y.w(6), y.ml(5)]}/>
          </View>
          <View style={[y.udr, y.uac]}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#FFC1A3', '#F1628D']}
              style={[y.h(30), y.plr(17), y.radiusA(5), y.ujc]}
            >
              <Text style={[y.color('#fff'), y.fSize(12)]}>允许(有效期15天)</Text>
            </LinearGradient>
            <View style={[y.h(30), y.plr(20), y.ml(10), y.ujc, y.radiusA(5), y.ba(1), y.bdColor('#EEE')]}>
              <Text style={[y.fSize(12), y.color('#999')]}>拒绝</Text>
            </View>
          </View>
        </View>
      </View>
      {/*  二*/}
      <View style={[y.udr, y.pt(15), y.pl(15)]}>
        <Image style={[y.bgColor('#333'), y.size(50), y.radiusA(10)]}/>
        <View style={[y.ml(15), y.pr(20), y.uf1, y.pt(5), y.pb(15), y.bb(1), y.bdColor('#F3F4F7')]}>
          <View style={[y.udr, y.uac]}>
            <Text style={[y.color('#EB4E7E'), y.fSize(13)]}>浪子回头</Text>
            <Text style={[y.color('#333'), y.fSize(13)]}> 请求查看你的个人主页</Text>
          </View>
          <View
            style={[y.size(75), y.uof, y.upr, y.mt(17), y.bgColor('#333'), y.ba(2), y.radiusA(10), y.bdColor('#ccc')]}>
            <View
              style={[y.w(23), y.h(14), y.upa, y.right(0), y.top(0), y.radiusBL(5), y.radiusTR(8), y.bgColor('#ccc')]}>
              <Text style={[y.color('#fff'), y.utxc, y.fSize(9)]}>本人</Text>
            </View>
            <View style={[y.udr, y.uac, y.upa, y.h(15), y.bottom(0), y.bgColor('#ccc'), y.w100, y.ujc]}>
              <Image source={require('../images/消息切图/mburn.png')} style={[y.w(6), y.h(8), y.mr(4)]}/>
              <Text style={[y.fSize(9), y.color('#fff')]}>阅后即焚</Text>
            </View>
          </View>
          <View style={[y.udr, y.uac, y.mt(13), y.mb(18)]}>
            <Text style={[y.fSize(12), y.color('#ccc'), y.uf1]}>17小时前</Text>
            <Text style={[y.color('#EB4E7E'), y.fSize(12)]}>Ta的主页</Text>
            <Image source={require('../images/消息切图/xrxx.png')} style={[y.h(10), y.w(6), y.ml(5)]}/>
          </View>
          <Text style={[y.color('#38CC76'), y.fSize(12)]}>已通过请求</Text>
        </View>
      </View>
    </ScrollView>
  </View>

)
