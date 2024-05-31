import { View, Text, StyleSheet, TextInput, Button, Alert, Modal } from 'react-native'
import React, { useState } from 'react'



const GoalInput = (props) => {

    const [enteredGoalText, setEnteredGoalText]= useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        if (!enteredGoalText && enteredGoalText === '') {
            Alert.alert("Error","Please input another course goal!");
            return;
        }

        props.onAddGoal(enteredGoalText); // function
        setEnteredGoalText('');
    };

    function cancelGoalHandler() {
        setEnteredGoalText('');
    }

  return (
   <Modal visible={props.visible} animationType='slide'>
     <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={goalInputHandler}></TextInput>
        <Button title='Add Goal' onPress={addGoalHandler}></Button>
       
       <View>
        <Button title='Add Goal' onPress={addGoalHandler}></Button>
        <Button title='Cancel' onPress={cancelGoalHandler}></Button>
       </View>

     </View>
   </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: { 
        flex: 1,
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        padding: 8,
        marginRight: 8
      },
      buttonContainer: {
        
      }
});