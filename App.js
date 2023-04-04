import React from 'react'
import { Dimensions, Text, View } from 'react-native';


const App = () => {
    const windowHeight = Dimensions.get('window').height;
  return (
    <View style={{backgroundColor:'white', height:windowHeight }}>
        <Text style={{color:'black'}}>self_help</Text>
    </View>
  )
}

export default App