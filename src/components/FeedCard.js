import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const FeedCard = (props) => {
  Icon.loadFont();
  Icon2.loadFont();

  const [like, setLike] = React.useState(false);
  let lastTab = null;
  const handleDoubleTab = () => {
    const now = Date.now();
    const DOUBLE_PRESS = 300;
    if (lastTab && now - lastTab < DOUBLE_PRESS) {
      setLike(!like);
    } else {
      lastTab = now;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image source={{uri: props.user.image}} style={styles.avatar} />
          <Text style={{alignSelf: 'center'}}>{props.user.name}</Text>
        </View>

        <View>
          <Icon name="dots-vertical" style={{fontSize: 20}} />
        </View>
      </View>
      <TouchableWithoutFeedback onPress={() => handleDoubleTab()}>
        <View>
          <Image style={styles.img} source={{uri: props.user.image}} />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.footer}>
        <View style={styles.iconLeft}>
          {!like ? (
            <Icon2 name="heart-o" style={styles.icon} />
          ) : (
            <Icon2 name="heart" style={styles.icon} color="red" />
          )}
          <Icon2 name="comment-o" style={styles.icon} />
          <Icon2 name="send-o" style={styles.icon} />
        </View>
        <Icon2 name="bookmark-o" style={styles.icon} />
      </View>
      <View style={styles.likes}>
        <Text style={styles.likeText}>18 likes</Text>
      </View>
      <View style={styles.commentContainer}>
        <Image style={styles.avatar} source={{uri: props.user.image}} />

        <Text style={{marginRight: 10}}>
          <Text style={{fontWeight: '700', alignSelf: 'center'}}>
            {props.user.name}{' '}
          </Text>
          This is one of the impartmant day for me with my magic friends!
        </Text>
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
  footer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  likes: {
    marginLeft: 10,
    marginVertical: 10,
  },
  likeText: {
    fontWeight: '700',
  },
  commentContainer: {
    paddingHorizontal: 10,
    marginRight: 10,
    flexDirection: 'row',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 50,
    marginRight: 10,
  },
  icon: {
    fontSize: 22,
    margin: 7,
  },
  iconLeft: {
    flexDirection: 'row',
  },
});
