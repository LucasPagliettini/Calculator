import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import Calculator from './src/screens/Calculator'

const App = () => {
  return (
    <SafeAreaView 
      style={styles.safeAreaView}
      >
        <StatusBar 
          backgroundColor={'black'}
          barStyle='light-content'/>
      <Calculator/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1, 
  backgroundColor: 'black'
}
})

export default App
