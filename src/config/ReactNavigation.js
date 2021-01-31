import React, {useEffect, useState} from 'react';
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
import {asyncState} from '../store/actions/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ReactNavigation = ({email, asyncState}) => {
  let [userEmail, setUserEmail] = useState(null);
  const asyncFunction = async () => {
    if (email.user === null) {
      const value = await AsyncStorage.getItem('userEmail');
      setUserEmail(value);
      asyncState();
    } else {
      setUserEmail(null);
    }
  };
  const reRender = async () => {
    const value = await AsyncStorage.getItem('userEmail');
    setUserEmail(value);
  };

  const stopRendering = () => {
    setUserEmail(null);
  };

  useEffect(() => {
    asyncFunction();
  }, [email.user]);
  return (
    <NavigationContainer>
      {userEmail ? (
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
            name="UserInfo"
            options={{
              title: 'User Info',
              headerStyle: {backgroundColor: '#ea4335'},
              headerTitleStyle: {
                textAlign: 'center',
                fontWeight: 'bold',
              },
            }}>
            {(props) => <UserInfo {...props} stopRendering={stopRendering} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            options={{
              title: 'Sign In',
              headerStyle: {backgroundColor: '#ea4335'},
              headerTitleStyle: {
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#f7f7f7',
              },
            }}>
            {(props) => <SignIn {...props} />}
          </Stack.Screen>
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
            options={{
              title: 'User Info',
              headerStyle: {backgroundColor: '#ea4335'},
              headerTitleStyle: {
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#f7f7f7',
              },
            }}>
            {(props) => <Info {...props} reRender={reRender} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  email: state.asyncStorage.email,
});

const mapDispatchToProps = (dispatch) => ({
  asyncState: () => dispatch(asyncState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactNavigation);
// export default ReactNavigation;
