/*
*
* Ejercicio 3:
* A partir del código proporcionado, utiliza map, un cuadrado y un triángulo para renderizar una figura similar a la siguiente
*/
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [content, setContent] = useState([
    {
      widthSquareOne: 150,
      colorSquareOne: 'blue',
      widthSquareTwo: 50,
      colorSquareTwo: 'blue',
    },
    {
      widthSquareOne: 150,
      colorSquareOne: 'red',
      widthSquareTwo: 50,
      colorSquareTwo: 'blue',
    },
    {
      widthSquareOne: 150,
      colorSquareOne: 'red',
      widthSquareTwo: 100,
      colorSquareTwo: 'blue',
    },
  ])
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View
          width={0}
          height={0}
          backgroundColor={'transparent'}
          borderStyle={'solid'}
          borderLeftWidth={50}
          borderRightWidth={50}
          borderBottomWidth={100}
          borderLeftColor="transparent"
          borderRightColor="transparent"
          borderBottomColor="blue"
        />
      </View>
      {content.map((value, index) => (
        <View key={index.toString()} style={{ flexDirection: 'row' }}>
          <View
            width={value.widthSquareTwo}
            height={value.widthSquareTwo}
            backgroundColor={value.colorSquareTwo}
          />
          <View>
            <View
              width={value.widthSquareTwo}
              height={value.widthSquareTwo}
              backgroundColor={value.colorSquareTwo}
            />
          </View>
        </View>
      ))}
    </View>
  );
}

{/* <View style={{ flexDirection: 'row' }}>
        <View
          width={0}
          height={0}
          backgroundColor={'transparent'}
          borderStyle={'solid'}
          borderLeftWidth={50}
          borderRightWidth={50}
          borderBottomWidth={100}
          borderLeftColor="transparent"
          borderRightColor="transparent"
          borderBottomColor="blue"
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View
          width={100}
          height={100}
          borderRadius={100 / 2}
          backgroundColor={'green'}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View
          width={100}
          height={100}
          borderTopLeftRadius={150}
          borderTopRightRadius={0}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          backgroundColor={'red'}
        />
        <View
          width={100}
          height={100}
          borderTopLeftRadius={0}
          borderTopRightRadius={150}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          backgroundColor={'black'}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View
          width={100}
          height={100}
          borderTopLeftRadius={0}
          borderTopRightRadius={0}
          borderBottomLeftRadius={150}
          borderBottomRightRadius={0}
          backgroundColor={'black'}
        />
        <View
          width={100}
          height={100}
          borderTopLeftRadius={0}
          borderTopRightRadius={0}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={150}
          backgroundColor={'red'}
        />
      </View> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});