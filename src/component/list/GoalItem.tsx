import React from 'react';
import {Text, View} from 'react-native';
import styles from './GoalItem.styles';
import {GoalItemListitemProps} from './GoalItem.types';

const GoalItem = ({goalItem}: GoalItemListitemProps): JSX.Element => (
  <View style={styles.listItem}>
    <Text style={styles.item}>{goalItem.item.value}</Text>
  </View>
);

export default GoalItem;
