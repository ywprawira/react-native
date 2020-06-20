/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React, {useState} from 'react';
import * as React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   View,
//   Text,
//   TextInput,
//   Button,
// } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
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
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
// import {mutate} from './services/graphql/api';
// import {gql} from 'apollo-boost';

import Home from './pages/Home/';
import Profile from './pages/Profile/';
import LoginPage from './pages/Login/';
// import {useState} from 'react';

// import styles from './asset/styles';

// function HomeScreen() {
//   const [username, setUsername] = useState(Platform.OS === 'ios' ? '' : null);
//   const [password, setPassword] = useState(Platform.OS === 'ios' ? '' : null);

//   const storeData = async value => {
//     try {
//       let dataFormat = {
//         type: 'signIn',
//         token: value,
//       };
//       const jsonValue = JSON.stringify(dataFormat);
//       await AsyncStorage.setItem('token', jsonValue);
//     } catch (e) {
//       // saving error
//     }
//   };

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

//   const postLogin = () => {
//     let schema = gql`
//       mutation generateCustomerTokenCustom($email: String!, $pass: String!) {
//         generateCustomerTokenCustom(username: $email, password: $pass) {
//           token
//         }
//       }
//     `;
//     let params = {email: username, pass: password};

//     mutate(schema, params).then(res => {
//       const {data} = res;
//       const user = data.generateCustomerTokenCustom;
//       storeData(user.token);
//       console.log(user.token);
//     });
//   };
//   return (
//     <>
//       <SafeAreaView>
//         <ScrollView contentInsetAdjustmentBehavior="automatic">
//           <View style={styles.formWrapper}>
//             <View style={styles.field}>
//               <Text style={styles.label}>Username</Text>
//               <TextInput
//                 style={styles.input}
//                 onChangeText={text => {
//                   setUsername(text);
//                 }}
//               />
//             </View>
//             <View style={styles.field}>
//               <Text style={styles.label}>Password</Text>
//               <TextInput
//                 textContentType="password"
//                 secureTextEntry={true}
//                 style={styles.input}
//                 onChangeText={text => {
//                   setPassword(text);
//                 }}
//               />
//             </View>
//             <View style={styles.field}>
//               <Button
//                 style={styles.primaryButton}
//                 color="#fc6f03"
//                 title="Login"
//                 onPress={postLogin}
//               />
//               <Button
//                 style={styles.primaryButton}
//                 color="#fc6f03"
//                 title="Check Storage"
//                 onPress={checkLocal}
//               />
//               <Button
//                 style={styles.primaryButton}
//                 color="#fc6f03"
//                 title="Remove Storage"
//                 onPress={removeValue}
//               />
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }
// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// just Form Login
// const App: () => React$Node = () => {
//   return (
//     <>
//       <SafeAreaView>
//         <ScrollView contentInsetAdjustmentBehavior="automatic">
//           <View style={styles.formWrapper}>
//             <View style={styles.field}>
//               <Text style={styles.label}>Username</Text>
//               <TextInput style={styles.input} />
//             </View>
//             <View style={styles.field}>
//               <Text style={styles.label}>Password</Text>
//               <TextInput
//                 textContentType="password"
//                 secureTextEntry={true}
//                 style={styles.input}
//               />
//             </View>
//             <View style={styles.field}>
//               <Button
//                 style={styles.primaryButton}
//                 color="#fc6f03"
//                 title="Login"
//               />
//             </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// navigation
const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        {/* stack navigation */}
        <Stack.Navigator>
          <Stack.Screen name="Landing Page" component={Home} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>

        {/* bottom navigation */}
        {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator> */}
      </NavigationContainer>
    </>
  );
};
export default App;
