import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import RequestCard from '../components/RequestCard';
import database from '@react-native-firebase/database';

const Requests = ({navigation}) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    database()
      .ref('/requests')
      .on('value', (result) => {
        data = [];
        result.forEach((childResults) => {
          data.push(childResults.val());
        });
        setData(data);
      });
  }, []);

  console.log(data);
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
          <Text style={styles.requests}>Active Request</Text>
        </View>
        <ScrollView>
          {data.map((values, i) => {
            return (
              <RequestCard
                key={i}
                name={values.name}
                details={values.details}
                bloodGroup={values.bloodGroup}
                location={values.location}
                number={values.number}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Requests;

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
  requestContainer: {
    marginTop: 10,
  },
  requests: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ea4335',
  },
});
