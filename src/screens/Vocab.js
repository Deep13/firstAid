import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {medicalVocab} from '../components/data';
const Vocab = ({navigation, route}, props) => {
  const {vocabType} = route.params;
  const data = medicalVocab[vocabType];
  const [searchItem, setSearchItem] = useState('');

  return (
    <ScrollView style={{backgroundColor: '#FFF', padding: 5, flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Know medical terms better</Text>
      </View>
      <View style={styles.searchBar}>
        <Icon name="search" size={25} style={{paddingRight: 15}} />
        <TextInput
          placeholder="Search here"
          onChangeText={(text) => {
            setSearchItem(text);
          }}
          style={{flex: 1, padding: 0}}
          placeholderTextColor="#000"></TextInput>
        {/* <Icon name="mic" size={25} /> */}
      </View>
      <View style={{marginTop: 25}}>
        {data &&
          data
            .filter((val) => {
              if (searchItem === '') {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return val;
              }
            })
            .sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase())
            .map((val, index) => {
              return (
                <TouchableOpacity
                  style={styles.item}
                  key={index}
                  onPress={() => navigation.navigate('Details', {item: val})}>
                  <Text style={styles.title}>{val.title}</Text>
                  <Text style={styles.content}>{val.desc}</Text>
                </TouchableOpacity>
              );
            })}
      </View>
    </ScrollView>
  );
};

export default Vocab;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  headerText: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Raleway-SemiBold',
  },
  searchBar: {
    marginTop: 40,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 0.25,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#ccc',
    padding: 10,
    elevation: 10,
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 20,
    borderRadius: 5,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#ccc',
    elevation: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  content: {
    color: 'black',
    fontSize: 13,
    textAlign: 'justify',
  },
});
