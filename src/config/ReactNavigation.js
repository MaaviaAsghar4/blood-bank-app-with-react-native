import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Requests from '../screens/Requests';
import PostRequest from '../screens/PostRequest';
import UserInfo from '../screens/UserInfo';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Info from '../screens/Info';
import {connect} from 'react-redux';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ReactNavigation = ({user}) => {
  return (
    <NavigationContainer>
      {user.email ? (
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
            component={UserInfo}
            options={{
              title: 'User Info',
              headerStyle: {backgroundColor: '#ea4335'},
              headerTitleStyle: {
                textAlign: 'center',
                fontWeight: 'bold',
              },
            }}
          />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              title: 'Sign In',
              headerStyle: {backgroundColor: '#ea4335'},
              headerTitleStyle: {
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#f7f7f7',
              },
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              title: 'Sign Up',
              headerStyle: {backgroundColor: '#ea4335'},
              headerTitleStyle: {
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#f7f7f7',
              },
            }}
          />
          <Stack.Screen
            name="Info"
            component={Info}
            options={{
              title: 'User Info',
              headerStyle: {backgroundColor: '#ea4335'},
              headerTitleStyle: {
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#f7f7f7',
              },
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, null)(ReactNavigation);
