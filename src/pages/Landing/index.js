import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from 'react-native';

export default ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', flexDirection: 'column'}}>
      <View style={{padding: 10, backgroundColor: '#FFF'}}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
