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

export default () => (
  <>
    <ScrollView style={[y.bgColor('#f0f2f5')]}>
      <View style={[y.h(44), y.bgColor('#fff'), y.udr, y.uac, y.mt(3), y.pr(18), y.pl(15)]}>
        <Image
          resizeMode={'contain'}
          style={[y.w(8), y.h(13)]} source={require('../images/我的切图/back.png')}/>
        <Image style={[y.size(33), y.radiusA(5), y.bgColor('#333'), y.ml(11), y.mr(4)]}/>
        <View style={[y.uf1]}>
          <View style={[y.udr, y.uac]}>
            <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>晴儿</Text>
            <Image style={[y.h(14), y.w(40), y.ml(6)]} source={require('../images/我的切图/goddess.png')}/>
          </View>
          <Text style={[y.fSize(9), y.color('#666')]}>深圳市 22岁 白羊座</Text>
        </View>
        <View style={[y.udr, y.uac, y.radiusA(10), y.h(20), y.plr(10), y.bgColor('#F1628D')]}>
          <Image
            resizeMode={'contain'}
            style={[y.size(10)]} source={require('../images/个人主页/mfollow.png')}/>
          <Text style={[y.fSize(8), y.color('#F5F8FA'), y.ml(4)]}>关注</Text>
        </View>
      </View>
      <View style={[y.pa(12)]}>
        <ImageBackground style={[y.bgColor('#333'), y.radiusA(5), y.h(125), y.pt(14), y.pl(23)]}>
          <Text style={[y.fSize(12), y.color('#ED4D9A')]}>心愿回报</Text>
          <View style={[y.udr, y.uac, y.mt(8)]}>
            <Image style={[y.size(9), y.mr(1)]} source={require('../images/个人主页/poto1.png')}/>
            <Text style={[y.color('#ED61A3'), y.fSize(8)]}>我的素颜照片</Text>
          </View>
          <Text style={[y.fSize(12), y.color('#ED4D9A'), y.mt(20)]}>心愿礼物</Text>
          <View style={[y.udr, y.uac, y.mt(8)]}>
            <Image style={[y.size(10), y.mr(3)]} source={require('../images/个人主页/mgift.png')}/>
            <Text style={[y.color('#ED61A3'), y.fSize(8)]}>X 3</Text>
          </View>
        </ImageBackground>
        <Text style={[y.fSize(15), y.color('#333'), y.mt(22), y.fWeight('bold'), y.ml(4)]}>满足Ta的心愿</Text>
        <View style={[y.pa(14),y.pr(20), y.bgColor('#FFCBCB'), y.minh(365), y.radiusA(5), y.mt(11)]}>
          <View style={[y.udr,y.uac]}>
            <Image style={[y.bgColor('#333'), y.size(35), y.radiusA(18)]}/>
            <View style={[y.udr,y.uac,y.ml(10),y.bb(1),y.bdColor('#FDA4A4'),y.pb(8),y.uf1]}>
              <Text style={[y.fSize(9),y.color('#4E4D4D')]}>财富王子送Ta </Text>
              <Image style={[y.size(10), y.mr(3)]} source={require('../images/个人主页/mgift.png')}/>
              <Text style={[y.color('#ED61A3'), y.fSize(8),y.uf1]}>X 3</Text>
              <Text style={[y.fSize(8),y.color('#757575')]}>20分钟前</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    <View style={[y.bgColor('#fafafa'), y.h(60), y.uja, y.udr, y.uac, y.pl(28), y.pr(15)]}>
      <View style={[y.udr, y.uac]}>
        <Image
          style={[y.size(15), y.mr(8)]}
          source={require('../images/个人主页/evaluate1.png')}/>
        <Text style={[y.fSize(13), y.color('#8F9AB3')]}>评价</Text>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#FFC1A3', '#F1628D']}
        style={[y.radiusA(22), y.h(30), y.w(207), y.uac, y.ujc, y.udr]}
      >
        <Text style={[y.color('#fff'), y.fSize(12)]}>我也来满足Ta的心愿</Text>
      </LinearGradient>
    </View>
  </>
)
