import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Requests from '../screens/Requests';
import PostRequest from '../screens/PostRequest';
import Auth from '../screens/Auth';

const Drawer = createDrawerNavigator();

const ReactNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {backgroundColor: '#ea4335'},
            headerTitleStyle: {
              textAlign: 'center',
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name="Requests"
          component={Requests}
          options={{
            title: 'Requests',
            headerStyle: {backgroundColor: '#ea4335'},
            headerTitleStyle: {
              textAlign: 'center',
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name="PostRequest"
          component={PostRequest}
          options={{
            title: 'PostRequest',
            headerStyle: {backgroundColor: '#ea4335'},
            headerTitleStyle: {
              textAlign: 'center',
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name="Auth"
          component={Auth}
          options={{
            title: 'Auth',
            headerStyle: {backgroundColor: '#ea4335'},
            headerTitleStyle: {
              textAlign: 'center',
              fontWeight: 'bold',
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default ReactNavigation;
