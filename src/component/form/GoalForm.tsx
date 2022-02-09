import React from 'react';
import {Button, TextInput} from 'react-native';
import styles from './GoalForm.styles';
import {GoalFormProps} from './GoalItem.types';

const GoalForm = ({
  enteredGoal,
  handleGoalInput,
  handleNewGoal,
}: GoalFormProps): JSX.Element => (
  <>
    <TextInput
      placeholder="Enter some juicy text..."
      style={styles.input}
      onChangeText={handleGoalInput}
      value={enteredGoal}
    />
    <Button title="Add" onPress={handleNewGoal} />
  </>
);

export default GoalForm;
