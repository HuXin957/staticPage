import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  ImageBackground
} from 'react-native';
import y from '../style';
import LinearGradient from 'react-native-linear-gradient';


export default () => {
  StatusBar.setTranslucent(true)
  StatusBar.setBackgroundColor(0, 0, 0, 0)
  return (
    <ScrollView style={[y.bgColor('#fff')]}>
      <ImageBackground
        style={[y.h(264), y.w100, y.upr]}
        source={require('../images/我的切图/bg.png')}>
        <Image
          source={require('../images/我的切图/set.png')}
          style={[y.size(20), y.mr(17), y.mt(StatusBar.currentHeight + 10), y.uSelfEnd]}/>
        <View style={[y.plr(16), y.mt(24), y.udr]}>
          <Image
            style={[y.size(75), y.radiusA(10), y.bgColor('#333')]}/>
          <View style={[y.ml(20), y.uf1]}>
            <Text style={[y.color('#333'), y.fSize(20), y.fWeight('bold')]}>晴儿</Text>
            <View style={[y.udr, y.uac, y.mt(6)]}>
              <Text style={[y.color('#333'), y.fSize(12)]}>邀请码：26866888</Text>
              <View style={[y.ba(1), y.h(14), y.radiusA(7), y.ml(11), y.plr(6), y.bdColor('#FAB4BB')]}>
                <Text style={[y.fSize(9), y.color('#666')]}>复制</Text>
              </View>
            </View>
            <View style={[y.udr, y.uac, y.mt(6)]}>
              <Label title={'深圳'}/>
              <Label title={'22岁.白羊座'}/>
              <Label title={'学生'}/>
            </View>
          </View>
          <Image
            source={require('../images/我的切图/forward.png')}
            style={[y.h(15), y.w(9), y.uSelfCenter]}/>
        </View>
        <View style={[y.udr, y.uac, y.uja, y.plr(20), y.mt(16)]}>
          <View style={[y.uac]}>
            <Text style={[y.color('#333'), y.fSize(18), y.fWeight('bold')]}>0</Text>
            <Text style={[y.color('#666'), y.fSize(12)]}>关注</Text>
          </View>
          <View style={[y.uac]}>
            <Text style={[y.color('#333'), y.fSize(18), y.fWeight('bold')]}>0</Text>
            <Text style={[y.color('#666'), y.fSize(12)]}>粉丝</Text>
          </View>
          <View style={[y.uac]}>
            <Text style={[y.color('#333'), y.fSize(18), y.fWeight('bold')]}>0</Text>
            <Text style={[y.color('#666'), y.fSize(12)]}>最近访客</Text>
          </View>
          <View style={[y.uac]}>
            <View style={[y.udr, y.uac]}>
              <Text style={[y.color('#333'), y.fSize(18), y.fWeight('bold')]}>0</Text>
              <Image
                style={[y.size(12), y.ml(5)]}
                source={require('../images/我的切图/coin.png')}/>
            </View>
            <Text style={[y.color('#666'), y.fSize(12)]}>桃花币</Text>
          </View>
        </View>
        <View style={[y.upa, y.bottom(0), y.w100, y.plr(12)]}>
          <ImageBackground
            source={require('../images/我的切图/mvip.png')}
            style={[y.udr, y.w100, y.uac, y.h(40), y.pr(9)]}>
            <Text style={[y.color('#FFDA96'), y.uf1, y.ml(40), y.fSize(12)]}>到期时间：2022-10-10</Text>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#E6B576', '#FED39C']}
              style={[y.h(25), y.w(65), y.ujc, y.uac, y.radiusA(13)]}
            >
              <Text style={[y.color('#333'), y.fSize(10), y.fWeight('bold')]}>续费8折</Text>
            </LinearGradient>
          </ImageBackground>
        </View>
      </ImageBackground>


      <TextBar borderBottom={8} title={'我的广播'} img={require('../images/我的切图/broadcast.png')}/>
      <TextBar borderBottom={1} title={'我的心愿'} img={require('../images/我的切图/wish.png')}/>
      <TextBar borderBottom={8} title={'认证状态'} value={'未认证'} img={require('../images/我的切图/attestation.png')}/>
      <TextBar borderBottom={1} title={'我的相册'} img={require('../images/我的切图/album.png')}/>

      <View style={[y.ujc, y.uac, y.pt(14), y.bb(1), y.bdColor('#F5F5F5')]}>
        <Image
          source={require('../images/我的切图/default.png')}
          style={[y.w(61), y.h(50)]}/>
        <Text style={[y.color('#8F9AB3'), y.fSize(12), y.mt(16)]}>上传照片才能更好的吸引女士噢</Text>
        <View
          style={[y.ba(1), y.plr(18), y.mb(29), y.h(30), y.ujc, y.uac, y.bdColor('#F67C88'), y.radiusA(15), y.mt(20)]}>
          <Text style={[y.color('#F67C88'), y.fSize(12)]}>上传照片/视频</Text>
        </View>
      </View>
      <TextBar borderBottom={8}
               title={'相册隐私'}
               value={'公开'}
               img={require('../images/我的切图/privacy.png')}/>
      <TextBar borderBottom={8}
               title={'邀请有礼'}
               img={require('../images/我的切图/privacy.png')}/>
      <TextBar borderBottom={1}
               title={'帮朋友申请邀请码'}
               img={require('../images/我的切图/invitation.png')}/>
      <TextBar borderBottom={1}
               title={'向朋友分享白雪佳人'}
               img={require('../images/我的切图/share.png')}/>
      <TextBar borderBottom={1}
               title={'在线客服'}
               value={'投诉/反馈'}
               img={require('../images/我的切图/share.png')}/>
      <View style={[y.h(20),y.bgColor('#F5F8FA')]}/>
    </ScrollView>
  )
}

const Label = ({title}) => (
  <View style={[y.plr(8), y.mr(5), y.ujc, y.uac, y.radiusA(8), y.bgColor('#fff'), y.h(15)]}>
    <Text style={[y.color('#8F9AB3'), y.fSize(9)]}>{title}</Text>
  </View>
)

const TextBar = ({img, title, value, borderBottom}) => (
  <View style={[y.plr(16), y.bgColor('#fff'),y.udr, y.uac, y.ptb(18), y.bb(borderBottom || 0), y.bdColor('#F5F8FA')]}>
    <Image
      source={img}
      style={[y.size(20), y.mr(16)]}/>
    <Text style={[y.color('#333'), y.fSize(14), y.uf1]}>{title}</Text>
    <Text style={[y.color('#8F9AB3'), y.fSize(12), y.mr(12)]}>{value}</Text>
    <Image
      source={require('../images/我的切图/forward.png')}
      style={[y.w(6), y.h(11)]}/>
  </View>
)
