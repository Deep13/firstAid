import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, Linking, ActivityIndicator} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
const Details = ({route}, props) => {
  const {item} = route.params;
  const [loading, setloading] = useState(true);
  let url = item.link;
  const onStateChange = () => {
    setloading(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{item.title}</Text>
      <Text style={{marginTop: 15, marginHorizontal: 10, fontSize: 15}}>
        {item.desc}
      </Text>
      {/* <Text style={styles.header}>URL</Text> */}
      <View
        style={{
          paddingHorizontal: 10,
          marginTop: 15,
          height: 300,
          width: '100%',
        }}>
        {loading && (
          <ActivityIndicator animating={true} size={100} color="red" />
        )}
        <View visible={!loading}>
          <YoutubePlayer
            height={300}
            play={true}
            videoId={item.link}
            onReady={onStateChange}
          />
        </View>
      </View>
      {/* <TouchableOpacity
        style={{marginHorizontal: 10}}
        onPress={() => {
          Linking.canOpenURL(url).then((supported) => {
            if (supported) {
              Linking.openURL(url);
            } else {
              console.log('URL not supported' + url);
            }
          });
        }}>
        <Text style={{color: '#0C75C8', marginTop: 15}}>{item.link}</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 35,
    marginHorizontal: 10,
    color: '#000',
  },
});
