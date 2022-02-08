/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

const AppRoot = () => {
  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter some juicy text..."
          style={styles.input}
        />
        <Button title="Add" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: '80%',
  },
});

export default AppRoot;
