import React from 'react'
import { StyleSheet,View,TextInput,Button,Modal } from 'react-native'
const GoalInput = ({enteredGoalText,goInputHandler,addGoalInputHandler,showModal,setShowModal}) => {
  return (
    <Modal visible={showModal} animationType="slide" >
        <View style={styles.inputContainer}>
        <TextInput value={enteredGoalText} placeholder="Enter Goal" style={styles.textInput} onChangeText={goInputHandler}  />
        <View style={styles.btnContainer}>
        <Button style={styles.buttonText} title="Add Goal" onPress={addGoalInputHandler} />
        <Button style={styles.buttonText}  title="Cancel" onPress={()=>setShowModal(false)}/>
      </View>
     </View>
    </Modal>
  ) 
}

export default GoalInput
const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        paddingBottom:50,
        borderBottomColor:'#cccccc',
        borderBottomWidth:1,
        marginTop:40,
        
      },
      textInput:{
        borderWidth:1,
        borderColor:'#cccccc',
        width:'90%',
        marginLeft:10,
        marginBottom:10
      },
      btnContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:10
      },
      buttonText:{
        width:200,
        paddingHorizontal:10
      }
})