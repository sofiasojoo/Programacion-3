import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Imagen from './src/Screens/Components/Imagen';
import { Image } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Probando imagenes</Text>
      <Imagen />
      <Image style={styles.imagen} 
 source={{uri:'https://www.infobae.com/resizer/v2/CDTA65FYWMDLJV6AHKPIIPNOHU.jpg?auth=6c9f6791e78e189e11a8ff0474b608b95906885697189234ddcdee212e19f2bd&smart=true&width=992&height=661&quality=85'}}
 resizeMode='contain'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 100
  },
  imagen: {
    height: 400,
    width: "100%"
  }

});
