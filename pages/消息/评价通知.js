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
    <Header title={'评价消息'}/>
    <ScrollView style={[y.bgColor('#fff')]}>
      <MsgItem/>
      <MsgItem/>
      <View style={[y.udr, y.pl(15), y.pt(15), y.bgColor('#fff')]}>
        <Image source={require('../images/消息切图/evaluatemsg.png')} style={[y.size(50), y.radiusA(10)]}/>
        <View style={[y.ml(15), y.bb(1), y.pr(20), y.pt(9), y.bdColor('#F3F4F7'), y.uf1]}>
          <Text style={[y.color('#333'), y.fSize(13)]}>
            你上诉的评价：
            <Text style={[y.color('#EB4E7E')]}>不友好</Text>
          </Text>
          <Text style={[y.color('#333'), y.fSize(13)]}>
            上诉成功，我们将为你撤消此次评价。
          </Text>
          <Text style={[y.fSize(12), y.color('#ccc'), y.mtb(14)]}>5分钟以前</Text>
        </View>
      </View>
      <View style={[y.udr, y.pl(15), y.pt(15), y.bgColor('#fff')]}>
        <Image source={require('../images/消息切图/evaluatemsg.png')} style={[y.size(50), y.radiusA(10)]}/>
        <View style={[y.ml(15), y.bb(1), y.pr(20), y.pt(9), y.bdColor('#F3F4F7'), y.uf1]}>
          <Text style={[y.color('#333'), y.fSize(13)]}>
            跟你联系过的用户(匿名)对你进行了评价：
          </Text>
          <Text style={[y.color('#EB4E7E'), y.fSize(13)]}>不友好</Text>
          <Text style={[y.color('#333'), y.fSize(13)]}>
            上诉成功，我们将为你撤消此次评价。
          </Text>
          <View style={[y.udr, y.uac, y.mtb(14)]}>
            <Text style={[y.fSize(12), y.color('#ccc'), y.uf1]}>5分钟以前</Text>
            <Text style={[y.color('#EB5080'), y.fSize(12)]}>申请上诉</Text>
            <Image style={[y.h(10), y.w(6), y.ml(5)]} source={require('../images/消息切图/xrxx.png')}/>
          </View>
        </View>
      </View>
      <View style={[y.udr, y.pl(15), y.pt(15), y.bgColor('#fff')]}>
        <Image source={require('../images/消息切图/evaluatemsg.png')} style={[y.size(50), y.radiusA(10)]}/>
        <View style={[y.ml(15), y.bb(1), y.pr(20), y.pt(9), y.bdColor('#F3F4F7'), y.uf1]}>
          <Text style={[y.color('#333'), y.fSize(13)]}>
            跟你联系过的用户(匿名)对你进行了评价：
          </Text>
          <Text style={[y.color('#EB4E7E'), y.fSize(13)]}>不友好</Text>
          <Text style={[y.color('#333'), y.fSize(13)]}>
            上诉成功，我们将为你撤消此次评价。
          </Text>
          <View style={[y.udr, y.uac, y.mtb(14)]}>
            <Text style={[y.fSize(12), y.color('#ccc'), y.uf1]}>5分钟以前</Text>
            <Text style={[y.color('#38CC76'), y.fSize(12)]}>已上诉</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
)

const MsgItem = () => (
  <View style={[y.udr, y.pl(15), y.pt(15), y.bgColor('#fff')]}>
    <Image style={[y.bgColor('#333'), y.size(50), y.radiusA(10)]}/>
    <View style={[y.ml(15), y.bb(1), y.pr(20), y.pt(9), y.bdColor('#F3F4F7'), y.uf1]}>
      <Text style={[y.color('#333'), y.fSize(13)]}>
        你对
        <Text style={[y.color('#EB4E7E')]}>Areres</Text>
        的印象怎么样？给她一个评价吧~
      </Text>
      <View style={[y.udr, y.uac, y.mtb(14)]}>
        <Text style={[y.fSize(12), y.color('#ccc'), y.uf1]}>5分钟以前</Text>
        <Text style={[y.color('#EB5080'), y.fSize(12)]}>去评价</Text>
        <Image style={[y.h(10), y.w(6), y.ml(5)]} source={require('../images/消息切图/xrxx.png')}/>
      </View>
    </View>
  </View>
)
