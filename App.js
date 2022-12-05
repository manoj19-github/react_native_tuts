import {useState} from "react"
import { StyleSheet, Text, View,FlatList,Button } from 'react-native';
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText,setEnteredGoalText] = useState('')
  const [courseGoals,setCourseGoal] = useState([]);
  const [modalIsVisible,setModalVisible] = useState(false);
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
      <Button title="Add new goal" color="#5e0acc" onPress={()=>setModalVisible(true)} style={{marginTop:10}}/>
     <GoalInput enteredGoalText={enteredGoalText} goInputHandler={goInputHandler} addGoalInputHandler={addGoalInputHandler} showModal={modalIsVisible} setShowModal={setModalVisible}/>
     <Text style={{marginVertical:10}}>List Of Goal</Text>
     <FlatList data={courseGoals} renderItem={itemData=>{
      return(
        <GoalItem text={itemData.item.text} index={itemData.index} removeGoal={removeGoal}/>
      
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
  
  goalsContainer:{
    flex:3
  },



});
