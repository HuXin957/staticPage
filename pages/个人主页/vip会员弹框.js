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
    <View style={[y.bgColor('rgba(0,0,0,.5)'), y.uje, y.uf1, y.pb(46), y.plr(10)]}>
      <View style={[y.bgColor('#fff'), y.pb(33), y.radiusA(10)]}>
        <Image style={[y.h(19), y.w(80), y.uSelfCenter, y.mt(21)]} source={require('../images/个人主页/viptit.png')}/>
        <View style={[y.udr, y.uac, y.ujc, y.mt(30)]}>
          <View style={[y.size(38), y.ujc, y.uac, y.radiusA(19), y.ba(1), y.bdColor('#F3C050')]}>
            <Image style={[y.w(12), y.h(16)]} source={require('../images/个人主页/vip/viplock01.png')}/>
          </View>
          <View style={[y.size(50), y.mlr(30), y.bgColor('#F3C050'), y.ujc, y.uac, y.radiusA(25)]}>
            <Image style={[y.size(28)]} source={require('../images/个人主页/vip/vipparty02.png')}/>
          </View>
          <View style={[y.size(38), y.ujc, y.uac, y.radiusA(19), y.ba(1), y.bdColor('#F3C050')]}>
            <Image style={[y.w(12), y.h(16)]} source={require('../images/个人主页/vip/vipfollow01.png')}/>
          </View>
        </View>
        <Text style={[y.fSize(14), y.color('#333'), y.fWeight('bold'), y.mt(18), y.uSelfCenter]}>发布聚会</Text>
        <Text style={[y.fSize(10), y.color('#999'), y.mt(8), y.uSelfCenter]}>会员每天发布10条聚会</Text>
        <View style={[y.udr, y.uSelfCenter, y.mt(9)]}>
          <View style={[y.size(6), y.radiusA(3), y.bgColor('#999'), y.mr(10)]}/>
          <View style={[y.size(6), y.radiusA(3), y.bgColor('#F3C050'), y.mr(10)]}/>
          <View style={[y.size(6), y.radiusA(3), y.bgColor('#999'), y.mr(10)]}/>
          <View style={[y.size(6), y.radiusA(3), y.bgColor('#999'), y.mr(10)]}/>
          <View style={[y.size(6), y.radiusA(3), y.bgColor('#999'), y.mr(10)]}/>
          <View style={[y.size(6), y.radiusA(3), y.bgColor('#999'), y.mr(10)]}/>
          <View style={[y.size(6), y.radiusA(3), y.bgColor('#999'), y.mr(10)]}/>
          <View style={[y.size(6), y.radiusA(3), y.bgColor('#999'), y.mr(10)]}/>
        </View>
        <View style={[y.udr, y.uac, y.plr(21), y.mt(24), y.upr]}>
          <Image style={[y.h(22), y.w(10), y.upa, y.left(6)]} source={require('../images/个人主页/vip/vipxl02.png')}/>
          <Image style={[y.h(22), y.w(10), y.upa, y.right(6)]} source={require('../images/个人主页/vip/vipxr01.png')}/>
          <View
            style={[y.bgColor('#FFF7E6'), y.ba(1), y.pb(14), y.bdColor('#DFB465'), y.radiusA(5), y.w(95), y.uac, y.pt(19)]}>
            <Text style={[y.fSize(14), y.color('#333'), y.fWeight('bold')]}>1个月</Text>
            <Text style={[y.fSize(14), y.color('#D1A13C'), y.mt(20)]}>1780桃花币</Text>
            <Text style={[y.fSize(10), y.color('#D1A13C'), y.mt(27)]}>约254元/月</Text>
          </View>
          <View
            style={[y.bgColor('#FCFCFC'), y.ba(1), y.pb(14), y.mlr(13), y.bdColor('#E7E8EC'), y.radiusA(5), y.w(95), y.uac, y.pt(19)]}>
            <Text style={[y.fSize(14), y.color('#333'), y.fWeight('bold')]}>1个月</Text>
            <Text style={[y.fSize(14), y.color('#D1A13C'), y.mt(20)]}>1780桃花币</Text>
            <Text style={[y.fSize(10), y.color('#999'), y.mt(27)]}>约254元/月</Text>
          </View>
          <View
            style={[y.bgColor('#FCFCFC'), y.ba(1), y.pb(14), y.bdColor('#E7E8EC'), y.radiusA(5), y.w(95), y.uac, y.pt(19)]}>
            <Text style={[y.fSize(14), y.color('#333'), y.fWeight('bold')]}>1个月</Text>
            <Text style={[y.fSize(14), y.color('#D1A13C'), y.mt(20)]}>1780桃花币</Text>
            <Text style={[y.fSize(10), y.color('#999'), y.mt(27)]}>约254元/月</Text>
          </View>
        </View>
        <View style={[y.uSelfCenter, y.bgColor('#1D2027'), y.h(40), y.w(229), y.ujc, y.uac, y.mt(42), y.radiusA(20)]}>
          <Text style={[y.color('#ECCD89'), y.fSize(15), y.fWeight('bold')]}>立即开通</Text>
        </View>
      </View>
      <View style={[y.uSelfCenter,y.bgColor('#fff'),y.mt(6),y.ujc,y.uac, y.radiusA(16), y.size(32)]}>
        <Image style={[y.size(14)]} source={require('../images/个人主页/off11.png')}/>
      </View>
    </View>
  </Modal>
)
