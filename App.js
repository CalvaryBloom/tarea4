/*
*
* Ejercicio 5:
* A partir del código proporcionado, utiliza map y un círculo dividido entre cuatro para renderizar una figura similar a la siguiente:
*/
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [contents, setContents] = useState([
    [
      {
        topLeftRadius: 150,
        topRightRadius: 0,
        bottomLeftRadius: 0,
        bottomRightRadius: 0,
        color: 'red',
      },
      {
        topLeftRadius: 0,
        topRightRadius: 150,
        bottomLeftRadius: 0,
        bottomRightRadius: 0,
        color: 'blue',
      },
    ],
    [
      {
        topLeftRadius: 0,
        topRightRadius: 0,
        bottomLeftRadius: 150,
        bottomRightRadius: 0,
        color: 'blue',
      },
      {
        topLeftRadius: 0,
        topRightRadius: 0,
        bottomLeftRadius: 0,
        bottomRightRadius: 150,
        color: 'red',
      },
    ],
  ]);

  return (
    <View style={styles.container}>
      {[150, 100, 75].map((size) =>
        [0, 1].map((row) => (
          <View key={row.toString()} style={{ flexDirection: 'row' }}>
            {[0, 1].map((column) => (
              <View
                width={size}
                height={size}
                borderTopLeftRadius={contents[row][column].topLeftRadius}
                borderTopRightRadius={contents[row][column].topRightRadius}
                borderBottomLeftRadius={contents[row][column].bottomLeftRadius}
                borderBottomRightRadius={
                  contents[row][column].bottomRightRadius
                }
                backgroundColor={contents[row][column].color}
              />
            ))}
          </View>
        ))
      )}
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