import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

export default function SearchAndAdd() {
  const [items, setItems] = useState(initialAzkaar);
  const [search, setSearch] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  // Filtered list
  const filteredItems = items.filter(item =>
    item.phrase.toLowerCase().includes(search.toLowerCase())
  );

  // Add new phrase
  const addPhrase = () => {
    if (!newPhrase.trim()) return; // skip empty
    const exists = items.some(it => it.phrase.toLowerCase() === newPhrase.toLowerCase());
    if (exists) return; // skip duplicate

    const newItem = {
      id: Date.now().toString(),
      phrase: newPhrase,
      count: 0,
    };
    setItems([...items, newItem]);
    setNewPhrase('');
  };

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Search & Add Azkaar</Text>

      {/* Search Box */}
      <TextInput
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
        style={{ borderWidth: 1, padding: 5, marginVertical: 5 }}
      />

      {/* Add Box */}
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <TextInput
          placeholder="Add new phrase..."
          value={newPhrase}
          onChangeText={setNewPhrase}
          style={{ borderWidth: 1, padding: 5, flex: 1 }}
        />
        <Button title="Add" onPress={addPhrase} />
      </View>

      {/* List */}
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 16, paddingVertical: 2 }}>
            {item.phrase} ({item.count})
          </Text>
        )}
      />
    </View>
  );
}
