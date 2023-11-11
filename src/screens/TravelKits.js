import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {travelTypes} from '../components/data';
import Icon from 'react-native-vector-icons/FontAwesome';

const TravelKit = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a type of Travel Kit</Text>
      <View style={{marginTop: 30, margin: 5}}>
        {travelTypes &&
          travelTypes.map((val, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() =>
                  navigation.navigate('KitInfo', {oftype: val.tag})
                }>
                <Image source={val.imgUrl} />
                <Text style={styles.itemText}>{val.title}</Text>
                <Icon
                  name="angle-right"
                  size={30}
                  color="#000"
                  style={{alignSelf: 'center', marginLeft: '35%'}}
                />
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

export default TravelKit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  itemText: {
    fontSize: 20,
    lineHeight: 23,
    color: '#000',
    alignSelf: 'center',
    left: 25,
    width: 90,
  },
  header: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'Raleway-SemiBold',
    marginTop: 40,
    alignSelf: 'center',
  },
  item: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    borderRadius: 5,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#ccc',
    elevation: 10,
    flexDirection: 'row',
  },
});
