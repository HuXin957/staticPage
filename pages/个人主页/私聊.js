import React from 'react';
import {View, Text, Image, ScrollView, ImageBackground, Modal} from 'react-native';
import y from '../style';
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <View style={[y.uf1]}>
    <Header title={'爱丽丝'}>
      <View style={[y.bgColor('#F5F5F5'), y.radiusA(9), y.plr(7), y.h(18), y.upa, y.left(52)]}>
        <Text style={[y.color('#8F9AB3'), y.fSize(12)]}>239</Text>
      </View>
      <Image style={[y.w(22), y.h(4), y.upa, y.right(16)]} source={require('../images/个人主页/back3d.png')}/>
      <View style={[y.udr, y.uac]}>
        <View style={[y.size(3), y.radiusA(2), y.bgColor('#38CC76'), y.mr(4)]}/>
        <Text style={[y.color('#38CC76'), y.fSize(10)]}>在线</Text>
      </View>
    </Header>
    <View style={[y.pa(12), y.bgColor('#FFF5DD'), y.uac]}>
      <Text style={[y.color('#F5AF24'), y.fSize(12)]}>健康交流，借平台进行违法活动交流将被冻结账号</Text>
    </View>
    <ScrollView style={[y.bgColor('#F5F8FA')]}>
      <View style={[y.pb(20)]}>

        <View style={[y.plr(15), y.pt(38)]}>
          <Left
            content={
              "你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl"
            }
          >
            <Text style={[y.color('#999999'), y.fSize(10), y.ml(11)]}>3:18</Text>
          </Left>
          <Text style={[y.color('#999'), y.fSize(12), y.uSelfCenter, y.mtb(22)]}>下午3:25</Text>
          <Right
            content={
              "你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl你好dsflkdsjl"
            }>
            <Text style={[y.color('#fff'), y.fSize(10), y.ml(11)]}>3:18</Text>
            <Image style={[y.w(14), y.h(7), y.ml(4)]} source={require('../images/个人主页/chat/read1.png')}/>
          </Right>
          <Right>
            <Image style={[y.h(15), y.w(20)]} source={require('../images/个人主页/chat/voice.png')}/>
            <Text style={[y.color('#fff'), y.fSize(10), y.ml(11)]}>3″</Text>
            <Text style={[y.color('#fff'), y.fSize(10), y.ml(11)]}>3:18</Text>
            <Image style={[y.w(14), y.h(7), y.ml(4)]} source={require('../images/个人主页/chat/read1.png')}/>
          </Right>
          <Text style={[y.color('#999'), y.fSize(12), y.uSelfCenter, y.mtb(22)]}>下午3:25</Text>
          <View style={[y.udr]}>
            <Image style={[y.size(40), y.radiusA(5), y.bgColor('#333')]}/>
            <ImageBackground
              style={[y.h(184), y.w(134), y.upr, y.ml(18), y.bgColor('#333'), y.radiusA(5)]}>
              <Text style={[y.fSize(10), y.color('#fff'), y.upa, y.right(6), y.bottom(6)]}>4:10</Text>
            </ImageBackground>
          </View>

          <Right style={[y.mt(55)]}>
            <Image style={[y.size(22)]} source={require('../images/个人主页/chat/表情/[酷].png')}/>
            <Text style={[y.color('#fff'), y.fSize(15), y.ml(11)]}>马上到</Text>
            <Text style={[y.color('#fff'), y.fSize(10), y.ml(11)]}>3:18</Text>
            <Image style={[y.w(14), y.h(7), y.ml(4)]} source={require('../images/个人主页/chat/read1.png')}/>
            <ImageBackground
              style={[y.h(45), y.w(155), y.udr, y.uac, y.ujc, y.upa, y.top(-50)]}
              source={require('../images/个人主页/chat/operationbg.png')}>
              <View style={[y.plr(10)]}>
                <Text style={[y.fSize(14), y.color('#fff')]}>复制</Text>
              </View>
              <View style={[y.plr(10), y.blr(1), y.bdColor('#fff')]}>
                <Text style={[y.fSize(14), y.color('#fff')]}>删除</Text>
              </View>
              <View style={[y.plr(10)]}>
                <Text style={[y.fSize(14), y.color('#fff')]}>撤回</Text>
              </View>
            </ImageBackground>
          </Right>
          <View style={[y.udr, y.mt(18)]}>
            <Image style={[y.size(40), y.radiusA(5), y.bgColor('#333')]}/>
            <View style={[y.ml(18), y.w(248), y.bgColor('#fff'), y.radiusA(10), y.uof]}>
              <Image style={[y.bgColor('#333'), y.h(130)]}/>
              <View style={[y.pa(12)]}>
                <Text style={[y.color('#333'), y.fSize(15)]}>位置</Text>
                <Text style={[y.color('#999'), y.fSize(12), y.mt(7)]}>广东省深圳市坪洲国际万象城</Text>
                <Text style={[y.color('#999'), y.fSize(12), y.mt(4), y.uSelfEnd]}>3:27</Text>
              </View>
            </View>
          </View>
          <Text style={[y.color('#999'), y.fSize(10), y.uSelfCenter, y.mtb(22)]}>
            酒老板 领取了
            <Text style={[y.color('#5E89CD'), y.fSize(10)]}>
              爱丽丝
            </Text>
            的支付宝红包
          </Text>
          <Right>
            <Image style={[y.w(24), y.h(20)]} source={require('../images/个人主页/chat/video.png')}/>
            <Text style={[y.color('#fff'), y.fSize(15), y.ml(11)]}>已取消</Text>
            <Text style={[y.color('#fff'), y.fSize(10), y.ml(11)]}>3:18</Text>
            <Image style={[y.w(14), y.h(7), y.ml(4)]} source={require('../images/个人主页/chat/sent.png')}/>
          </Right>
          <Left>
            <Image style={[y.w(24), y.h(20)]} source={require('../images/个人主页/chat/bvideo.png')}/>
            <Text style={[y.color('#999'), y.fSize(15), y.ml(11)]}>对方已拒绝</Text>
            <Text style={[y.color('#999'), y.fSize(10), y.ml(11)]}>3:18</Text>
          </Left>
          <Right outLeft={
            <Image style={[y.h(20), y.w(24), y.uSelfCenter]} source={require('../images/个人主页/chat/phone1.png')}/>
          }>
            <Image style={[y.w(24), y.h(20)]} source={require('../images/个人主页/chat/phone2.png')}/>
            <Text style={[y.color('#fff'), y.fSize(15), y.ml(11)]}>通话时长 28:30</Text>
            <Text style={[y.color('#fff'), y.fSize(10), y.ml(11)]}>3:18</Text>
            <Image style={[y.w(14), y.h(7), y.ml(4)]} source={require('../images/个人主页/chat/read1.png')}/>
          </Right>
        </View>
      </View>

    </ScrollView>

    {/*输入框*/}
    <View style={[y.bgColor('#fff'), y.plr(15), y.ptb(12)]}>
      <View style={[y.udr, y.uac]}>
        <Image style={[y.size(25)]} source={require('../images/个人主页/chat/stv001.png')}/>
        <View style={[y.bgColor('#F5F8FA'), y.radiusA(19), y.h(37), y.uf1, y.ujc, y.mlr(11), y.plr(23)]}>
          <Text style={[y.color('#ccc'), y.fSize(12)]}>输入消息...</Text>
        </View>
        <Image style={[y.size(25)]} source={require('../images/个人主页/chat/sgift.png')}/>
      </View>
      <View style={[y.udr, y.uja, y.mt(14)]}>
        <Image reisizeMode={'contain'} style={[y.w(21), y.h(19)]}
               source={require('../images/个人主页/chat/cpoto01.png')}/>
        <Image reisizeMode={'contain'} style={[y.w(24), y.h(19)]}
               source={require('../images/个人主页/chat/cvideo001.png')}/>
        <Image reisizeMode={'contain'} style={[y.w(21), y.h(19)]}
               source={require('../images/个人主页/chat/cpicture01.png')}/>
        <Image reisizeMode={'contain'} style={[y.size(21)]} source={require('../images/个人主页/chat/cface01.png')}/>
        <Image reisizeMode={'contain'} style={[y.size(21)]} source={require('../images/个人主页/chat/coff02.png')}/>
      </View>
    </View>

    {/*送礼物*/}
    {/*<View style={[y.btb(1), y.udr, y.uWrap, y.uac, y.ujb, y.pa(24), y.bgColor('#fff'), y.bdColor('#F5F8FA')]}>*/}
    {/*  <View style={[y.uac, y.wRatio(25)]}>*/}
    {/*    <View*/}
    {/*      style={[y.h(66), y.w(57), y.ba(1), y.bdColor('#F47391'), y.radiusA(5), y.ujc, y.uac, y.bgColor('#F5CAB7')]}>*/}
    {/*      <Image style={[y.h(41), y.w(37)]} source={require('../images/个人主页/chat/gift001.png')}/>*/}
    {/*      <Text style={[y.fSize(8), y.color('#414141')]}>666</Text>*/}
    {/*    </View>*/}
    {/*    <View style={[y.udr, y.mt(5)]}>*/}
    {/*      <Image style={[y.size(17), y.mr(3)]} source={require('../images/个人主页/chat/txbb.png')}/>*/}
    {/*      <Text style={[y.color('#FDAF01'), y.fSize(12)]}>50</Text>*/}
    {/*    </View>*/}
    {/*  </View>*/}
    {/*  <Gift name={'蓝玫瑰'} img={require('../images/个人主页/chat/gift002.png')} price={100}/>*/}
    {/*  <Gift name={'棒棒糖'} img={require('../images/个人主页/chat/gift003.png')} price={100}/>*/}
    {/*  <Gift name={'蓝玫瑰'} img={require('../images/个人主页/chat/gift004.png')} price={100}/>*/}
    {/*  <Gift name={'蓝玫瑰'} img={require('../images/个人主页/chat/gift005.png')} price={100}/>*/}
    {/*  <Gift name={'蓝玫瑰'} img={require('../images/个人主页/chat/gift006.png')} price={100}/>*/}
    {/*  <Gift name={'蓝玫瑰'} img={require('../images/个人主页/chat/gift007.png')} price={100}/>*/}
    {/*  <Gift name={'蓝玫瑰'} img={require('../images/个人主页/chat/gift008.png')} price={100}/>*/}
    {/*</View>*/}
    {/*<View style={[y.udr, y.uac, y.ujb, y.bgColor('#fff'), y.ptb(12), y.pl(21), y.pr(16)]}>*/}
    {/*  <View style={[y.udr, y.uac]}>*/}
    {/*    <Image style={[y.size(17), y.mr(6)]} source={require('../images/个人主页/chat/txbb.png')}/>*/}
    {/*    <Text style={[y.color('#FDAF01'), y.fSize(12)]}>168 桃花币</Text>*/}
    {/*    <Image style={[y.h(11), y.w(6), y.ml(12)]} source={require('../images/我的切图/my.png')}/>*/}
    {/*  </View>*/}
    {/*  <View style={[y.w(75), y.h(28), y.bgColor('#F67C88'), y.radiusA(14), y.ujc, y.uac]}>*/}
    {/*    <Text style={[y.color('#fff'), y.fSize(15)]}>发送</Text>*/}
    {/*  </View>*/}
    {/*</View>*/}


    {/*表情*/}
    <View style={[y.btb(1), y.bdColor('#F5F8FA'), y.bgColor('#fff'), y.pl(21), y.ptb(8)]}>
      <View style={[y.udr, y.uWrap, y.ujb, y.uac]}>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
        <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[0].png')}/>
      </View>
      <View style={[y.udr,y.uac,y.uSelfCenter,y.mt(13)]}>
        <View style={[y.size(6),y.bgColor('#F5AF24'),y.radiusA(3)]}/>
        <View style={[y.size(6),y.bgColor('#999'),y.radiusA(3),y.mlr(10)]}/>
        <View style={[y.size(6),y.bgColor('#999'),y.radiusA(3)]}/>
      </View>
    </View>
    <View style={[y.udr, y.uac, y.ujb, y.bgColor('#fff'), y.ptb(12), y.pl(21), y.pr(16)]}>
      <Image style={[y.size(27), y.mr(15), y.mb(11)]} source={require('../images/个人主页/chat/表情/[酷].png')}/>
      <View style={[y.w(75), y.h(28), y.bgColor('#F67C88'), y.radiusA(14), y.ujc, y.uac]}>
        <Text style={[y.color('#fff'), y.fSize(15)]}>发送</Text>
      </View>
    </View>


    {/*更多功能*/}
    {/*<View style={[y.bt(1), y.udr, y.uWrap, y.uac, y.ujb, y.pa(24), y.bgColor('#fff'), y.bdColor('#F5F8FA')]}>*/}
    {/*  <Item title={'礼物'} img={require('../images/个人主页/chat/bgift01.png')}/>*/}
    {/*  <Item title={'图片'} img={require('../images/个人主页/chat/bpic01.png')}/>*/}
    {/*  <Item title={'拍摄'} img={require('../images/个人主页/chat/bvideo01.png')}/>*/}
    {/*  <Item title={'阅后即焚'} img={require('../images/个人主页/chat/breading01.png')}/>*/}
    {/*  <Item title={'视频通话'} img={require('../images/个人主页/chat/bvcall01.png')}/>*/}
    {/*  <Item title={'位置'} img={require('../images/个人主页/chat/bmap01.png')}/>*/}
    {/*  <View style={[y.wRatio(25)]}/>*/}
    {/*  <View style={[y.wRatio(25)]}/>*/}
    {/*</View>*/}
  </View>

)

