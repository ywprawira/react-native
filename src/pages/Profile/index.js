import React from 'react';
import {Text, Button} from 'react-native';

function Profile({navigation}) {
  return (
    <>
      <Text>Ini Profile</Text>
      <Button title="Go to Homepage" onPress={() => navigation.goBack()} />
    </>
  );
}

export default Profile;
