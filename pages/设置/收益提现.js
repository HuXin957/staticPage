import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import y from '../style'
import {Header} from "../components";
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.uf1, y.bgColor('#F5F8FA')]}>
    <Header title={'收益提现'}>
      <Text style={[y.upa, y.right(17), y.fSize(8), y.color('#737373')]}>提现记录</Text>
    </Header>
    <View style={[y.plr(15), y.pt(10)]}>
      <View style={[y.bgColor('#fff'), y.pa(14), y.radiusA(5)]}>
        <Text style={[y.color('#333'), y.fSize(12), y.fWeight('bold')]}>提现金额</Text>
        <View style={[y.mt(17), y.udr, y.uac, y.bb(1), y.bdColor('#ccc'), y.pl(11), y.pb(9)]}>
          <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>￥</Text>
          <Text style={[y.color('#D3D3D3'), y.fSize(12), y.ml(7)]}>单笔最低提现100元</Text>
        </View>
        <View style={[y.udr, y.uac, y.ujb, y.pl(11), y.mt(17)]}>
          <Text style={[y.fSize(12), y.color('#7F7F7F')]}>当前可提现金额109元</Text>
          <Text style={[y.fSize(12), y.color('#F2638D')]}>全部提现</Text>
        </View>
      </View>
      <View style={[y.bgColor('#fff'), y.radiusA(5), y.mt(10)]}>
        <View style={[y.udr, y.uac, y.pa(15), y.bb(1), y.bdColor('#F5F8FA')]}>
          <Image
            resizeMode={'contain'}
            style={[y.size(17)]}
            source={require('../images/设置切图/zfb.png')}/>
          <Text style={[y.color('#464646'), y.ml(6), y.fSize(12), y.uf1]}>支付宝账号</Text>
          <Text style={[y.fSize(12), y.color('#3264F1')]}>绑定账号</Text>
        </View>
        <View style={[y.udr, y.uac, y.pa(15)]}>
          <Image
            resizeMode={'contain'}
            style={[y.size(17)]}
            source={require('../images/设置切图/wx.png')}/>
          <Text style={[y.color('#464646'), y.ml(6), y.fSize(12), y.uf1]}>微信账号</Text>
          <Text style={[y.fSize(12), y.color('#3264F1')]}>绑定账号</Text>
        </View>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#FFC1A3', '#F1628D']}
        style={[y.w(250), y.uSelfCenter, y.mt(32), y.mb(8), y.radiusA(20), y.h(29), y.uac, y.ujc]}
      >
        <Text style={[y.color('#fff'), y.fSize(15)]}>发起提现</Text>
      </LinearGradient>
      <Text style={[y.color('#A0A0A0'), y.uSelfCenter, y.fSize(8)]}>发起提现后将在5个工作日内向你的账号转账（节假日顺延）</Text>
    </View>
    <Modal
      visible={true}
      transparent
    >
      <View style={[y.bgColor('rgba(0,0,0,.5)'), y.uje, y.uf1]}>
        <View style={[y.bgColor('#fff'), y.radiusTL(15), y.radiusTR(15)]}>
          <View style={[y.ptb(15), y.bb(1), y.uac, y.bdColor('#F1EFEF')]}>
            <Text style={[y.fSize(12), y.color('#494949')]}>绑定支付宝</Text>
          </View>
          <View style={[y.plr(68), y.ptb(22)]}>
            <View style={[y.ba(1), y.h(28), y.plr(10), y.ujc, y.bdColor('#A0A0A0')]}>
              <Text style={[y.color('#D3D3D3'), y.fSize(10)]}>请填写你的支付宝账号</Text>
            </View>
            <View style={[y.ba(1), y.h(28), y.mt(20), y.plr(10), y.ujc, y.bdColor('#A0A0A0')]}>
              <Text style={[y.color('#D3D3D3'), y.fSize(10)]}>请填写你的真实名字</Text>
            </View>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#FFC1A3', '#F1628D']}
              style={[y.mt(35), y.radiusA(20), y.h(29), y.uac, y.ujc]}
            >
              <Text style={[y.color('#fff'), y.fSize(14)]}>确定</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </Modal>
  </View>
)
