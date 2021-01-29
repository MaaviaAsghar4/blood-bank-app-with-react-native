import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Cards from '../components/Cards';

const Home = ({navigation}) => {
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
          <Text style={styles.user}>Users</Text>
        </View>
        <ScrollView>
          <Cards
            name={'name1'}
            details={'details of name1'}
            bloodGroup={'A+'}
          />
          <Cards
            name={'name1'}
            details={'details of name1'}
            bloodGroup={'A+'}
          />
          <Cards
            name={'name1'}
            details={'details of name1'}
            bloodGroup={'A+'}
          />
          <Cards
            name={'name1'}
            details={'details of name1'}
            bloodGroup={'A+'}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

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
});
