import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function About() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button title='Go Back' onPress={() => navigation.goBack() } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default About;
