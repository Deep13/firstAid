import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {vocabTypes} from '../components/data';

const VocabTypes = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a category</Text>
      <View style={styles.vocabBlock}>
        {vocabTypes &&
          vocabTypes.map((val, index) => {
            return (
              <TouchableOpacity
                style={styles.item}
                key={index}
                onPress={() =>
                  navigation.navigate('Vocab', {vocabType: val.tag})
                }>
                <Image source={val.imgUrl} />
                <Text style={styles.itemText}>{val.title}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

export default VocabTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  vocabBlock: {
    marginTop: 30,
    margin: 5,
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
    flexDirection: 'row',
  },
  itemText: {
    fontSize: 20,
    lineHeight: 23,
    color: '#000',
    alignSelf: 'center',
    left: 25,
  },
  header: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Raleway-SemiBold',
    marginTop: 40,
    alignSelf: 'center',
  },
});
