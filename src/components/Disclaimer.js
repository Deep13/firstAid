import React, {useState} from 'react';
import {
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

const Disclaimer = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>Disclaimer</Text>
            <Text style={{marginTop: 10}}>
              The information provided here is purely taken from the source
              RedCross. Please consult a physician before performing any safety
              measures. Also we are not liable for any actions or reactions
              performed on the basis of this information. {`\n`}Do you accept
              that you will be responsible for any damage and health issues and
              will not take any legal action against the developer of this app?
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.buttonOpen,
                  styles.buttonClose,
                  styles.acceptbtn,
                ]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.btnText}>I Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.buttonOpen,
                  styles.buttonClose,
                  styles.declinebtn,
                ]}
                onPress={() => BackHandler.exitApp()}>
                <Text style={styles.btnText}>Decline</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Disclaimer;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginTop: 15,
    width: 95,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  acceptbtn: {
    backgroundColor: '#32C80C',
  },
  declinebtn: {
    backgroundColor: '#FF2D2D',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
