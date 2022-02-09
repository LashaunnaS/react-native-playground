import React from 'react';
import {Button, StyleSheet, TextInput} from 'react-native';

interface GoalFormProps {
  enteredGoal: string;
  handleGoalInput: (input: string) => void;
  handleNewGoal: () => void;
}

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

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: '80%',
  },
});

export default GoalForm;
