import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const HistoryCard = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{uri: props.user.image}} />
        </View>
        <Text style={styles.name}>{props.user.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  img: {
    width: 72,
    height: 72,
    borderRadius: 50,
  },
  imgContainer: {
    // @Todo linear-gradient kontrol et.
    borderRadius: 50,
    borderStartColor: 'orange',
    borderEndColor: 'yellow',
    borderWidth: 2,
  },
  container: {
    margin: 10,
  },
  name: {
    textAlign: 'center',
  },
});
