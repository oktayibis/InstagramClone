import React from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {changeStatus} from '../redux/actions';
import InsInput from '../components/InsInput';
import InsSubmit from '../components/InsSubmit';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const Login = (props) => {
  console.log('is login', props.isLogin);
  Icon.loadFont();

  const [user, setUser] = React.useState({username: '', password: ''});

  const handleLogin = (params) => {
    if (
      params.username.toLowerCase() === props.mockUser.username.toLowerCase() &&
      params.password === props.mockUser.password
    ) {
      props.changeStatus(true);
    } else {
      Alert.alert('Error!!', 'Your username or password has not found!');
    }
  };
  const instaLogo =
    'https://pngimage.net/wp-content/uploads/2018/06/font-instagram-png-2.png';
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={{
            uri: instaLogo,
          }}
        />
      </View>
      <View style={styles.main}>
        <InsInput
          title="Phone, number, username or email"
          onChangeText={(text) => setUser({...user, username: text})}
        />
        <InsInput
          title="Password"
          secureTextEntry
          onChangeText={(text) => setUser({...user, password: text})}
        />
        <Text style={styles.link}>Forgot password?</Text>
        <InsSubmit title="Log In" onPress={() => handleLogin(user)} />
      </View>
      <View style={styles.footer}>
        <Icon name="facebook-official" style={styles.facebook} />
        <TouchableOpacity>
          <Text style={styles.link}>Continue as Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUp}>
        <Text style={styles.dont}>Don't you have an account?</Text>
        <TouchableOpacity>
          <Text style={[styles.link, {fontSize: 12}]}>Sign Up.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = ({authResponse}) => {
  const {isLogin, mockUser} = authResponse;
  return {isLogin, mockUser};
};
export default connect(mapStateToProps, {changeStatus})(Login);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
  },
  img: {
    width: '50%',
    height: '60%',
    resizeMode: 'contain',
  },
  link: {
    textAlign: 'right',
    marginRight: '5%',
    color: '#006EE0',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebook: {
    color: '#006EE0',
    fontSize: 30,
    marginRight: 10,
  },
  signUp: {
    borderTopColor: 'lightgrey',
    borderWidth: 1,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 0.2,
    alignItems: 'center',
  },
  dont: {
    color: '#838383',
    fontSize: 12,
    marginRight: -10,
  },
});
