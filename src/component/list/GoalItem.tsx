import React from 'react';
import {Text, View} from 'react-native';
import styles from './GoalItem.styles';
import {GoalItemListitemProps} from './GoalItem.types';

const GoalItem = ({title}: GoalItemListitemProps): JSX.Element => (
  <View style={styles.listItem}>
    <Text style={styles.item}>{title}</Text>
  </View>
);

export default GoalItem;
