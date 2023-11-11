import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {vehicleTypes} from '../components/data';
import Icon from 'react-native-vector-icons/FontAwesome';

const VehicleKits = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a type of vehicle kit</Text>
      <View style={{marginTop: 30, margin: 5}}>
        {vehicleTypes &&
          vehicleTypes.map((val, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.item}
                onPress={() =>
                  navigation.navigate('KitInfo', {oftype: val.tag})
                }>
                <Image source={val.imgUrl} style={{left: 10}} />
                <Text style={styles.itemText}>{val.title}</Text>
                {/* <Icon
                  name="angle-right"
                  size={30}
                  color="#000"
                  style={{alignSelf: 'center', marginLeft: '35%'}}
                /> */}
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

export default VehicleKits;

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
    left: 40,
    width: 120,
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
    padding: 25,
    borderRadius: 5,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#ccc',
    elevation: 10,
    flexDirection: 'row',
  },
});
