import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from '../ui';  
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

export default function TasbihList() {

  // state — data hold kar raha hai
  const [items, setItems] = useState(initialAzkaar);

  //  Increase function (simple)
  const decrement = (index) => {
    const newItems = [...items];      // copy of old array
    newItems[index].count += 1;       // +1 kar do
    setItems(newItems);               // update the data
  };

  //  Decrease function (simple)
  const increment = (index) => {
    const newItems = [...items];      // copy of old array
    if (newItems[index].count > 0) {  // count 0 se kam na ho
      newItems[index].count -= 1;     // -1 kar do
    }
    setItems(newItems);               // update the data
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>

      {/* Har zikr ko loop se show kar rahe hain */}
      {items.map((item, index) => (
        <View key={index} style={styles.itemRow}>
          <Text style={styles.itemName}>{item.phrase}</Text>

          <View style={styles.counterRow}>
            <Button onPress={() => decrement(index)}>−</Button>
            <Text style={styles.counter}>{item.count}</Text>
            <Button onPress={() => increment(index)}>+</Button>
          </View>
        </View>
      ))}
    </View>
  );
}
