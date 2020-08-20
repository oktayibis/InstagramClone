import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView, FlatList} from 'react-native-gesture-handler';
import HistoryCard from '../components/HistoryCard';
import FeedCard from '../components/FeedCard';
import {connect} from 'react-redux';

const mockData = [];
const Feeds = (props) => {
  const render = ({item}) => <FeedCard user={item} />;
  return (
    <View>
      <ScrollView style={{marginBottom: 20, paddingBottom: 20}} horizontal>
        {props.feedList.map((card) => (
          <HistoryCard key={card.id} user={card} />
        ))}
      </ScrollView>
      <FlatList
        data={props.feedList}
        renderItem={render}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const mapStateToProps = ({authResponse}) => {
  const {feedList} = authResponse;
  return {feedList};
};
export default connect(mapStateToProps, {})(Feeds);
