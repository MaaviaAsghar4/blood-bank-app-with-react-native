import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const UserInfo = () => {
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
          <Text style={styles.name}>Name</Text>
          <Text style={styles.bloodGroup}>Blood Group</Text>
          <Text style={styles.email}>Email</Text>
          <Text style={styles.email}>Phone Number</Text>
          <TouchableOpacity style={styles.logoutContainer}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserInfo;

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
    fontSize: 18,
    fontWeight: 'bold',
  },
  bloodGroup: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    marginTop: 20,
    fontSize: 18,
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
