import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal
} from 'react-native';
import y from '../style'
import {IconText, Header} from '../components'
import LinearGradient from "react-native-linear-gradient";

export default () => (
  <Modal
    visible={true}
    transparent
  >
    <View style={[y.uf1]}>
      <View style={[y.uf1, y.ujc]}>
        <Text style={[y.fSize(20), y.color('#333333'), y.fWeight('bold'), y.uSelfCenter]}>发起活动</Text>
      </View>
      <View style={[y.uf1, y.ujc]}>
        <View style={[y.udr, y.uac, y.uWrap]}>
          <Item title={'社交聚会'} img={require('../images/聚会/party1.png')}/>
          <Item title={'健康运动'} img={require('../images/聚会/motion1.png')}/>
          <Item title={'旅行休闲'} img={require('../images/聚会/travel1.png')}/>
          <Item title={'陪我吃饭'} img={require('../images/聚会/eat1.png')}/>
          <Item title={'看电影'} img={require('../images/聚会/movie1.png')}/>
        </View>
        <Image style={[y.size(30), y.mt(30), y.uSelfCenter]} source={require('../images/聚会/off1.png')}/>
      </View>
    </View>
  </Modal>
)

const Item = ({title, img}) => (
  <View style={[y.uac, y.wRatio(33), y.mt(31)]}>
    <Image style={[y.size(58)]} source={img}/>
    <Text style={[y.fSize(12), y.color('#666')]}>{title}</Text>
  </View>
)
