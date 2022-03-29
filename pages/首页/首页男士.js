import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import y from '../style'

export default () => {
  return (
    <View style={[y.bgColor('#fff')]}>
      <View style={[y.udr, y.uac, y.ptb(20), y.plr(12)]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#FFC1A3', '#F1628D']}
          style={[y.udr, y.uac, y.ujc, y.w(65), y.h(22), y.radiusA(11)]}>
          <Text style={[y.color('#fff'), y.fSize(15)]}>附近</Text>
          <Image
            source={require('../images/首页切图/xl.png')}
            style={[y.h(8), y.w(13), y.fWeight('bold'), y.ml(3)]}/>
        </LinearGradient>
        <View style={[y.udr, y.uac, y.ml(39), y.uf1]}>
          <Text style={[y.color('#BBB'), y.fSize(15), y.fWeight('bold')]}>新人</Text>
          <Text style={[y.color('#BBB'), y.fSize(15), y.fWeight('bold'), y.ml(39)]}>女神</Text>
        </View>
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
      </View>
      {/*列表*/}
      <ScrollView style={[y.udr, y.bgColor('#F5F8FA')]}>
        <View style={[y.udr, y.plr(12)]}>
          {/*item*/}
          <View style={[y.radiusA(10), y.mt(13), y.uof]}>
            <ImageBackground style={[y.size(170), y.udr, y.ujb, y.bgColor('#333')]}>
              <View style={[y.udr, y.uac, y.bgColor('#000'), y.radiusA(8), y.plr(7), y.h(15), y.ml(7), y.mt(7)]}>
                <Image
                  resizeMode={'contain'}
                  source={require('../images/首页切图/poto.png')}
                  style={[y.size(9), y.mr(6)]}/>
                <Text style={[y.fSize(10), y.color('#fff')]}>4</Text>
              </View>
              <Image
                resizeMode={'contain'}
                source={require('../images/首页切图/gz.png')}
                style={[y.size(17), y.mt(9), y.mr(11)]}/>
            </ImageBackground>

            {/*底部信息*/}
            <View style={[y.bgColor('#fff'), y.pa(10)]}>
              <View style={[y.udr, y.uac]}>
                <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>小微</Text>
                <Image
                  source={require('../images/首页切图/goddess.png')}
                  style={[y.w(40), y.h(14), y.ml(10)]}/>
              </View>
              <Text style={[y.color('#8F9AB3'), y.fSize(10), y.mt(10)]}>深圳市 · 26岁天秤座 · 学生</Text>
              <View style={[y.udr, y.uac, y.mt(10)]}>
                <Image
                  resizeMode={'contain'}
                  source={require('../images/首页切图/map.png')}
                  style={[y.h(9), y.w(7), y.mr(7)]}/>
                <Text style={[y.color('#38CC76'), y.fSize(10)]}>0.3km · 在线</Text>
              </View>
            </View>
            {/*底部信息end*/}
          </View>
          {/*item-end*/}
          <View style={[y.radiusA(10), y.mt(13), y.uof,y.ml(11)]}>
            <ImageBackground style={[y.size(170), y.udr, y.ujb, y.bgColor('#333')]}>
              <View style={[y.udr, y.uac, y.bgColor('#000'), y.radiusA(9), y.plr(7), y.h(19), y.ml(7), y.mt(7)]}>
                <Image
                  resizeMode={'contain'}
                  source={require('../images/首页切图/package.png')}
                  style={[y.size(9), y.mr(6)]}/>
                <Text style={[y.fSize(10), y.color('#fff')]}>付费相册</Text>
              </View>
              <Image
                resizeMode={'contain'}
                source={require('../images/首页切图/gz1.png')}
                style={[y.size(17), y.mt(9), y.mr(11)]}/>
            </ImageBackground>

            {/*底部信息*/}
            <View style={[y.bgColor('#fff'), y.pa(10)]}>
              <View style={[y.udr, y.uac]}>
                <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>小微</Text>
                <Image
                  source={require('../images/首页切图/person.png')}
                  style={[y.w(40), y.h(14), y.ml(10)]}/>
              </View>
              <Text style={[y.color('#8F9AB3'), y.fSize(10), y.mt(10)]}>深圳市 · 26岁天秤座 · 学生</Text>
              <View style={[y.udr, y.uac, y.mt(10)]}>
                <Image
                  resizeMode={'contain'}
                  source={require('../images/首页切图/map.png')}
                  style={[y.h(9), y.w(7), y.mr(7)]}/>
                <Text style={[y.color('#38CC76'), y.fSize(10)]}>0.3km · 在线</Text>
              </View>
            </View>
            {/*底部信息end*/}
          </View>

        </View>
        <View style={[y.udr, y.plr(12)]}>
          {/*item*/}
          <View style={[y.radiusA(10), y.mt(13), y.uof]}>
            <ImageBackground style={[y.size(170), y.udr, y.ujb, y.bgColor('#333')]}>
              <View style={[y.udr, y.uac, y.bgColor('#000'), y.radiusA(8), y.plr(7), y.h(15), y.ml(7), y.mt(7)]}>
                <Image
                  resizeMode={'contain'}
                  source={require('../images/首页切图/poto.png')}
                  style={[y.size(9), y.mr(6)]}/>
                <Text style={[y.fSize(10), y.color('#fff')]}>4</Text>
              </View>
              <Image
                resizeMode={'contain'}
                source={require('../images/首页切图/gz.png')}
                style={[y.size(17), y.mt(9), y.mr(11)]}/>
            </ImageBackground>

            {/*底部信息*/}
            <View style={[y.bgColor('#fff'), y.pa(10)]}>
              <View style={[y.udr, y.uac]}>
                <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>小微</Text>
                <Image
                  source={require('../images/首页切图/vip.png')}
                  style={[y.w(40), y.h(14), y.ml(10)]}/>
              </View>
              <Text style={[y.color('#8F9AB3'), y.fSize(10), y.mt(10)]}>深圳市 · 26岁天秤座 · 学生</Text>
              <View style={[y.udr, y.uac, y.mt(10)]}>
                <Image
                  resizeMode={'contain'}
                  source={require('../images/首页切图/map.png')}
                  style={[y.h(9), y.w(7), y.mr(7)]}/>
                <Text style={[y.color('#38CC76'), y.fSize(10)]}>0.3km · 在线</Text>
              </View>
            </View>
            {/*底部信息end*/}
          </View>
          {/*item-end*/}
          <View style={[y.radiusA(10), y.mt(13), y.uof,y.ml(11)]}>
            <ImageBackground style={[y.size(170), y.udr, y.ujb, y.bgColor('#333')]}>
              <View style={[y.udr, y.uac, y.bgColor('#000'), y.radiusA(9), y.plr(7), y.h(19), y.ml(7), y.mt(7)]}>
                <Image
                  resizeMode={'contain'}
                  source={require('../images/首页切图/package.png')}
                  style={[y.size(9), y.mr(6)]}/>
                <Text style={[y.fSize(10), y.color('#fff')]}>付费相册</Text>
              </View>
              <Image
                resizeMode={'contain'}
                source={require('../images/首页切图/gz1.png')}
                style={[y.size(17), y.mt(9), y.mr(11)]}/>
            </ImageBackground>

            {/*底部信息*/}
            <View style={[y.bgColor('#fff'), y.pa(10)]}>
              <View style={[y.udr, y.uac]}>
                <Text style={[y.color('#333'), y.fSize(14), y.fWeight('bold')]}>小微</Text>
                <Image
                  source={require('../images/首页切图/person.png')}
                  style={[y.w(40), y.h(14), y.ml(10)]}/>
              </View>
              <Text style={[y.color('#8F9AB3'), y.fSize(10), y.mt(10)]}>深圳市 · 26岁天秤座 · 学生</Text>
              <View style={[y.udr, y.uac, y.mt(10)]}>
                <Image
                  resizeMode={'contain'}
                  source={require('../images/首页切图/map.png')}
                  style={[y.h(9), y.w(7), y.mr(7)]}/>
                <Text style={[y.color('#38CC76'), y.fSize(10)]}>0.3km · 在线</Text>
              </View>
            </View>
            {/*底部信息end*/}
          </View>

        </View>
      </ScrollView>

    </View>
  )
}
