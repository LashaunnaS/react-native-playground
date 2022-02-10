export interface GoalFormProps {
  handleNewGoal: (
    goalTitle: string,
    setEnteredGoal: (goalTitle: string) => void,
  ) => void;
}
