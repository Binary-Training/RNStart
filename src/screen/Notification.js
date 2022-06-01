import { Link } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
      <Link to={{screen:'Home'}}>GO to Home page</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
export default Notification;
