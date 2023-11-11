import React, {useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {allFirstAids} from '../components/data';

const Categories = ({navigation}) => {
  const [searchItem, setSearchItem] = useState('');

  return (
    <ScrollView style={{padding: 5, backgroundColor: '#FFF'}}>
      <View style={styles.searchBar}>
        <Icon name="search" size={25} style={{paddingRight: 15}} />
        <TextInput
          placeholder="What topic are you looking for?"
          onChangeText={(text) => {
            setSearchItem(text);
          }}
          style={{flex: 1, padding: 0}}
          placeholderTextColor="#000"></TextInput>
        {/* <Icon name="mic" size={25} /> */}
      </View>
      <View
        style={{
          marginTop: 35,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          padding: 5,
        }}>
        {allFirstAids &&
          allFirstAids
            .filter((val) => {
              if (searchItem === '') {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, index) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Steps', {category: val.tag})
                  }
                  key={index}
                  style={[styles.card, styles.shadowProp]}>
                  <Image
                    source={val.imgUrl}
                    style={styles.cardImage}
                    alt="Category image"
                  />
                  <Text style={styles.cardText}>{val.title}</Text>
                </TouchableOpacity>
              );
            })}
      </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 50,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    shadowColor: '#ccc',
    borderRadius: 5,
    borderWidth: 0.25,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    elevation: 10,
  },
  card: {
    backgroundColor: 'white',
    width: '30%',
    height: 75,
    borderRadius: 5,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  cardText: {
    color: '#000',
    margin: 5,
    fontWeight: 'bold',
  },
});
