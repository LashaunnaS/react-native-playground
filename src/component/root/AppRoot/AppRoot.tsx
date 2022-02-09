/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import GoalForm from '../../form/GoalForm';
import GoalItem from '../../list/GoalItem';

export interface GoalItemProps {
  id: string;
  value: string;
}

const AppRoot = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoal] = useState<GoalItemProps[]>([]);

  const handleGoalInput = (input: string) => {
    setEnteredGoal(input);
  };

  const handleNewGoal = () => {
    setCourseGoal(currentGoal => [
      ...currentGoal,
      {id: Math.random().toString(), value: enteredGoal},
    ]);
    setEnteredGoal('');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <GoalForm
            enteredGoal={enteredGoal}
            handleGoalInput={handleGoalInput}
            handleNewGoal={handleNewGoal}
          />
        </View>
        <FlatList
          keyExtractor={item => item.id}
          data={courseGoals}
          renderItem={(goalItem: ListRenderItemInfo<GoalItemProps>) => (
            <GoalItem goalItem={goalItem} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexDirection: 'column',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default AppRoot;
