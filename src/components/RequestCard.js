import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';

const RequestCard = ({name, details, bloodGroup, location, number}) => {
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
      <Text style={styles.bloodGroup}>Details: {details}</Text>
      <Text style={styles.bloodGroup}>Blood Group Required: {bloodGroup}</Text>
      <Text style={styles.bloodGroup}>Location: {location}</Text>
      <Text style={styles.bloodGroup}>Phone Number: {number}</Text>
      <TouchableOpacity style={styles.btnContainer} onPress={openDialScreen}>
        <Text style={styles.viewbtn}>Donate Blood</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RequestCard;

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
