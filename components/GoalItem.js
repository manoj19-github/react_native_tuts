import { StyleSheet,Text,Pressable } from "react-native"
const GoalItem = ({index,text,removeGoal}) => {
  return (
    <Pressable  onPress={()=>removeGoal(index)}>
        <Text  style={styles.goalText}> {text}</Text>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
    goalText:{
        margin:8,
        borderRadius:6,
        backgroundColor:'#5e0acc',
        padding:8,
        color:'#fff'
    
      }

})