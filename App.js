import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { data } from './src/data/data';

const App = () => {
  const [category, setCategory] = useState('');
  return (
    <View style={styles.mainView}>
      <FlatList
      style={{backgroundColor: 'black'}}
        data={data}
        keyExtractor={((item) => item.category)}
        renderItem={({item}) => {
          
          return (
            <View style={{...styles.cardStyle, backgroundColor: `${item.color}`, height: 200}}>
              <TouchableOpacity onPress={() => {
                console.log(item.category);
                setCategory(item.category)}
              }>
              <Text style={{fontWeight: 'bold', fontSize: 70, color: `${item.textColor}`}}>{item.category}</Text>
              {category == item.category ? 
              <View style={{flexGrow: 1}}>
                {item.titles.map((item) => {
                  return(
                  <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{item}</Text>
                  )
                })}
              </View> : null}
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    
  },
  cardStyle: {
   flex: 1,
   justifyContent: 'center', 
   alignItems: 'center'
  },
  subtitleView: {
    flexGrow: 1
  }
});

export default App;