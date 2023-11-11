import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, Image} from 'react-native';
import CarouselCard from '../components/CarouselCard.js';
import {general} from '../components/data.js';

const Steps = ({navigation, route}, props) => {
  const {category} = route.params;
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50, backgroundColor: '#FFF'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        {category !== null && <CarouselCard data={general[category]} />}
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          marginHorizontal: 10,
          marginTop: 40,
          padding: 5,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: 167,
            height: 55,
            borderRadius: 55,
            padding: 10,
            elevation: 2,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: 30,
          }}
          onPress={() => navigation.navigate('Emergency')}>
          <Text style={{fontSize: 25, color: '#FFF'}}>Get help!</Text>
          <Image source={require('../assets/images/call.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Steps;
