import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Feeds from './screens/Feeds';
import Login from './screens/Login';
import {connect} from 'react-redux';
const Rooter = (props) => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.isLogin ? (
          <Stack.Screen name="feeds" component={Feeds} />
        ) : (
          <Stack.Screen name="login">
            {(props) => <Login {...props} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = ({authResponse}) => {
  const {isLogin} = authResponse;
  return {isLogin};
};
export default connect(mapStateToProps, {})(Rooter);
