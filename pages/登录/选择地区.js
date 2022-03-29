import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  StatusBar,
  TextInput
} from 'react-native';
import y from '../style'
import {Header, IconText, Item} from "../components";


export default () => {
  StatusBar.setBackgroundColor('#F3F4F6')
  return (
    <View style={[y.upr]}>
      <Header title={'选择地区'} style={[y.bgColor('#F3F4F6')]}/>
      <ScrollView>
        <View style={[y.plr(14), y.pb(9), y.bgColor('#F3F4F6')]}>
          <View style={[y.bgColor('#fff'), y.mb(15), y.udr, y.uac, y.radiusA(5), y.h(32), y.plr(14)]}>
            <Image
              style={[y.size(12)]}
              source={require('../images/登录注册切图/soso.png')}/>
            <TextInput
              placeholder={'搜索地区'}
              placeholderTextColor={'#999'}
              style={[y.pa(0), y.ml(11)]}/>
          </View>
          <Text style={[y.color('#999'), y.fSize(12)]}>热门国家和地区</Text>
        </View>
        <Country name={'中国'} phone={'+86'}/>
        <Country name={'中国'} phone={'+86'}/>
        <Country name={'中国'} phone={'+86'}/>
        <View style={[y.pa(12), y.bgColor('#F3F4F6')]}>
          <Text style={[y.color('#999'), y.fSize(12)]}>A</Text>
        </View>
        <Country name={'中国'} phone={'+86'}/>
        <Country name={'中国'} phone={'+86'}/>
        <Country name={'中国'} phone={'+86'}/>
        <View style={[y.pa(12), y.bgColor('#F3F4F6')]}>
          <Text style={[y.color('#999'), y.fSize(12)]}>B</Text>
        </View>
        <Country name={'中国'} phone={'+86'}/>
        <Country name={'中国'} phone={'+86'}/>
        <Country name={'中国'} phone={'+86'}/>
        <View style={[y.pa(12), y.bgColor('#F3F4F6')]}>
          <Text style={[y.color('#999'), y.fSize(12)]}>C</Text>
        </View>
        <Country name={'中国'} phone={'+86'}/>
        <Country name={'中国'} phone={'+86'}/>
        <Country name={'中国'} phone={'+86'}/>
      </ScrollView>
      <View style={[y.upa, y.right(6), y.top(180)]}>
        <View style={[y.bgColor('#3B82FF'), y.size(16), y.ujc, y.uac, y.radiusA(8)]}>
          <Text style={[y.color('#fff'), y.fSize(10)]}>A</Text>
        </View>
        <View style={[ y.size(16), y.ujc, y.uac, y.radiusA(8)]}>
          <Text style={[y.color('#333'), y.fSize(10)]}>B</Text>
        </View>
        <View style={[ y.size(16), y.ujc, y.uac, y.radiusA(8)]}>
          <Text style={[y.color('#333'), y.fSize(10)]}>C</Text>
        </View>
        <View style={[ y.size(16), y.ujc, y.uac, y.radiusA(8)]}>
          <Text style={[y.color('#333'), y.fSize(10)]}>D</Text>
        </View>
        <View style={[ y.size(16), y.ujc, y.uac, y.radiusA(8)]}>
          <Text style={[y.color('#333'), y.fSize(10)]}>D</Text>
        </View>
        <View style={[ y.size(16), y.ujc, y.uac, y.radiusA(8)]}>
          <Text style={[y.color('#333'), y.fSize(10)]}>D</Text>
        </View>
        <View style={[ y.size(16), y.ujc, y.uac, y.radiusA(8)]}>
          <Text style={[y.color('#333'), y.fSize(10)]}>D</Text>
        </View>
        <View style={[ y.size(16), y.ujc, y.uac, y.radiusA(8)]}>
          <Text style={[y.color('#333'), y.fSize(10)]}>D</Text>
        </View>
        <View style={[ y.size(16), y.ujc, y.uac, y.radiusA(8)]}>
          <Text style={[y.color('#333'), y.fSize(10)]}>D</Text>
        </View>
        <View style={[ y.size(16), y.ujc, y.uac, y.radiusA(8)]}>
          <Text style={[y.color('#333'), y.fSize(10)]}>D</Text>
        </View>
        <View style={[y.size(16), y.ujc, y.uac, y.radiusA(8)]}>
          <Text style={[y.color('#333'), y.fSize(10)]}>D</Text>
        </View>
      </View>
    </View>
  )
}

const Country = ({name, phone}) => (
  <View style={[y.pl(15), y.pr(25), y.ptb(12), y.udr, y.ujb]}>
    <Text style={[y.color('#333'), y.fSize(14)]}>{name}</Text>
    <Text style={[y.color('#333'), y.fSize(14)]}>{phone}</Text>
  </View>
)
