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
import {FlatList, ListRenderItemInfo, SafeAreaView, View} from 'react-native';
import GoalForm from '../../form/GoalForm';
import GoalItem from '../../list/GoalItem';

import styles from './AppRoot.styles';
import {GoalItemProps} from './AppRoot.types';

const AppRoot = () => {
  const [courseGoals, setCourseGoal] = useState<GoalItemProps[]>([]);

  const handleNewGoal = (
    goalTitle: string,
    setEnteredGoal: (goalTitle: string) => void,
  ) => {
    setCourseGoal(currentGoal => [
      ...currentGoal,
      {id: Math.random().toString(), value: goalTitle},
    ]);
    setEnteredGoal('');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <GoalForm handleNewGoal={handleNewGoal} />
        </View>
        <FlatList
          keyExtractor={item => item.id}
          data={courseGoals}
          renderItem={(goalItem: ListRenderItemInfo<GoalItemProps>) => (
            <GoalItem title={goalItem.item.value} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default AppRoot;
