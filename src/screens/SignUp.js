import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    console.log(email, password);
    navigation.navigate('Info');
    setEmail('');
    setPassword('');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Enter Email'}
          keyboardType={'email-address'}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Enter Password'}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
          <Text style={styles.postBtn}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.account}>Already has an Account</Text>
        <TouchableOpacity
          style={styles.btnContainers}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.postBtn}>Sign In here</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
  btnContainers: {
    marginTop: 2,
  },
  account: {
    marginBottom: 5,
    fontWeight: 'bold',
    padding: 2,
    marginTop: 20,
  },
});
