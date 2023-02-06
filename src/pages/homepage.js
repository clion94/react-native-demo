import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Background style={styles.background} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brandBackground,
  },
  content: {
    padding: 16,
  },
  background: {
    position: 'absolute',
    zIndex: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  paragraph: {
    color: '#fff',
  },
  categoriesBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  planetsBlock: {
    marginTop: 10,
    paddingHorizontal: 12,
  },
});

export default HomePage;