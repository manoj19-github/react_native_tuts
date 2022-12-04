import {useState} from "react"
import { StyleSheet, Text, View,Button, TextInput,ScrollView,FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText,setEnteredGoalText] = useState('')
  const [courseGoals,setCourseGoal] = useState([]);
  const goInputHandler = (enteredText)=>{
    setEnteredGoalText(enteredText);
  }
  const addGoalInputHandler = ()=>{
    setCourseGoal((prev)=>([...prev,{text:enteredGoalText,_id:Date.now().toString()}]));
    // setEnteredGoalText('')

  }
  const removeGoal=(index)=>{
    const filteredGoals = courseGoals.filter((goal,_index)=>index!== _index);
    setCourseGoal(filteredGoals)
  }
  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput value={enteredGoalText} placeholder="Enter Goal" style={styles.textInput} onChangeText={goInputHandler} />
      <Button title="Add Goal" onPress={addGoalInputHandler} />
     </View>
     <Text style={{marginVertical:10}}>List Of Goal</Text>
     <FlatList data={courseGoals} renderItem={itemData=>{
      return(
        <Text onPress={()=>removeGoal(itemData.index)} style={styles.goalText}> {itemData.item.text}</Text>
      )
     }}  keyExtractor={(item,index)=> item._id} alwaysBounceVertical={false} style={styles.goalsContainer}>
        
        
     </FlatList>
      
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop:50,
    paddingHorizontal:16,
    flex:1
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:50,
    borderBottomColor:'#cccccc',
    borderBottomWidth:1,
    marginTop:40,
    
  },
  textInput:{
    borderWidth:1,
    borderColor:'#cccccc',
    width:'70%',
  },
  goalsContainer:{
    flex:3
  },
  goalText:{
    margin:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
    padding:8,
    color:'#fff'

  }


});
