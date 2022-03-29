import React from 'react';
import Page from './pages/个人主页/私聊'
import {StatusBar} from "react-native";


const App = () => {
  StatusBar.setBarStyle('dark-content')
  StatusBar.setBackgroundColor('#fff')

  return (
    <Page></Page>
  )
}


export default App;
