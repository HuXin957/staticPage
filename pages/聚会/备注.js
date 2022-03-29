import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import y from '../style'
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.uf1, y.bgColor('#F5F8FA')]}>
    <Header title={'备注'}/>
    <Text style={[y.mt(11), y.mb(13), y.ml(16), y.fSize(12), y.color('#666')]}>备注名</Text>
    <View style={[y.pa(16),  y.bgColor('#fff')]}>
      <Text style={[y.fSize(14), y.color('#333')]}>小笨猪</Text>
    </View>
    <Text style={[y.mt(11), y.mb(13), y.ml(16), y.fSize(12), y.color('#666')]}>描述</Text>
    <View style={[y.pa(16),  y.bgColor('#fff')]}>
      <Text style={[y.fSize(14), y.color('#ccc')]}>添加更多备注信息</Text>
    </View>
  </View>
)
