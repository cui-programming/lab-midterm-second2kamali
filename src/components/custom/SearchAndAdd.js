import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button, TextInput } from '../ui';  // ✅ UI components use
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

export default function SearchAndAdd() {
  const [items, setItems] = useState(initialAzkaar);
  const [search, setSearch] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  // Filtered items for search (case-insensitive)
  const filteredItems = items.filter(item =>
    item.phrase.toLowerCase().includes(search.toLowerCase())
  );

  // Add new phrase if unique
  const addPhrase = () => {
    const exists = items.some(
      item => item.phrase.toLowerCase() === newPhrase.toLowerCase()
    );
    if (!newPhrase.trim() || exists) return;

    const newItem = {
      id: Date.now().toString(),
      phrase: newPhrase,
      count: 0,
    };

    setItems([...items, newItem]);
    setNewPhrase('');
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Search & Add Azkaar</Text>

      {/* Search Box */}
      <TextInput
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      {/* Add New Phrase */}
      <View style={styles.row}>
        <TextInput
          placeholder="Add new phrase..."
          value={newPhrase}
          onChangeText={setNewPhrase}
          style={[styles.input, { flex: 1 }]}
        />
        <Button title="Add" onPress={addPhrase} />
      </View>

      {/* Show filtered list */}
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={styles.itemName}>
            {item.phrase} ({item.count})
          </Text>
        )}
      />
    </View>
  );
}
