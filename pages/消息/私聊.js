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

export default () => (
  <View style={[y.uf1, y.bgColor('#fff')]}>
    <View style={[y.upr, y.udr, y.ujc, y.uac, y.pb(20), y.pt(10)]}>
      <View style={[y.mr(28), y.uac]}>
        <Text style={[y.fSize(18), y.color('#333'), y.fWeight('bold')]}>私聊</Text>
        <View style={[y.h(3), y.w(10), y.mt(4), y.bgColor('#F1628D'), y.radiusA(1)]}/>
      </View>
      <Text style={[y.color('#bbb'), y.fSize(15), y.fWeight('bold')]}>通知</Text>

      <Image style={[y.upa, y.right(15), y.size(19)]} source={require('../images/我的切图/set.png')}/>
    </View>
    <ScrollView>
      <Message
        img={require('../images/消息切图/mandef.png')}
        title={'梦瑶'}
        content={'早上好'}
        number={12}
        time={'5分钟以前'}
      />
      <Message
        isOnline
        img={require('../images/消息切图/wmandef.png')}
        title={'梦瑶'}
        content={'早上好'}
        number={12}
        time={'5分钟以前'}
      />
    </ScrollView>
  </View>
)

const Message = ({img, title, content, isOnline, time, number}) => (
  <View style={[y.udr, y.pl(15), y.pt(9)]}>
    <View style={[y.upr]}>
      <Image style={[y.size(50)]} source={img}/>
      {
        isOnline ?
          <View
            style={[y.size(8), y.radiusA(4), y.upa, y.right(0), y.top(0), y.ba(1), y.bdColor('#fff'), y.bgColor('#8DF48F')]}/>
          : null
      }
    </View>
    <View style={[y.ml(17), y.uf1, y.pr(14), y.pt(5), y.bb(1), y.bdColor('#F3F4F7')]}>
      <View style={[y.udr, y.uac, y.ujb]}>
        <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>{title}</Text>
        <Text style={[y.color('#ccc'), y.fSize(10)]}>{time}</Text>
      </View>
      <View style={[y.udr, y.uac, y.uf1, y.mtb(11)]}>
        <Text numberOfLines={1} style={[y.color('#A2A2B8'), y.fSize(12), y.uf1]}>{content}</Text>
        {number ?
          <View style={[y.h(14), y.plr(5), y.bgColor('#FA5454'), y.radiusA(7)]}>
            <Text style={[y.color('#fff'), y.fSize(10)]}>{number}</Text>
          </View>
          : null}
      </View>
    </View>
  </View>
)
