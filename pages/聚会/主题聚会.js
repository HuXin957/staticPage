import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import y from '../style'
import {IconText} from '../components'

export default () => (
  <View style={[y.uf1, y.upr]}>
    <View
      style={[y.upa, y.top(55), y.right(15), y.zIndex(99), y.bgColor('#fff'), y.plr(19), y.ptb(17), y.radiusA(5), y.ba(1), y.bdColor('#EEEEEE')]}>
      <View style={[y.udr, y.uac]}>
        <Image resizeMode={'contain'} style={[y.size(20), y.mr(11)]} source={require('../images/聚会/reparty.png')}/>
        <Text style={[y.fSize(14), y.color('#333')]}>发布聚会</Text>
      </View>
      <View style={[y.udr, y.uac, y.mt(20)]}>
        <Image resizeMode={'contain'} style={[y.size(20), y.mr(11)]} source={require('../images/聚会/reactivities.png')}/>
        <Text style={[y.fSize(14), y.color('#333')]}>发布聚会</Text>
      </View>
    </View>
    <View style={[y.udr, y.uac, y.bgColor('#fff'), y.upr, y.pt(16), y.plr(17), y.pb(6)]}>
      <View style={[y.udr, y.uac]}>
        <Image
          resizeMode={'contain'}
          source={require('../images/首页切图/man.png')}
          style={[y.h(22), y.w(10)]}
        />
        <Image
          resizeMode={'contain'}
          source={require('../images/首页切图/wman1.png')}
          style={[y.h(22), y.w(10)]}
        />
      </View>
      <View style={[y.udr, y.uf1, y.ujc, y.uac]}>
        <Text style={[y.color('#bbb'), y.fSize(15), y.fWeight('bold')]}>我的动态</Text>

        <View style={[y.ml(35), y.uac]}>
          <Text style={[y.color('#333'), y.fSize(18), y.fWeight('bold')]}>我的聚会</Text>
          <View style={[y.bgColor('#F1628D'), y.w(10), y.h(3), y.mt(6), y.radiusA(1)]}/>
        </View>
      </View>
      <Image
        source={require('../images/我的切图/release.png')}
        style={[y.size(15), y.mr(7)]}/>
      <Text style={[y.color('#F67C88'), y.fSize(13)]}>发布</Text>
    </View>
    <View style={[y.bgColor('#fff'), y.plr(15)]}>
      <Image resizeMode={'contain'} style={[y.h(141), y.w(345)]} source={require('../images/聚会/btheme.png')}/>
      <View style={[y.udr, y.uac,y.ujb, y.mt(10), y.mb(20)]}>
        <Item title={'社交聚会'} img={require('../images/聚会/party1.png')}/>
        <Item title={'健康运动'} img={require('../images/聚会/motion1.png')}/>
        <Item title={'旅行休闲'} img={require('../images/聚会/travel1.png')}/>
        <Item title={'陪我吃饭'} img={require('../images/聚会/eat1.png')}/>
        <Item title={'看电影'} img={require('../images/聚会/movie1.png')}/>
      </View>
    </View>
    {/* 列表*/}
    <ScrollView style={[y.bgColor('#fff'), y.bt(8), y.bdColor('#F5F8FA')]}>
      {/*一*/}
      <View style={[y.udr, y.upr, y.ptb(20), y.plr(16), y.bb(8), y.bgColor('#fff'), y.bdColor('#F5F8FA')]}>
        <Image style={[y.bgColor('#333'), y.size(40), y.radiusA(3)]}/>
        <View style={[y.ml(12), y.uf1]}>
          <View style={[y.udr, y.uac, y.upr]}>
            <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>KE小喵咪</Text>
            <Image
              resizeMode={'contain'}
              style={[y.w(43), y.h(17), y.ml(9)]}
              source={require('../images/我的切图/goddess.png')}/>
            <View style={[y.udr, y.uac, y.upa, y.right(0)]}>
              <Image
                resizeMode={'contain'}
                source={require('../images/我的切图/modify.png')}
                style={[y.size(12), y.mr(2)]}/>
              <Text style={[y.color('#484848'), y.fSize(12)]}>编辑</Text>
              <Image
                resizeMode={'contain'}
                source={require('../images/我的切图/delete.png')}
                style={[y.size(12), y.ml(15), y.mr(2)]}/>
              <Text style={[y.color('#484848'), y.fSize(12)]}>删除</Text>
            </View>
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
          <View style={[y.udr, y.uac, y.ujb, y.mt(14)]}>
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
            <View style={[y.ba(1), y.h(22), y.udr, y.uac, y.bdColor('#BBB'), y.radiusA(11), y.plr(7)]}>
              <Image
                source={require('../images/我的切图/over.png')}
                style={[y.size(12), y.mr(6)]}/>
              <Text style={[y.color('#999'), y.fSize(10)]}>我要报名</Text>
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  </View>
)

const Item = ({title, img}) => (
  <View style={[y.uac]}>
    <Image style={[y.size(57)]} source={img}/>
    <Text style={[y.fSize(12), y.color('#666')]}>{title}</Text>
  </View>
)

