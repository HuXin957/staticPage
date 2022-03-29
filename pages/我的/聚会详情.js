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
  <ScrollView style={[y.bgColor('#fff')]}>
    <Header title={'聚会详情'}/>
    {/*列表一*/}
    <View style={[y.udr, y.upr, y.ptb(20), y.plr(16), y.bt(8), y.bgColor('#fff'), y.bdColor('#F5F8FA')]}>
      <Image
        source={require('../images/我的切图/3ding.png')}
        style={[y.w(15), y.h(3), y.upa, y.right(20), y.top(30)]}/>
      <Image style={[y.bgColor('#333'), y.size(40), y.radiusA(3)]}/>
      <View style={[y.ml(12), y.uf1]}>
        <View style={[y.udr, y.uac]}>
          <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>KE小喵咪</Text>
          <Image
            resizeMode={'contain'}
            style={[y.w(43), y.h(17), y.ml(9)]}
            source={require('../images/我的切图/goddess.png')}/>
        </View>
        <Text style={[y.color('#999'), y.fSize(10), y.mt(4)]}>3分钟前 | 1.6km</Text>
        {/*内容*/}
        <View style={[y.mt(17)]}>
          <View style={[y.udr, y.uac]}>
            <Image source={require('../images/我的切图/movie.png')} style={[y.size(15), y.mr(12)]}/>
            <Text style={[y.color('#333'), y.fSize(13), y.fWeight('bold')]}>看电影</Text>
          </View>
          <IconText text={' 6月13日 10:00 ~ 12:00'} img={require('../images/我的切图/btime.png')}/>
          <IconText text={' 深圳市·宝安区'} img={require('../images/我的切图/bmap.png')}/>
          <IconText text={' 期望对象：有趣,大方，关爱我'} img={require('../images/我的切图/bstar.png')}/>
          <Image style={[y.size(80), y.radiusA(5), y.mt(16), y.bgColor('#333')]}/>
        </View>
        {/*底部*/}
        <View style={[y.udr, y.uac, y.ujb, y.mt(15)]}>
          <View style={[y.udr, y.uac]}>
            <Image
              source={require('../images/我的切图/1d.png')}
              style={[y.size(16), y.mr(4)]}/>
            <Text style={[y.fSize(12), y.color('#F67C88')]}>25</Text>
          </View>
          <View style={[y.udr, y.uac, y.ml(40)]}>
            <Image
              source={require('../images/我的切图/ms.png')}
              style={[y.size(16), y.mr(4)]}/>
            <Text style={[y.fSize(12), y.color('#999')]}>私密评论(2)</Text>
          </View>
          <View style={[y.udr, y.uac]}>
            <Image
              source={require('../images/我的切图/over.png')}
              style={[y.size(16), y.mr(8)]}/>
            <Text style={[y.fSize(12), y.color('#999')]}>结束报名</Text>
          </View>
        </View>
        {/*  评论*/}
        <View style={[y.bgColor('#F5F8FA'), y.pt(8), y.pb(12), y.mt(16), y.radiusA(5), y.plr(12)]}>
          <View style={[y.udr, y.uac, y.bb(1), y.bdColor('#EEE'), y.pb(8)]}>
            <Image source={require('../images/我的切图/2d.png')} style={[y.size(16), y.mr(11)]}/>
            <Image style={[y.size(25), y.mr(6),y.radiusA(2), y.bgColor('#333')]}/>
            <Image style={[y.size(25), y.mr(6),y.radiusA(2), y.bgColor('#333')]}/>
            <Image style={[y.size(25), y.mr(6),y.radiusA(2), y.bgColor('#333')]}/>
          </View>
          <Text style={[y.fSize(12), y.color('#8F9AB3'), y.mt(9)]}>小龙哥哥：美女想请你吃个饭</Text>
          <Text style={[y.fSize(12), y.color('#8F9AB3'), y.mt(9)]}>小龙哥哥：美女想请你吃个饭</Text>
        </View>
      </View>
    </View>
    <View style={[y.bgColor('#F5F8FA'), y.pt(16), y.pb(13), y.pl(13)]}>
      <Text style={[y.color('#666'), y.fSize(12)]}>查看报名(14)</Text>
    </View>
    {/*查看报名一*/}
    <View style={[y.pa(15), y.udr, y.uac, y.bb(1), y.bdColor('#F5F5F5')]}>
      <Image style={[y.bgColor('#333'), y.size(40), y.radiusA(3)]}/>
      <View style={[y.ml(11), y.uf1]}>
        <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>小帅</Text>
        <Text style={[y.color('#999'), y.fSize(10), y.mt(4)]}>15天前 | 报名了你的健康运动</Text>
      </View>
      <View style={[y.h(27), y.w(57), y.ujc, y.bgColor('#F67C88'), y.radiusA(13)]}>
        <Text style={[y.color('#fff'), y.utxc, y.fSize(12)]}>联系TA</Text>
      </View>
      <View style={[y.h(27), y.w(57), y.ujc, y.ml(5), y.ba(1), y.bdColor('#ddd'), y.radiusA(13)]}>
        <Text style={[y.color('#999'), y.utxc, y.fSize(12)]}>举报</Text>
      </View>
    </View>
    {/*查看报名二*/}
    <View style={[y.pa(15), y.udr, y.uac, y.bb(1), y.bdColor('#F5F5F5')]}>
      <Image style={[y.bgColor('#333'), y.size(40), y.radiusA(3)]}/>
      <View style={[y.ml(11), y.uf1]}>
        <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>小帅</Text>
        <Text style={[y.color('#999'), y.fSize(10), y.mt(4)]}>15天前 | 报名了你的健康运动</Text>
      </View>
      <View style={[y.h(27), y.w(57), y.ujc, y.bgColor('#F67C88'), y.radiusA(13)]}>
        <Text style={[y.color('#fff'), y.utxc, y.fSize(12)]}>联系TA</Text>
      </View>
      <View style={[y.h(27), y.w(57), y.ujc, y.ml(5), y.ba(1), y.bdColor('#ddd'), y.radiusA(13)]}>
        <Text style={[y.color('#999'), y.utxc, y.fSize(12)]}>举报</Text>
      </View>
    </View>
  </ScrollView>
)
