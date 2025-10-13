import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './src/Screens/ProductList';

export default function App() {
  return (
    <View >
      <Text style={styles.texto}> Probando Flat-lists</Text>
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
 
  texto: {
    fontSize: 100
  }
});
