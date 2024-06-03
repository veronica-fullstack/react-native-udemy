import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function GoalHandlerApp() {

  const [courseGoals,setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString()
      }
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal)=> goal.id !== id);
    });
  }; 

  return (
   <>
   {/* light */}
   <StatusBar style='auto' /> 
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal'
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />

      {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler}  onCancel={endAddGoalHandler}/>}

      <View style={styles.goalsContainer} >

        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandler}/>
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }

          }
          alwaysBounceVertical={true}>
          </FlatList>

        {/* <ScrollView  alwaysBounceVertical={true}>
          {courseGoals.map((goal)=>
            <View style={styles.goalItem} key={goal.id}>
              <Text style={styles.goalText}>
                {goal}
              </Text>
            </View>
          )}
        </ScrollView> */}

      </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    padding: 50,
    marginTop: 50, 
    paddingHorizontal: 16
  },
 
  goalsContainer: {
    flex: 5
  }
});
 