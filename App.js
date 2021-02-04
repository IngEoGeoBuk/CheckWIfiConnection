import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { checkConnected } from './function';
import NoConnectionsScreen from './screens/NoConnectionsScreen';

const App = () => {

  const [connectStatus, setConnectStatus] = useState(false);
  checkConnected().then(res => {
    setConnectStatus(res)
  })
  
  return (
    connectStatus ? 
    <View>
      <Text>fff</Text>
    </View> : (<NoConnectionsScreen onCheck={checkConnected}/>)
  )
}

export default App

const styles = StyleSheet.create({})
