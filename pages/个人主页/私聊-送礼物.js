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
import LinearGradient from "react-native-linear-gradient";

export default () => {
  StatusBar.setTranslucent(true)
  StatusBar.setBackgroundColor('rgba(0,0,0,.5)')
  return (
    <Modal
      visible={true}
      transparent
    >
      <View style={[y.bgColor('rgba(0,0,0,.5)'), y.ujc,y.uac, y.pa(10), y.uf1]}>
       <Image style={[y.h(269),y.w(260)]} source={require('../images/个人主页/chat/gift006.png')}/>
      </View>
    </Modal>
  )
}
