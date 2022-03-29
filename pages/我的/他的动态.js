import React from 'react';
import {View, Text, Image, ScrollView, StatusBar} from 'react-native';
import y from '../style';
import {IconText, Header} from '../components'


export default () => (
  <ScrollView style={[y.bgColor('#fff')]}>
    <Header title={'他的动态'}/>
    {/*一*/}
    <View style={[y.udr, y.upr, y.ptb(20), y.plr(16), y.bt(8), y.bgColor('#fff'), y.bdColor('#F5F8FA')]}>
      <Image style={[y.bgColor('#333'), y.size(40), y.radiusA(3)]}/>
      <View style={[y.ml(12)]}>
        <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>KE小喵咪</Text>
        <Text style={[y.color('#999'), y.fSize(10), y.mt(4)]}>3分钟前 | 1.6km</Text>
        <View style={[y.mt(17)]}>
          <Text style={[y.color('#333'), y.fSize(13)]}>好想有个人陪我去旅游</Text>
          <Image style={[y.h(200), y.w(150), y.radiusA(5), y.mt(16), y.bgColor('#333')]}/>
        </View>
        <View style={[y.udr, y.uac, y.mt(12)]}>
          <View style={[y.udr, y.uac, y.mr(83)]}>
            <Image style={[y.size(16), y.bgColor('#333'), y.mr(4)]}/>
            <Text style={[y.fSize(12), y.color('#999')]}>点赞</Text>
          </View>
          <View style={[y.udr, y.uac, y.mt(12)]}>
            <Image style={[y.size(16), y.bgColor('#333'), y.mr(4)]}/>
            <Text style={[y.fSize(12), y.color('#999')]}>评论</Text>
          </View>
        </View>
      </View>
      {/*更多*/}
      <Image style={[y.w(15), y.h(3), y.upa, y.right(20), y.top(30), y.bgColor('#222')]}/>
      {/*小弹窗*/}
      <View
        style={[y.upa, y.right(20), y.bdColor('#CED1D9'), y.radiusA(3), y.top(40), y.uac, y.ptb(11), y.pl(10), y.pr(8), y.ba(1)]}>
        <Text style={[y.fSize(7), y.color('#333')]}>匿名举报</Text>
        <View style={[y.bgColor('#CED1D9'), y.h(1), y.w100, y.mtb(6)]}/>
        <Text style={[y.fSize(7), y.color('#333')]}>拉黑</Text>
      </View>
    </View>
    {/*  二*/}
    <View style={[y.udr, y.upr, y.ptb(20), y.plr(16), y.bt(8), y.bgColor('#fff'), y.bdColor('#F5F8FA')]}>
      <Image style={[y.bgColor('#333'), y.size(40), y.radiusA(3)]}/>
      <View style={[y.ml(12)]}>
        <View style={[y.udr, y.uac]}>
          <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>KE小喵咪</Text>
          <View style={[y.bgColor('#FE8899'), y.udr, y.uac, y.radiusA(2), y.ml(7), y.plr(3)]}>
            <Image style={[y.size(9), y.bgColor('#333'), y.mr(3)]}/>
            <Text style={[y.color('#fff'), y.fSize(9)]}>女神</Text>
          </View>
        </View>
        <Text style={[y.color('#999'), y.fSize(10), y.mt(4)]}>3分钟前 | 1.6km</Text>
        {/*内容*/}
        <View style={[y.mt(17)]}>
          <View style={[y.udr, y.uac]}>
            <Image style={[y.bgColor('#333'), y.size(15), y.mr(12)]}/>
            <Text style={[y.color('#333'), y.fSize(13), y.fWeight('bold')]}>看电影</Text>
          </View>
          <IconText text={' 6月13日 10:00 ~ 12:00'}/>
          <IconText text={' 深圳市·宝安区'}/>
          <IconText text={' 期望对象：有趣,大方，关爱我'}/>
          <Image style={[y.size(80), y.radiusA(5), y.mt(16), y.bgColor('#333')]}/>
        </View>
        {/*底部*/}
        <View style={[y.udr, y.uac, y.mt(12)]}>
          <View style={[y.udr, y.uac, y.mr(83)]}>
            <Image style={[y.size(16), y.bgColor('#333'), y.mr(4)]}/>
            <Text style={[y.fSize(12), y.color('#999')]}>点赞</Text>
          </View>
          <View style={[y.udr, y.uac, y.mt(12)]}>
            <Image style={[y.size(16), y.bgColor('#333'), y.mr(4)]}/>
            <Text style={[y.fSize(12), y.color('#999')]}>评论</Text>
          </View>
        </View>
      </View>
    </View>
    {/*三*/}
    <View style={[y.udr, y.upr, y.ptb(20), y.plr(16), y.bt(8), y.bgColor('#fff'), y.bdColor('#F5F8FA')]}>
      <Image style={[y.bgColor('#333'), y.size(40), y.radiusA(3)]}/>
      <View style={[y.ml(12)]}>
        <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>KE小喵咪</Text>
        <Text style={[y.color('#999'), y.fSize(10), y.mt(4)]}>3分钟前 | 1.6km</Text>
        {/*内容*/}
        <View style={[y.mt(17)]}>
          <Text style={[y.color('#333'), y.fSize(13)]}>好想有个人陪我去旅游</Text>
          <View style={[y.udr, y.uac]}>
            <Image style={[y.size(90), y.radiusA(5), y.mr(5), y.mt(16), y.bgColor('#333')]}/>
            <Image style={[y.size(90), y.radiusA(5), y.mr(5), y.mt(16), y.bgColor('#333')]}/>
            <Image style={[y.size(90), y.radiusA(5), y.mr(5), y.mt(16), y.bgColor('#333')]}/>
          </View>
        </View>
        {/*底部*/}
        <View style={[y.udr, y.uac, y.mt(12)]}>
          <View style={[y.udr, y.uac, y.mr(83)]}>
            <Image style={[y.size(16), y.bgColor('#333'), y.mr(4)]}/>
            <Text style={[y.fSize(12), y.color('#999')]}>点赞</Text>
          </View>
          <View style={[y.udr, y.uac, y.mt(12)]}>
            <Image style={[y.size(16), y.bgColor('#333'), y.mr(4)]}/>
            <Text style={[y.fSize(12), y.color('#999')]}>评论</Text>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
)



