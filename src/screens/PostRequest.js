import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const PostRequest = ({navigation}) => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [location, setLocation] = useState('');
  const handleFormSubmit = () => {
    console.log(name, details, bloodGroup, location);
    setName('');
    setDetails('');
    setLocation('');
    setBloodGroup('');
  };
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
        <View style={styles.requestContainer}>
          <Text style={styles.requests}>Request Blood</Text>
        </View>
        <ScrollView>
          <Text style={styles.label}>Your Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Enter Name'}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Text style={styles.label}>Details</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Enter Details'}
            value={details}
            onChangeText={(text) => setDetails(text)}
          />
          <Text style={styles.label}>Location Where Blood is needed</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Enter Location'}
            value={location}
            onChangeText={(text) => setLocation(text)}
          />
          <Text style={styles.label}>Blood Group Required</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Enter Required Blood Group'}
            value={bloodGroup}
            onChangeText={(text) => setBloodGroup(text)}
          />
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={handleFormSubmit}>
            <Text style={styles.postBtn}>Post</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default PostRequest;

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
    padding: 20,
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
  requestContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  requests: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ea4335',
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
});
