import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {changeStatus} from '../redux/actions';
const Login = (props) => {
  console.log('is login', props.isLogin);
  return (
    <View>
      <Text>Login Page</Text>
      <TouchableOpacity onPress={() => props.changeStatus(true)}>
        <Text>Go To Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = ({authResponse}) => {
  const {isLogin} = authResponse;
  return {isLogin};
};
export default connect(mapStateToProps, {changeStatus})(Login);
