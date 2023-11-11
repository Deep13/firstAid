import React, {useState} from 'react';

import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  Linking,
} from 'react-native';
import Disclaimer from '../components/Disclaimer';
import {homeCards} from '../components/data';
import {features} from '../components/data';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFF', flex: 1}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView>
        <Disclaimer />
        <View style={{paddingHorizontal: 15}}>
          <Image
            source={require('../assets/images/Half-Circle.png')}
            style={styles.backgroundImage}
          />
          <Image
            source={require('../assets/images/backgroundShape.png')}
            style={styles.backgroundImage}
          />
          <Image
            source={require('../assets/images/blob.png')}
            style={{
              position: 'absolute',
              top: 390,
              left: 5,
              bottom: 0,
              right: 0,
            }}
          />
          <Image
            source={require('../assets/images/Group.png')}
            style={{
              position: 'absolute',
              top: 65,
              left: 306,
            }}
          />

          <View style={styles.header}>
            <Text style={styles.headerText}>Get Treatment fast !</Text>
          </View>
          <View style={styles.container}>
            <View
              style={{
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Text style={styles.containerText}>Basic First Aids</Text>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                padding: 5,
              }}>
              {homeCards &&
                homeCards.map((val, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Steps', {category: val.tag})
                      }
                      key={index}
                      style={styles.card}>
                      <Image
                        source={val.imgUrl}
                        style={styles.cardImage}
                        alt="Steps"
                      />
                      <Text style={styles.cardText}>{val.title}</Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 40,
              shadowColor: '#ccc',
              shadowOpacity: 0.5,
              elevation: 10,
              shadowOffset: {width: 0, height: 3},
              backgroundColor: 'white',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            onPress={() => navigation.navigate('Categories')}>
            <Text style={{fontWeight: 'bold', color: '#000'}}>View All</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              marginTop: 15,
            }}>
            {features &&
              features.map((val, index) => {
                return (
                  <TouchableOpacity
                    style={styles.category}
                    key={index}
                    onPress={() => navigation.navigate(val.nav)}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                      }}>
                      <Image source={val.imgUrl} alt="features image" />
                      <Text
                        style={{
                          marginTop: 15,
                          fontFamily: 'Roboto',
                          color: '#000',
                          fontSize: 18,
                        }}>
                        {val.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            marginHorizontal: 10,
            marginTop: 40,
            padding: 5,
          }}>
          <TouchableOpacity
            style={styles.callbtn}
            onPress={() => navigation.navigate('Emergency')}>
            <Text style={{fontSize: 25, color: '#FFF'}}>Get help!</Text>
            <Image source={require('../assets/images/call.png')} />
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              marginTop: 40,
              justifyContent: 'center',
              padding: 20,
            }}
            onPress={() => {
              Linking.openURL(
                `https://play.google.com/store/apps/dev?id=6939929434500917270`,
              );
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: Dimensions.get('window').width / 20,
                textDecorationLine: 'underline',
                fontWeight: 'bold',
                color: 'black',
              }}>
              by RuDe Labs
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Image
        source={require('../assets/images/pattern.png')}
        style={{
          position: 'absolute',
          top: 600,
          left: 135,
          bottom: 0,
        }}
      />
      <Image
        source={require('../assets/images/Group.png')}
        style={{
          position: 'absolute',
          top: 625,
          left: 5,
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  semiCircle: {},
  headerText: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Raleway-SemiBold',
    marginTop: 25,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginTop: 20,
    paddingBottom: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    // height: 260,
    backgroundColor: 'rgb(18, 124, 208)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  containerText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
  card: {
    backgroundColor: 'white',
    width: '30%',
    height: 75,
    borderRadius: 5,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 10,
  },
  cardText: {
    color: '#000',
    margin: 5,
    fontWeight: 'bold',
  },
  cardImage: {
    alignItems: 'center',
    marginTop: 5,
  },
  category: {
    backgroundColor: '#E4FDEB',
    borderRadius: 5,
    width: '47%',
    height: 168,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  callbtn: {
    backgroundColor: 'red',
    width: 167,
    height: 55,
    borderRadius: 55,
    padding: 10,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  callIcon: {
    alignSelf: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.5,
  },
});
