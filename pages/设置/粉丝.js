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

export default () => (
  <View style={[y.uf1, y.bgColor('#F5F8FA')]}>
    <Header title={'我的粉丝'} style={[y.bb(1), y.bdColor('#F5F8FA')]}/>
    <Item/>
    <Item isFocus/>
    <Item/>
    <Text style={[y.color('#ACACAC'), y.fSize(9), y.uSelfCenter, y.mt(21)]}>我已经到底了~</Text>
  </View>
)

const Item = ({isFocus}) => (
  <View style={[y.pl(15), y.pt(10), y.bdColor('#F3F4F7'), y.bgColor('#fff'), y.udr]}>
    <Image style={[y.bgColor('#333'), y.size(50), y.radiusA(10)]}/>
    <View style={[y.bb(1), y.pb(23), y.uf1, y.ml(15), y.bdColor('#F3F4F7'), y.h100]}>
      <View style={[y.udr, y.uac, y.pr(20)]}>
        <View style={[y.udr, y.uac, y.uf1]}>
          <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>梦瑶</Text>
          <Image
            resizeMode={'contain'}
            style={[y.w(40), y.h(17), y.ml(8)]}
            source={require('../images/我的切图/goddess.png')}/>
        </View>
        {isFocus ?
          <View style={[y.ba(1), y.bdColor('#CECBCB'), y.ujc, y.uac, y.radiusA(11), y.h(21), y.w(62)]}>
            <Text style={[y.fSize(9), y.color('#8C8B8B')]}>未关注</Text>
          </View>
          :
          <View style={[y.bgColor('#F85766'), y.uac, y.radiusA(11), y.h(21), y.w(62)]}>
            <Text style={[y.fSize(9), y.color('#fff')]}>
              <Text style={[y.fSize(12)]}>+ </Text>
              回关
            </Text>
          </View>
        }
      </View>
      <Text style={[y.fSize(10), y.color('#8F9AB3'), y.mt(7)]}>深圳市 · 26岁天秤座 · 学生</Text>
    </View>
  </View>
)
