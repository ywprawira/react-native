import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {connect} from 'react-redux';

import Landing from '../Landing';
import Login from '../Login';
import Profile from '../Profile';
import Homepage from '../Homepage';
import PLP from '../PLP';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

const Wrapper = ({auth}) => {
  const StackAuth = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={Landing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{title: 'Login'}}
        />
      </Stack.Navigator>
    );
  };

  const StackLogined = () => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>
        <Tab.Screen name="Homepage" component={Homepage} />
        <Tab.Screen name="PLP" component={PLP} />
        <Tab.Screen name="Cart" component={Homepage} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      {auth.user !== null ? <StackLogined /> : <StackAuth />}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  null,
)(Wrapper);
