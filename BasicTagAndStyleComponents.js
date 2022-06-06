import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding:30}}>
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
       <TextInput placeholder="Course Goal" style={{width:'80%',padding:10,borderWidth:1,borderColor:'black'}}/>
      <Button title='Add'/>
     </View>
     <View>

     </View>
    </View>
  );
}


