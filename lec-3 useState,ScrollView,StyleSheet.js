import React,{useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TextInput,Text, View, Button,ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal,setEnterGoal]=useState('');
  const [courseGoals,setCourseGoals]=useState([]);
  const goalInputHandler=(enterText)=>{
    setEnterGoal(enterText);
  }
  const addGoalHandler =()=>{
      setCourseGoals(newList=>[...newList,enteredGoal])
  }

  return (
    <View style={styles.root}>
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
       <TextInput placeholder="Course Goal " style={styles.input}
        onChangeText={goalInputHandler} value={enteredGoal}/>
      <Button title='Add' onPress={addGoalHandler}/>
     </View>
     <ScrollView>
        { courseGoals.map((goal)=>
        ( <View style={styles.listItem}> 
        <Text key={goal}>{goal}</Text>
        </View>
        ))}
     </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
     root:{
       padding:50,
     },
     input:{
      width:'80%',
      padding:10,
      borderWidth:1,
      borderColor:'black'
     },
     listItem:{
       padding:10,
       margin:10,
       backgroundColor:'#ccc',
       borderWidth:1,
       borderColor:'red',

     },
});
  


