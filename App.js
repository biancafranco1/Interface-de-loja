import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Routes from './src/router';


export default function App() {
  return (
   
   <>
        <StatusBar style="light" backgroundColor="#000" translucent={true} />
    <Routes/>
   </> 
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
});
