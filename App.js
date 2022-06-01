import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/screen/Home';
import About from './src/screen/About';
import Contact from './src/screen/Contact';
import Setting from './src/screen/Setting';
import Notification from './src/screen/Notification';
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {backgroundColor: 'red'},
          headerTintColor: '#fff',
          drawerActiveBackgroundColor: 'crimson',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor:'#000',
          drawerStyle: {backgroundColor: '#f4f4f4'},
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons name="home" size={30} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons name="information" size={30} />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons  name="contacts" size={30} />
            ),
          }}
        />
        <Drawer.Screen
          name="Notification"
          component={Notification}
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons name="bell" size={30} />
            ),
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={Setting}
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons name="cog-outline" size={30} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
