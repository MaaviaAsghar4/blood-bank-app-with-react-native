import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Info = ({navigation}) => {
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [location, setLocation] = useState('');
  const [number, setNumber] = useState('');
  const handleLogin = () => {
    console.log(name, bloodGroup, location, number);
    // navigation.navigate('Info');
    setEmail('');
    setPassword('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please fill out the Info</Text>
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

export default Info;

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
