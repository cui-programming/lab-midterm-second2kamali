import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from '../ui';  // ✅ use Text and Button from UI layer
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  // ✅ Increment function
  const increment = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // ✅ Decrement function
  const decrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>

      <View style={styles.counterRow}>
        <Button title="−" onPress={() => decrement(item.id)} />
        <Text style={styles.counter}>{item.count}</Text>
        <Button title="+" onPress={() => increment(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      {items.map((item) => renderItem({ item }))}
    </View>
  );
}
