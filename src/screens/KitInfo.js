import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {kitTypes} from '../components/data';
import {Progress, NativeBaseProvider} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function KitInfo({navigation, route}, props) {
  const {oftype} = route.params;
  console.log(oftype);
  const [items, setItems] = useState(kitTypes[oftype]);
  const [checkedItems, setCheckedItems] = useState([]);

  const renderFlatList = (renderData, checked) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({item}) => (
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={!checked}
              onValueChange={() => {
                handleChange(item, checked);
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                color: 'black',
                textDecorationLine: !checked ? 'line-through' : 'none',
                textDecorationStyle: 'solid',
              }}>
              {item.txt}
            </Text>
          </View>
        )}
      />
    );
  };

  const compare = (a, b) => {
    console.log(a, b);
    if (a.txt < b.txt) {
      return -1;
    }
    if (a.txt > b.txt) {
      return 1;
    }
    return 0;
  };

  const onEmpty = async () => {
    await AsyncStorage.setItem(oftype, JSON.stringify([]));
    var aAll = [...checkedItems, ...items];
    setCheckedItems([]);
    setItems(aAll.sort(compare));
  };

  const handleChange = async (selected, checked) => {
    if (checked) {
      let var1 = items.filter((item) => item != selected);
      var aChecked = [...checkedItems, selected];
      setCheckedItems(aChecked.sort(compare));
      setItems(var1.sort(compare));

      await AsyncStorage.setItem(oftype, JSON.stringify(aChecked));
    } else {
      let var1 = checkedItems.filter((item) => item != selected);
      var aUChecked = [...items, selected];
      setItems(aUChecked.sort(compare));
      setCheckedItems(var1.sort(compare));
      await AsyncStorage.setItem(oftype, JSON.stringify(var1));
    }
  };

  useEffect(() => {
    getCheckedItems();
  }, []);

  const getCheckedItems = async () => {
    try {
      const value = await AsyncStorage.getItem(oftype);
      if (value !== null) {
        // value previously stored
        var achecked = JSON.parse(value);
        setCheckedItems(achecked);
        const myArrayFiltered = items.filter((el) => {
          return !achecked.find(function (objFromB) {
            return el.id === objFromB.id;
          });
        });
        setItems(myArrayFiltered);
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.headerText}>
            Choose the items that you want to include in your kit
          </Text>
          <Text style={{padding: 5, margin: 10, color: 'black'}}>
            Your kit is {''}
            {Math.floor(
              (checkedItems.length * 100) /
                (items.length + checkedItems.length),
            )}
            % complete
          </Text>
          <Progress
            value={
              (checkedItems.length * 100) / (items.length + checkedItems.length)
            }
            mx="4"
            _filledTrack={{
              bg: 'lime.500',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 25,
              margin: 15,
            }}>
            <Text
              style={{
                alignSelf: 'center',

                fontSize: Dimensions.get('window').width / 20,
                fontWeight: 'bold',
              }}>
              {items.length > 0
                ? `Remaining items : ${items.length}`
                : 'You are packed'}
            </Text>
            {checkedItems.length > 0 && (
              <TouchableOpacity onPress={onEmpty}>
                <Text
                  style={{
                    fontSize: Dimensions.get('window').width / 25,
                    color: 'red',
                  }}>
                  Empty kit
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View>{renderFlatList(items, true)}</View>
          {checkedItems.length > 0 && (
            <Text
              style={{
                alignSelf: 'flex-start',
                margin: 10,
                padding: 5,
                fontSize: Dimensions.get('window').width / 20,
                fontWeight: 'bold',
              }}>
              Selected items : {checkedItems.length}
            </Text>
          )}
          <View>{renderFlatList(checkedItems, false)}</View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // boxSizing: 'border-box',
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 24,
    padding: 5,
    fontFamily: 'Raleway-SemiBold',
    lineHeight: 26,
    marginTop: 35,
    marginHorizontal: 10,
    color: '#000',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
});
