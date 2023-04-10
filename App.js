import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import { data } from './src/data/data';

const App = () => {
  const [title, setTitle] = useState('');
  return (
    <View style={styles.mainView}>
      <FlatList
        data={data}
        keyExtractor={((item) => item.category)}
        renderItem={(item) => {
          return (
            <View style={styles.cardStyle}>
            </View>
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  cardStyle: {
    flexGrow: 1
  },
  subtitleView: {
    flexGrow: 1
  }
});

export default App;