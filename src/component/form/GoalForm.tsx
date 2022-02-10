import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';
import styles from './GoalForm.styles';
import {GoalFormProps} from './GoalItem.types';

const GoalForm = ({handleNewGoal}: GoalFormProps): JSX.Element => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const handleGoalInput = (input: string) => {
    setEnteredGoal(input);
  };

  return (
    <>
      <TextInput
        placeholder="Enter some juicy text..."
        style={styles.input}
        onChangeText={handleGoalInput}
        value={enteredGoal}
      />
      <Button
        title="Add"
        onPress={() => handleNewGoal(enteredGoal, setEnteredGoal)}
      />
      {/* an alternitive is to call bind on the handler to preconfig ards to pass along to the handler
        <Button title="Add" onPress={handleNewGoal.bind(this, enteredGoal)} />
      */}
    </>
  );
};

export default GoalForm;
