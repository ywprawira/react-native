import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  Platform,
  Button,
  AsyncStorage,
} from 'react-native';
import {mutate} from '../../services/graphql/api';
import {gql} from 'apollo-boost';
import {useState} from 'react';

import styles from '../../asset/styles';
// import Profile from './Profile/';

function LoginPage({navigation}) {
  const [username, setUsername] = useState(Platform.OS === 'ios' ? '' : null);
  const [password, setPassword] = useState(Platform.OS === 'ios' ? '' : null);

  const storeData = async value => {
    try {
      let dataFormat = {
        type: 'signIn',
        token: value,
      };
      const jsonValue = JSON.stringify(dataFormat);
      await AsyncStorage.setItem('token', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  //   const removeValue = async () => {
  //     try {
  //       await AsyncStorage.removeItem('token');
  //     } catch (e) {
  //       // remove error
  //     }
  //     console.log(done);
  //   };

  //   const checkLocal = async () => {
  //     const value = await AsyncStorage.getItem('token');
  //     console.log(value);
  //   };

  const postLogin = () => {
    let schema = gql`
      mutation generateCustomerTokenCustom($email: String!, $pass: String!) {
        generateCustomerTokenCustom(username: $email, password: $pass) {
          token
        }
      }
    `;
    let params = {email: username, pass: password};

    mutate(schema, params).then(res => {
      const {data} = res;
      const user = data.generateCustomerTokenCustom;
      storeData(user.token);
      console.log(user.token);
    });
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.formWrapper}>
            <View style={styles.field}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => {
                  setUsername(text);
                }}
              />
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                textContentType="password"
                secureTextEntry={true}
                style={styles.input}
                onChangeText={text => {
                  setPassword(text);
                }}
              />
            </View>
            <View style={styles.field}>
              <Button
                style={styles.primaryButton}
                color="#fc6f03"
                title="Login"
                onPress={postLogin}
              />
              {/* <Button
                style={styles.primaryButton}
                color="#fc6f03"
                title="Login"
                onPress={() =>
                  navigation.navigate('Profile', {name: 'Profile'})
                } */}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default LoginPage;
