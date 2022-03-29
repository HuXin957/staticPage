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
  <View style={[y.uf1]}>
    <View style={[y.udr, y.uac, y.bgColor('#fff'), y.pt(16), y.plr(17), y.pb(6)]}>
      <Image
        source={require('../images/我的切图/back.png')}
        style={[y.h(19), y.w(11)]}/>
      <View style={[y.udr, y.uf1, y.ujc, y.uac]}>
        <View style={[y.mr(35), y.uac]}>
          <Text style={[y.color('#333'), y.fSize(18), y.fWeight('bold')]}>我的动态</Text>
          <View style={[y.bgColor('#F1628D'), y.w(10), y.h(3), y.mt(6), y.radiusA(1)]}/>
        </View>
        <Text style={[y.color('#bbb'), y.fSize(15), y.fWeight('bold')]}>我的聚会</Text>
      </View>
      <Image
        source={require('../images/我的切图/release.png')}
        style={[y.size(15), y.mr(7)]}/>
      <Text style={[y.color('#F67C88'), y.fSize(13)]}>发布</Text>
    </View>
    {/* 列表*/}
    <ScrollView>
      {/*一*/}
      <View style={[y.udr, y.upr, y.ptb(20), y.plr(16), y.bt(8), y.bgColor('#fff'), y.bdColor('#F5F8FA')]}>
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
            <Text style={[y.color('#333'), y.fSize(14)]}>好想有个人陪我去旅游</Text>
            <Image style={[y.h(200), y.w(150), y.radiusA(5), y.mt(16), y.bgColor('#333')]}/>
          </View>
          {/*底部*/}
          <View style={[y.udr, y.uac, y.mt(14)]}>
            <View style={[y.udr, y.uac]}>
              <Image
                resizeMode={'contain'}
                source={require('../images/我的切图/2d.png')}
                style={[y.size(16), y.mr(4)]}/>
              <Text style={[y.fSize(12), y.color('#999')]}>点赞</Text>
            </View>
            <View style={[y.udr, y.uac, y.ml(40)]}>
              <Image
                resizeMode={'contain'}
                source={require('../images/我的切图/ms.png')}
                style={[y.size(16), y.mr(4)]}/>
              <Text style={[y.fSize(12), y.color('#999')]}>私密评论(2)</Text>
            </View>
          </View>
        </View>
      </View>
      {/*  二*/}
      <View style={[y.udr, y.upr, y.ptb(20), y.plr(16), y.bt(8), y.bgColor('#fff'), y.bdColor('#F5F8FA')]}>
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
            <Text style={[y.color('#333'), y.fSize(14)]}>好想有个人陪我去旅游</Text>
            <View style={[y.udr, y.uac]}>
              <Image style={[y.size(90), y.mr(5), y.radiusA(5), y.mt(16), y.bgColor('#333')]}/>
              <Image style={[y.size(90), y.mr(5), y.radiusA(5), y.mt(16), y.bgColor('#333')]}/>
              <Image style={[y.size(90), y.radiusA(5), y.mt(16), y.bgColor('#333')]}/>
            </View>
          </View>
          {/*底部*/}
          <View style={[y.udr, y.uac, y.mt(14)]}>
            <View style={[y.udr, y.uac]}>
              <Image
                source={require('../images/我的切图/1d.png')}
                style={[y.size(16), y.mr(4)]}/>
              <Text style={[y.fSize(12), y.color('#999')]}>点赞</Text>
            </View>
            <View style={[y.udr, y.uac, y.ml(40)]}>
              <Image
                source={require('../images/我的切图/ms.png')}
                style={[y.size(16), y.mr(4)]}/>
              <Text style={[y.fSize(12), y.color('#999')]}>私密评论(2)</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
)

