import React from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Feeds from './screens/Feeds';
import Login from './screens/Login';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Rooter = (props) => {
  Icon.loadFont();

  const Stack = createStackNavigator();
  function LogoTitle() {
    return (
      <Image
        style={{width: 100, height: 40}}
        source={{
          uri:
            'https://pngimage.net/wp-content/uploads/2018/06/font-instagram-png-2.png',
        }}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.isLogin ? (
          <Stack.Screen
            name="feeds"
            component={Feeds}
            options={{
              headerRight: () => (
                <TouchableOpacity>
                  <Icon name="send" style={{fontSize: 22, marginRight: 10}} />
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity>
                  <Icon name="camera" style={{fontSize: 22, marginLeft: 10}} />
                </TouchableOpacity>
              ),
              headerTitle: (props) => <LogoTitle {...props} />,
            }}
          />
        ) : (
          <Stack.Screen options={{headerShown: false}} name="login">
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
