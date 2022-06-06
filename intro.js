import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText,setOutputText]=useState('Welcome to react native');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Click me" onPress={()=>setOutputText('welcome himanshu sharma')}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    Text:'bold'
  },
});
