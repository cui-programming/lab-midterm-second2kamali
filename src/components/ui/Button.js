import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

/**
 * Minimal UI Button with basic visible style
 */
export default function Button({ onPress, children, style, ...rest }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, style]}
      {...rest}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF', // visible blue color
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  text: {
    color: '#fff', // white text
    fontSize: 16,
    fontWeight: 'bold',
  },
});
