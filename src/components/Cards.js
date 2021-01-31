import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';

const Cards = ({name, location, email, number, bloodGroup, medicalHistory}) => {
  const openDialScreen = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${' + number + '}';
    } else {
      phoneNumber = 'telprompt:${' + number + '}';
    }
    Linking.openURL(phoneNumber);
  };
  return (
    <View style={styles.boxes}>
      <Text style={styles.title}>Name: {name}</Text>
      <Text style={styles.details}>Phone Number: {number}</Text>
      <Text style={styles.details}>Email: {email}</Text>
      <Text style={styles.details}>Location: {location}</Text>
      <Text style={styles.details}>Medical History: {medicalHistory}</Text>
      <Text style={styles.bloodGroup}>Blood Group: {bloodGroup}</Text>
      <TouchableOpacity style={styles.btnContainer} onPress={openDialScreen}>
        <Text style={styles.viewbtn}>Request Blood</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  boxes: {
    backgroundColor: '#f7f7f7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    padding: 10,
    margin: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 12,
    color: 'black',
    opacity: 0.7,
    marginTop: 5,
  },
  bloodGroup: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  viewbtn: {
    backgroundColor: '#ea4335',
    borderRadius: 3,
    color: '#f7f7f7',
    padding: 8,
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: 10,
  },
});
