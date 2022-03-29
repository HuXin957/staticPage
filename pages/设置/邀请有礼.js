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
import LinearGradient from "react-native-linear-gradient";

export default () => {
  StatusBar.setTranslucent(true)
  StatusBar.setBackgroundColor(0, 0, 0, 0)
  return (
    <ScrollView style={[y.bgColor('#F5F5F5')]}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#F2D9BB', '#F5F5F5']}
        style={[y.w100, y.h(224)]}
      >
        <Text style={[y.color('#5B3400'), y.fSize(40), y.fWeight('bold'), y.utxc, y.mt(51)]}>邀请有礼</Text>
      </LinearGradient>
      <View style={[y.uf1, y.mt(-90)]}>
        <ImageBackground
          style={[y.h(187), y.w100]}
          source={require('../images/设置切图/member.png')}>
          <View style={[y.udr, y.uac, y.upr, y.uja, y.mt(67)]}>
            <View style={[y.uac]}>
              <Text style={[y.color('#F8DBB5'), y.fSize(11)]}>我的推广用户</Text>
              <Text style={[y.color('#E48C17'), y.fSize(12)]}>8</Text>
            </View>
            <View style={[y.uac]}>
              <Text style={[y.color('#F8DBB5'), y.fSize(11)]}>我的总收益</Text>
              <Text style={[y.color('#E48C17'), y.fSize(12)]}>868元</Text>
            </View>
          </View>
          <View style={[y.udr, y.uac, y.ml(63), y.mt(23)]}>
            <Text style={[y.color('#E0C49F'), y.fSize(11)]}>邀请码：</Text>
            <Text style={[y.color('#F8F7F6'), y.fSize(12)]}>8688478</Text>
            <View style={[y.ba(1), y.bdColor('#B0A79F'), y.h(16), y.plr(12), y.radiusA(8), y.ml(8)]}>
              <Text style={[y.fSize(9), y.color('#9C9791')]}>复制</Text>
            </View>
          </View>
          <View
            style={[y.h(24), y.w(72), y.ujc, y.uac, y.upa, y.bottom(30), y.right(30), y.radiusA(12), y.ba(1), y.bdColor('#B0A79F')]}>
            <Text style={[y.color('#9C9791'), y.fSize(11)]}>查看详情</Text>
          </View>
        </ImageBackground>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#151111', '#2F2320']}
          style={[y.h(40), y.ujc, y.uac, y.radiusA(20), y.mlr(15), y.mt(9)]}
        >
          <Text style={[y.fSize(15), y.color('#FDE3C4')]}>立即邀请</Text>
        </LinearGradient>
        <View style={[y.udr, y.uac, y.mt(30), y.mb(24)]}>
          <View style={[y.h(1), y.bgColor('#CCC'), y.uf1]}/>
          <Text style={[y.fSize(14), y.color('#333'), y.mlr(28)]}>邀请规则</Text>
          <View style={[y.h(1), y.bgColor('#CCC'), y.uf1]}/>
        </View>
        <View style={[y.bgColor('#fff'), y.radiusA(5), y.pa(9), y.mlr(17)]}>
          <View style={[y.bgColor('#F2E0C9'), y.w(235), y.radiusA(3), y.pa(10)]}>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>男士成功邀请Ta人注册</Text>
          </View>
          <View style={[y.mt(16), y.ml(10), y.udr, y.uac]}>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>1，您将获取邀请的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>男士</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>每笔充值的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>15%</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>现金奖励</Text>
          </View>
          <View style={[y.mt(9), y.ml(10), y.udr, y.uac]}>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>2，您将获取邀请的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>男士</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>每笔充值的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>15%</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>现金奖励</Text>
          </View>
          <View style={[y.mt(9), y.ml(10), y.udr, y.uac]}>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>3，您将获取邀请的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>男士</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>每笔充值的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>15%</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>现金奖励</Text>
          </View>
          <View style={[y.bgColor('#F2E0C9'), y.w(235),y.mt(16) ,y.radiusA(3), y.pa(10)]}>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>男士成功邀请Ta人注册</Text>
          </View>
          <View style={[y.mt(16), y.ml(10), y.udr, y.uac]}>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>1，您将获取邀请的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>男士</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>每笔充值的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>15%</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>现金奖励</Text>
          </View>
          <View style={[y.mt(9), y.ml(10), y.udr, y.uac]}>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>2，您将获取邀请的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>男士</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>每笔充值的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>15%</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>现金奖励</Text>
          </View>
          <View style={[y.mt(9), y.ml(10), y.udr, y.uac]}>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>3，您将获取邀请的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>男士</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>每笔充值的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>15%</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>现金奖励</Text>
          </View>
          {/*二级分销*/}
          <View style={[y.bgColor('#CCB394'), y.w(235),y.mt(16) ,y.radiusA(3), y.pa(10)]}>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>二级分销</Text>
          </View>
          <Text style={[y.fSize(8),y.mt(10),y.color('#938E90'),y.ml(10)]}>您成功邀请的用户为您的一级用户，您的一级用户推广的用户为您的二级用户；</Text>
          <View style={[y.mt(16), y.ml(10), y.udr, y.uac]}>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>1，您将获取邀请的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>男士</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>每笔充值的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>15%</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>现金奖励</Text>
          </View>
          <View style={[y.mt(9), y.ml(10), y.udr, y.uac]}>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>2，您将获取邀请的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>男士</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>每笔充值的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>15%</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>现金奖励</Text>
          </View>
          <View style={[y.mt(9), y.ml(10), y.udr, y.uac]}>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>3，您将获取邀请的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>男士</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>每笔充值的</Text>
            <Text style={[y.color('#F1628D'), y.fSize(10)]}>15%</Text>
            <Text style={[y.fSize(10), y.color('#4E4E4E')]}>现金奖励</Text>
          </View>
          <Text style={[y.color('#F1628D'),y.fSize(10),y.mt(19),y.mb(10)]}>注意事项</Text>
          <Text style={[y.color('#565656'),y.fSize(10),y.mt(19),y.mb(10)]}>如在邀请有礼中进行恶意刷级邀请等作弊行为，核实后奖收回相应奖励。</Text>
        </View>
      </View>
    </ScrollView>
  )
}
