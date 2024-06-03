import { View, Text, StyleSheet, TextInput, Button, Alert, Modal, Image } from 'react-native'
import React, { useState } from 'react'



const GoalInput = (props) => {

    const [enteredGoalText, setEnteredGoalText]= useState('');
    const [modalIsVisible, setModalIsVisible]= useState('');

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

  return (
   <Modal visible={props.visible} animationType='slide'>
     <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput 
        style={styles.textInput} 
        placeholder='Your course goal'
         onChangeText={goalInputHandler}
         value={enteredGoalText}></TextInput>
       
       <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Add Goal' onPress={addGoalHandler} color='#5e0acc'></Button>
        </View>
        <View style={styles.button}>
          <Button title='Cancel' onPress={props.onCancel} color='#f31282'></Button>
        </View>
       </View>

     </View>
   </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: { 
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingBottom: 16,
        backgroundColor: '#311b6b'
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '90%',
        padding: 8,
        marginRight: 8,
        color: '#fff',
        placeholder: '#fff'
      },
      buttonContainer: {
        flexDirection: 'row'
      },
      button: {
        width: '50%',
        marginHorizontal: 5,
        padding:8,
        marginTop:5
      }
});