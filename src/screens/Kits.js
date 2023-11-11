import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import {kit} from '../components/data';

const Kits = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop: 15, marginBottom: 5}}>
        <Text style={styles.headerText}>Select from various options</Text>
        <View
          style={{
            marginTop: 5,
            padding: 5,
            marginHorizontal: 10,
          }}>
          {kit &&
            kit.map((val, index) => {
              return (
                <TouchableOpacity
                  style={styles.kitCard}
                  key={index}
                  onPress={() => {
                    let nav = '';
                    if (val.type === 'vehiclekit') {
                      nav = 'VehicleKits';
                    } else if (val.type === 'travelkit') {
                      nav = 'TravelKits';
                    } else {
                      nav = 'KitInfo';
                    }
                    navigation.navigate(nav, {oftype: val.type});
                  }}>
                  {/* <Image
                    source={val.imgUrl}
                    alt="Kit Image"
                    style={styles.kitImage}
                  /> */}
                  <Text style={styles.kitText}>{val.name}</Text>
                  <Text style={styles.kitDesc}>{val.desc}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Kits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerText: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    color: '#000',
    alignSelf: 'center',
  },
  kitCard: {
    backgroundColor: '#FFF',
    marginVertical: 5,
    padding: 20,
    borderRadius: 5,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#ccc',
    elevation: 10,
  },
  kitText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  kitDesc: {
    color: 'black',
    fontSize: 13,
    textAlign: 'justify',
  },
  kitImage: {
    position: 'absolute',
    width: 94.77,
    height: 106,
    left: 20,
    top: 26,
  },
});
