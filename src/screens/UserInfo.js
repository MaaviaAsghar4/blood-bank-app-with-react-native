import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logout} from '../store/actions/index';
import {connect} from 'react-redux';

const UserInfo = ({logout, navigation, stopRendering}) => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [bloodGroup, setBloodGroup] = useState('');
  let [phoneNumber, setPhoneNumber] = useState('');
  let [location, setLocation] = useState('');

  const handleLogout = () => {
    logout();
    stopRendering();
  };

  useEffect(() => {
    const asyncFunction = async () => {
      const userEmail = await AsyncStorage.getItem('userEmail');
      const userName = await AsyncStorage.getItem('userName');
      const userBloodGroup = await AsyncStorage.getItem('userBloodGroup');
      const userPhoneNumber = await AsyncStorage.getItem('userNumber');
      const userLocation = await AsyncStorage.getItem('userLocation');
      setEmail(userEmail);
      setName(userName);
      setPhoneNumber(userPhoneNumber);
      setBloodGroup(userBloodGroup);
      setLocation(userLocation);
    };

    asyncFunction();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Blood Bank App</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Text style={styles.btn}>Menu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.userContainer}>
          <Text style={styles.user}>User Information</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Name: {name}</Text>
          <Text style={styles.bloodGroup}>Blood Group: {bloodGroup}</Text>
          <Text style={styles.email}>Email: {email}</Text>
          <Text style={styles.email}>Phone Number: {phoneNumber}</Text>
          <Text style={styles.email}>Location: {location}</Text>
          <TouchableOpacity
            style={styles.logoutContainer}
            onPress={handleLogout}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(UserInfo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    backgroundColor: '#ea4335',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main: {
    flex: 10,
    backgroundColor: '#f7f7f7',
    width: '100%',
    padding: 10,
  },
  logo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f7f7f7',
  },
  btn: {
    color: '#ea4335',
    backgroundColor: '#f7f7f7',
    padding: 5,
    borderRadius: 3,
    fontWeight: 'bold',
  },
  userContainer: {
    marginTop: 10,
  },
  user: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ea4335',
  },
  infoContainer: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: 20,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  bloodGroup: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  email: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  logout: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#ea4335',
    color: '#f7f7f7',
    padding: 10,
    borderColor: 3,
    textAlign: 'center',
  },
});
