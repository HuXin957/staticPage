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
import LinearGradient from 'react-native-linear-gradient';
import y from '../style'
import {Header, IconText, Item} from "../components";

export default () => (
  <View style={[y.uf1]}>
    {/*head*/}
    <View style={[y.ptb(15), y.bgColor('#fff'), y.ujc, y.uac, y.upr]}>
      <Image
        source={require('../images/我的切图/back.png')}
        style={[y.w(11), y.h(19), y.upa, y.left(16)]}/>
      <View style={[y.uac]}>
        <Text style={[y.color('#333'), y.fSize(16), y.fWeight('bold')]}>编辑资料</Text>
        <Text style={[y.color('#999'), y.fSize(10)]}>已完成75%</Text>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#FFC1A3', '#F1628D']}
        style={[y.h(25), y.w(54), y.upa, y.right(15), y.ujc, y.radiusA(5)]}
      >
        <Text style={[y.color('#fff'), y.fSize(12), y.utxc]}>保存</Text>
      </LinearGradient>
    </View>
    <ScrollView style={[y.bgColor('#fff')]}>
      <View style={[y.pa(12), y.bgColor('#F5F8FA')]}>
        <Text style={[y.color('#999'), y.fSize(12)]}>基本资料(必填)</Text>
      </View>
      <View style={[y.udr, y.uac, y.plr(16), y.ptb(10)]}>
        <View style={[y.uf1]}>
          <Text style={[y.color('#333'), y.fSize(14)]}>头像</Text>
          <Text style={[y.fSize(12), y.color('#999')]}>本月可改1次</Text>
        </View>
        <Image style={[y.size(50), y.bgColor('#333'), y.mr(12), y.radiusA(5)]}/>
        <Image
          source={require('../images/我的切图/forward.png')}
          style={[y.h(11), y.w(6)]}/>
      </View>
      <Item title={'昵称'} value={'晴儿'}/>
      <Item title={'常驻城市'} value={'深证市'}/>
      <Item title={'生日'} value={'1989年09月05日'}/>
      <Item title={'职业'} value={'保险'}/>
      <Item title={'日常爱好'} value={'社交聚会'}/>
      <Item title={'期望对象'} value={'大方'}/>
      <View style={[y.pa(12), y.bgColor('#F5F8FA')]}>
        <Text style={[y.color('#999'), y.fSize(12)]}>更多信息(选填)</Text>
      </View>
      <Item title={'身高体重'} value={'175CM / 65KG '}/>
      <Item title={'个人介绍'} value={'介绍一下我自己'}/>
    </ScrollView>
  </View>
)
