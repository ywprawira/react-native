import React from 'react';
import {Button} from 'react-native';

function Home({navigation}) {
  return (
    <>
      <Button
        title="Login"
        onPress={() => navigation.navigate('LoginPage', {name: 'LoginPage'})}
      />
      <Button title="Register" />
      <Button title="Skip" />
    </>
  );
}

export default Home;
