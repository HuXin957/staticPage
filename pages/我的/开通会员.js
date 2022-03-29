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
import {Header} from "../components";

StatusBar.setTranslucent(false)
export default () => (
  <ScrollView>
    <Header title={'开通会员'}/>
    <View style={[y.plr(15), y.bgColor('#fff'), y.bb(8), y.pb(14), y.bdColor('#F5F8FA')]}>
      <Image
        resizeMode={'contain'}
        source={require('../images/我的切图/vip/vipmain.png')}
        style={[y.h(168), y.w100, y.radiusA(5)]}/>
      <View style={[y.udr, y.mt(10)]}>
        <View style={[y.ba(1), y.bgColor('#FFF7E6'), y.pt(18), y.radiusA(5), y.uac, y.w(168), y.bdColor('#DFB465')]}>
          <Text style={[y.color('#333'), y.fSize(15), y.fWeight('bold')]}>1个月</Text>
          <Text style={[y.color('#D1A13C'), y.fWeight('bold'), y.mt(8)]}>1780桃花币</Text>
          <Text style={[y.color('#D1A13C'), y.fSize(10), y.mt(8), y.mb(12)]}>约254元/月</Text>
        </View>
        <View
          style={[y.ba(1), y.ml(10), y.bgColor('#FCFCFC'), y.pt(18), y.radiusA(5), y.uac, y.w(168), y.bdColor('#DFB465')]}>
          <Text style={[y.color('#333'), y.fSize(15), y.fWeight('bold')]}>1个月</Text>
          <Text style={[y.color('#D1A13C'), y.fWeight('bold'), y.mt(8)]}>1780桃花币</Text>
          <Text style={[y.color('#999'), y.fSize(10), y.mt(8), y.mb(12)]}>约254元/月</Text>
        </View>
      </View>
      <View style={[y.udr, y.mt(10)]}>
        <View style={[y.ba(1), y.bgColor('#FCFCFC'), y.pt(18), y.radiusA(5), y.uac, y.w(168), y.bdColor('#DFB465')]}>
          <Text style={[y.color('#333'), y.fSize(15), y.fWeight('bold')]}>1个月</Text>
          <Text style={[y.color('#D1A13C'), y.fWeight('bold'), y.mt(8)]}>1780桃花币</Text>
          <Text style={[y.color('#999'), y.fSize(10), y.mt(8), y.mb(12)]}>约254元/月</Text>
        </View>
        <View style={[y.uof, y.radiusA(5), y.upr, y.ml(10)]}>
          <View
            style={[y.ba(1), y.pt(18), y.bgColor('#FCFCFC'), y.radiusA(5), y.uac, y.w(168), y.bdColor('#DFB465')]}>
            <Image
              style={[y.w(50), y.h(16), y.upa, y.top(-1), y.left(-1)]}
              source={require('../images/我的切图/recommend.png')}/>
            <Text style={[y.color('#333'), y.fSize(15), y.fWeight('bold')]}>1个月</Text>
            <Text style={[y.color('#D1A13C'), y.fWeight('bold'), y.mt(8)]}>1780桃花币</Text>
            <Text style={[y.color('#999'), y.fSize(10), y.mt(8), y.mb(12)]}>约254元/月</Text>
          </View>
        </View>
      </View>
    </View>

    <View style={[y.pb(50)]}>
      <View style={[y.pt(17), y.plr(16)]}>
        <Text style={[y.color('#333'), y.fSize(15), y.fWeight('bold')]}>会员特权</Text>
      </View>
      <View style={[y.uWrap, y.udr, y.uf1, y.plr(20)]}>
        <IconBar
          title={'会员特权'}
          detail={'会员每天20次特权解锁私'}
          img={require('../images/我的切图/vip/vip1.png')}
        />
        <IconBar
          title={'发布聚会'}
          detail={'会员每天发布10条聚会'}
          img={require('../images/我的切图/vip/vip2.png')}
        />
        <IconBar
          title={'关注人数'}
          detail={'会员不限关注人数'}
          img={require('../images/我的切图/vip/vip3.png')}
        />
        <IconBar
          title={'查看访客'}
          detail={'会员不限查看次数'}
          img={require('../images/我的切图/vip/vip4.png')}
        />
        <IconBar
          title={'设置隐身'}
          detail={'对特定人隐藏定位、在线时间'}
          img={require('../images/我的切图/vip/vip5.png')}
        />
        <IconBar
          title={'阅后即焚'}
          detail={'阅后即焚照片延长至6秒'}
          img={require('../images/我的切图/vip/vip6.png')}
        />
        <IconBar
          title={'会员表示'}
          detail={'尊贵会员名牌，黄V展示'}
          img={require('../images/我的切图/vip/vip6.png')}
        />
        <IconBar
          title={'优质模块'}
          detail={'解锁感受优质推荐'}
          img={require('../images/我的切图/vip/vip6.png')}
        />
      </View>

    </View>
    <View style={[y.bgColor('#fff'), y.udr, y.uac, y.ujb, y.pl(22), y.pr(18), y.ptb(8)]}>
      <Text>需要支付：1780 桃花币 </Text>
      <View style={[y.bgColor('#1D2027'), y.radiusA(22), y.h(44), y.w(150), y.ujc, y.uac]}>
        <Text style={[y.color('#ECCD89'), y.fSize(15), y.fWeight('bold')]}>立即开通</Text>
      </View>
    </View>

  </ScrollView>
)

const IconBar = ({img, title, detail}) => (
  <View style={[y.udr, y.wRatio(50), y.mt(25)]}>
    <Image
      source={img}
      style={[y.size(40), y.radiusA(20)]}/>
    <View style={[y.ml(7), y.uf1]}>
      <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>{title}</Text>
      <Text numberOfLines={1} style={[y.color('#999'), y.fSize(10), y.mt(4)]}>{detail}</Text>
    </View>
  </View>
)
