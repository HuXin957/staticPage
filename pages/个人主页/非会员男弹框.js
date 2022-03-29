import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import y from '../style';

export default () => (
  <Modal
    visible={true}
    transparent
  >
    <View style={[y.bgColor('rgba(0,0,0,.5)'), y.ujc, y.uac, y.uf1,y.plr(38)]}>
      <View style={[y.bgColor('#fff'),y.radiusA(10),y.pb(16), y.upr, y.uac,y.w100,y.plr(35)]}>
        <Image style={[y.size(11),y.upa,y.top(13),y.right(16)]} source={require('../images/个人主页/off11.png')}/>
        <Text style={[y.mt(26),y.fSize(17),y.color('#333'),y.fWeight('bold')]}>你今天还能查看3位女士</Text>
        <Text style={[y.mt(39),y.fSize(13),y.utxc,y.color('#666')]}>
          非会员用户每天只能查看15位女士，
          升级会员可以免费查看
        </Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#FFC1A3', '#F1628D']}
          style={[y.h(40), y.plr(30), y.mt(28),y.ujc, y.uac, y.radiusA(20)]}
        >
          <Text style={[y.color('#fff'), y.fSize(15), y.fWeight('bold')]}>升级会员</Text>
        </LinearGradient>
      </View>
    </View>
  </Modal>
)
