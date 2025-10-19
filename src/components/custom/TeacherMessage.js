import React from 'react';
import { View } from 'react-native';
import { Text } from '../ui';  // ✅ using Text from ui (as teacher said)

export default function TeacherMessage() {
  return (
    <View>
      <Text>Message from your teacher: Keep learning and practicing!</Text>
    </View>
  );
}
