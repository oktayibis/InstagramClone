import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const FeedCard = (props) => {
  Icon.loadFont();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={{uri: props.user.image}}
            style={{width: 32, height: 32, borderRadius: 50}}
          />
          <Text style={{marginLeft: 10, alignSelf: 'center'}}>
            {props.user.name}
          </Text>
        </View>
        <View>
          <Icon name="dots-vertical" style={{fontSize: 20}} />
        </View>
      </View>
      <View>
        <Image style={styles.img} source={{uri: props.user.image}} />
      </View>
    </View>
  );
};

export default FeedCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 10,
  },
  dots: {
    textAlign: 'right',
  },
  img: {
    width: '100%',
    height: 400,
  },
});
