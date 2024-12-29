```javascript
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [
  { id: '1', text: 'Item 1' },
  { id: '2', text: 'Item 2' },
  { id: '3', text: 'Item 3' },
];

const MyList = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id} // Unique key
      renderItem={({ item }) => (
        <View>
          <Text>{item.text}</Text>
        </View>
      )}
    />
  );
};

export default MyList;
```