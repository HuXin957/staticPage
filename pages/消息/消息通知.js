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
  <View style={[y.uf1, y.bgColor('#fff')]}>
    <View style={[y.upr, y.udr, y.ujc, y.uac, y.pb(20), y.pt(10)]}>
      <Text style={[y.color('#bbb'), y.fSize(15), y.fWeight('bold')]}>消息</Text>
      <View style={[y.ml(28), y.uac]}>
        <Text style={[y.fSize(18), y.color('#333'), y.fWeight('bold')]}>通知</Text>
        <View style={[y.h(3), y.w(10), y.mt(4), y.bgColor('#F1628D'), y.radiusA(1)]}/>
      </View>
      <Image style={[y.upa, y.right(15), y.size(19)]} source={require('../images/我的切图/set.png')}/>
    </View>
    <ScrollView>
      <View style={[y.bgColor('#FEF2DA'),y.udr,y.uac, y.plr(16), y.ptb(12)]}>
        <Image style={[y.h(15), y.w(13),y.mr(10)]} source={require('../images/消息切图/broadcast.png')}/>
        <Text style={[y.fSize(12),y.color('#EB9E2A'),y.uf1]}>开启通知，可以获得更多机会哟~</Text>
        <Text style={[y.fSize(12),y.color('#EB9E2A'),y.bb(1),y.bdColor('#EB9E2A')]}>开启通知</Text>
      </View>
      {/*白雪佳人公告*/}
      <Notice title={'白雪佳人公告'}
              time={'5分钟以前'}
              img={require('../images/消息切图/bigsysmsg.png')}
              content={'欢迎来到白雪佳人，再结交新朋友前，我们提醒您...'}
              number={12}
      />
      {/*聚会消息*/}
      <Notice title={'聚会消息'}
              img={require('../images/消息切图/partymsg.png')}
              content={'暂未收到聚会消息'}
      />
      <Notice title={'评价通知'}
              time={'15分钟以前'}
              img={require('../images/消息切图/evaluatemsg.png')}
              content={'你好漂亮，可以做个朋友吗'}
              number={2}
      />
      <Notice title={'评论'}
              img={require('../images/消息切图/commentmsg.png')}
              content={'暂未收到评论消息'}
      />
      <Notice title={'圈子报名'}
              img={require('../images/消息切图/circlemsg.png')}
              content={'暂未收到评论消息'}
      />
      <Notice title={'喜欢我的'}
              time={'2分钟以前'}
              img={require('../images/消息切图/likemsg.png')}
              content={'暂未收到评论消息'}
      />
      <Notice title={'钱包提醒'}
              img={require('../images/消息切图/walletmsg.png')}
              content={'暂未收到评论消息'}
      />
      <Notice title={'查看申请'}
              time={'5分钟以前'}
              img={require('../images/消息切图/seemsg.png')}
              content={'暂未收到评论消息'}
              number={1}
      />
    </ScrollView>
  </View>
)

const Notice = ({img, title, content, time, number}) => (
  <View style={[y.udr, y.pl(15), y.pt(9)]}>
    <Image style={[y.size(50)]} source={img}/>
    <View style={[y.ml(17), y.uf1, y.pr(14), y.pt(5), y.bb(1), y.bdColor('#F3F4F7')]}>
      <View style={[y.udr, y.uac, y.ujb]}>
        <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>{title}</Text>
        <Text style={[y.color('#ccc'), y.fSize(10)]}>{time}</Text>
      </View>
      <View style={[y.udr, y.uac, y.uf1, y.mtb(13)]}>
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
