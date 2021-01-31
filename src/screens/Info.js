import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {asyncState} from '../store/actions/index';
import database from '@react-native-firebase/database';

const Info = ({navigation, user, asyncState, reRender}) => {
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [location, setLocation] = useState('');
  const [number, setNumber] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem('userEmail', user[0].email);
      await AsyncStorage.setItem('userName', name);
      await AsyncStorage.setItem('userBloodGroup', bloodGroup);
      await AsyncStorage.setItem('userLocation', location);
      await AsyncStorage.setItem('userNumber', number);
      database()
        .ref('/userInfo')
        .push({
          name,
          bloodGroup,
          location,
          number,
          medicalHistory,
          email: await AsyncStorage.getItem('userEmail'),
        });
      reRender();
      asyncState();
      setName('');
      setBloodGroup('');
      setLocation('');
      setNumber('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {user[0].email}</Text>
      <Text style={styles.title}>Please fill out the Info </Text>
      <ScrollView>
        <Text style={styles.label}>Your Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Enter Name'}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.label}>
          Your Blood Group (Enter blood group as A+, B-, AB+)
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Enter Blood Group'}
          value={bloodGroup}
          onChangeText={(text) => setBloodGroup(text)}
        />
        <Text style={styles.label}>Your location</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Enter location'}
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <Text style={styles.label}>
          Your Medical History (Tell whether you have any disease like cancer,
          thalassemia or Not)
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Enter Your Medical History'}
          value={medicalHistory}
          onChangeText={(text) => setMedicalHistory(text)}
        />
        <Text style={styles.label}>Your Phone Number</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Enter Phone Number'}
          value={number}
          onChangeText={(text) => setNumber(text)}
        />
        <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
          <Text style={styles.postBtn}>Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => ({
  asyncState: () => dispatch(asyncState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Info);

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    padding: 2,
  },
  textInput: {
    borderRadius: 3,
    borderColor: 'red',
    borderWidth: 1,
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  postBtn: {
    backgroundColor: '#ea4335',
    borderRadius: 3,
    color: '#f7f7f7',
    padding: 8,
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
});
