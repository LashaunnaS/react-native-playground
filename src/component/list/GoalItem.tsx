import React from 'react';
import {ListRenderItemInfo, StyleSheet, Text, View} from 'react-native';
import {GoalItemProps} from '../root/AppRoot/AppRoot';

interface Props {
  goalItem: ListRenderItemInfo<GoalItemProps>;
}

const GoalItem = ({goalItem}: Props): JSX.Element => (
  <View style={styles.listItem}>
    <Text style={styles.item}>{goalItem.item.value}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#eef8ff',
    borderColor: '#14110F',
    borderWidth: 1,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  item: {
    paddingVertical: 2,
  },
});

export default GoalItem;
