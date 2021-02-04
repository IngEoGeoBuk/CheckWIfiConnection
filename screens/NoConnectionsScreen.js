import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import RNRestart from 'react-native-restart';


const NoConnectionsScreen = (props) => {
    return (
        <View>
            <Text>NoConnectionsScreen</Text>
            {/* <Button title="Reload Page" onPress={props.onCheck}/> */}
            <Button title="Reload Page" onPress={() => RNRestart.Restart()}/>
        </View>
    )
}

export default NoConnectionsScreen

const styles = StyleSheet.create({})