const Right = ({children, content, style = [], outLeft}) => (
  <View style={[y.udr, y.uje, y.mt(12), ...style]}>
    <View style={[y.mr(10), y.uf1, y.udr, y.upr, y.uje]}>
      {outLeft}
      <View
        style={[y.udr, y.minh(40), y.maxw(260), y.minw(50), y.pa(10), y.uac, y.bgColor('#F67C88'), y.mr(7), y.radiusA(5)]}>
        {
          content ?
            <Text style={[y.color('#fff'), y.fSize(15), y.maxw(180)]}>
              {content}
            </Text>
            : null
        }

        {children}
      </View>
      <Image style={[y.h(40), y.w(50), y.upa, y.right(0), y.zIndex(-1)]}
             source={require('../images/个人主页/chat/rtalk02.png')}/>
    </View>
    <Image style={[y.size(40), y.radiusA(5), y.bgColor('#333')]}/>
  </View>
)

const Left = ({children, content, style = []}) => (
  <View style={[y.udr, y.mt(12), ...style]}>
    <Image style={[y.size(40), y.radiusA(5), y.bgColor('#333')]}/>
    <View style={[y.ml(10), y.uf1, y.udr, y.upr]}>
      <View
        style={[y.udr, y.minh(40), y.minw(50), y.maxw(260), y.pa(10), y.uac, y.bgColor('#fff'), y.ml(7), y.radiusA(5)]}>
        {
          content ?
            <Text style={[y.color('#333'), y.fSize(15), y.maxw(200)]}>
              {content}
            </Text>
            : null
        }
        {children}
      </View>
      <Image style={[y.h(40), y.w(50), y.upa, y.left(0), y.zIndex(-1)]}
             source={require('../images/个人主页/chat/ltalk01.png')}/>
    </View>
  </View>
)
const Gift = ({name, img, price}) => (
  <View style={[y.uac, y.wRatio(25), y.mb(10)]}>
    <View style={[y.h(66), y.w(57), y.radiusA(5), y.ujc, y.uac]}>
      <Image style={[y.h(41), y.w(37)]} source={img}/>
      <Text style={[y.fSize(8), y.color('#414141')]}>{name}</Text>
    </View>
    <View style={[y.udr, y.mt(5)]}>
      <Image style={[y.size(17), y.mr(3)]} source={require('../images/个人主页/chat/txbb.png')}/>
      <Text style={[y.color('#FDAF01'), y.fSize(12)]}>{price}</Text>
    </View>
  </View>
)

const Item = ({img, title}) => (
  <View style={[y.uac, y.wRatio(25), y.mb(15)]}>
    <View style={[y.size(52), y.bgColor('#F5F8FA'), y.ujc, y.uac, y.radiusA(10)]}>
      <Image style={[y.size(30)]} source={img}/>
    </View>
    <Text style={[y.color('#333'), y.fSize(10), y.mt(10)]}>{title}</Text>
  </View>
)
