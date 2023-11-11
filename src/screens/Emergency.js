import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
  TextInput,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {selectContact} from 'react-native-select-contact';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Select, NativeBaseProvider} from 'native-base';

const {width, height} = Dimensions.get('window');

const Emergency = () => {
  const [fContacts, setfContacts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    getContacts();
  }, []);
  const getContacts = async () => {
    const value = await AsyncStorage.getItem('favContacts');
    if (value && value.length > 0) {
      setfContacts(JSON.parse(value));
    }
  };
  const getPhoneNumber = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'First Aid app contact read permission',
          message: 'First Aid app needs access to your contacts ',
          buttonPositive: 'Ok',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can read contacts');

        var contact = selectContact()
          .then(async (selection) => {
            if (!selection) {
              return null;
            }
            // console.log(selection);
            let {name, phones} = selection;
            // console.log(
            //   `Selected ${phones[0].type} phone number ${phones[0].number} from ${name}`,
            // );
            if (phones.length > 0) {
              var aContacts = [
                ...fContacts,
                {name: name, number: phones[0].number},
              ];
              await AsyncStorage.setItem(
                'favContacts',
                JSON.stringify(aContacts),
              );
              setfContacts(aContacts);
            } else {
              Alert.alert('This contact has no number');
            }
            // return selectedPhone.number;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log('Contacts permission denied');
        Alert.alert(
          'Require contacts permission',
          'Kindly give contacts permission to use this feature',
          [
            {
              text: 'Cancel',
            },
            {
              text: 'Ok',
              onPress: () => Linking.openSettings(),
            },
          ],
          {
            cancelable: true,
          },
        );
        // getPhoneNumber();
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const removeContact = async (val) => {
    let var1 = fContacts.filter((item) => item != val);
    setfContacts(var1);
    await AsyncStorage.setItem('favContacts', JSON.stringify(var1));
  };
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 30,
            fontSize: 22,
            fontFamily: 'Raleway-SemiBold',
            color: '#000',
          }}>
          National emergency helpline number
        </Text>
        <TouchableOpacity
          style={styles.callbtn}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Image source={require('../assets/images/phone.png')} />
          <Text style={{color: '#FFF', fontSize: 15}}>CALL NOW</Text>
        </TouchableOpacity>
        <Text style={{alignSelf: 'center', marginTop: 30}}>OR</Text>
        <Text style={{marginTop: 30, fontSize: 22, textAlign: 'center'}}>
          Add your favourite contacts to connect in an emergency
        </Text>
        <TouchableOpacity onPress={getPhoneNumber} style={styles.addbtn}>
          <Image source={require('../assets/images/star.png')} />
          <Text style={{color: '#FFF', fontSize: 15}}>ADD FAVOURITES</Text>
        </TouchableOpacity>
        <View style={{marginTop: 30, width: '100%', alignItems: 'center'}}>
          {fContacts &&
            fContacts.length > 0 &&
            fContacts.map((val, index) => {
              return (
                <TouchableOpacity
                  onPress={() => Linking.openURL(`tel:${val.number}`)}
                  key={index}
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    width: '80%',
                    padding: 20,
                    marginTop: 10,
                    borderRadius: 6,
                    elevation: 10,
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Icon name="phone" size={25} style={{paddingRight: 15}} />
                    <View>
                      <Text style={{fontSize: width / 20}}>{val.name}</Text>
                      <Text style={{fontSize: width / 20}}>{val.number}</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => removeContact(val)}>
                    <Icon
                      name="remove-circle-outline"
                      size={25}
                      style={{paddingRight: 15, color: 'red'}}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          {/* <View
            style={{
              backgroundColor: 'white',
              width: '80%',
              padding: 30,
              borderRadius: 6,
            }}> */}
          <Text
            style={{
              fontSize: width / 15,
              color: 'white',
              textAlign: 'left',
              marginTop: 30,
            }}>
            Select your country
          </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:${112}`);
              setModalVisible(false);
            }}
            style={{
              backgroundColor: 'white',
              width: '80%',
              padding: 20,
              marginTop: 10,
              borderRadius: 6,
            }}>
            <Text style={{fontSize: width / 20}}>India</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:${999}`);
              setModalVisible(false);
            }}
            style={{
              backgroundColor: 'white',
              width: '80%',
              padding: 20,
              marginTop: 10,
              borderRadius: 6,
            }}>
            <Text style={{fontSize: width / 20}}>Singapore</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:${999}`);
              setModalVisible(false);
            }}
            style={{
              backgroundColor: 'white',
              width: '80%',
              padding: 20,
              marginTop: 10,
              borderRadius: 6,
            }}>
            <Text style={{fontSize: width / 20}}>Malaysia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:${991}`);
              setModalVisible(false);
            }}
            style={{
              backgroundColor: 'white',
              width: '80%',
              padding: 20,
              marginTop: 10,
              borderRadius: 6,
            }}>
            <Text style={{fontSize: width / 20}}>USA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                `https://en.m.wikipedia.org/wiki/List_of_emergency_telephone_numbers`,
              );
              setModalVisible(false);
            }}
            style={{
              backgroundColor: 'white',
              width: '80%',
              padding: 20,
              marginTop: 10,
              borderRadius: 6,
            }}>
            <Text style={{fontSize: width / 20}}>Others</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </Modal>
    </NativeBaseProvider>
  );
};

export default Emergency;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
  },
  callbtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#2196F3',
    marginTop: 20,
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 8,
    elevation: 3,
    borderRadius: 5,
  },
  addbtn: {
    flexDirection: 'row',
    width: 180,
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    elevation: 3,
    borderRadius: 5,
    backgroundColor: '#2196F3',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
});
