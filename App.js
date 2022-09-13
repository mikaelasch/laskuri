import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View, Pressable, FlatList } from 'react-native';

export default function App() {

  const[result, setResult] = useState(0)
  const[firstNumber, setFirstNumber] = useState(null)
  const[secondNumber, setSecondNumber] = useState(null)
  const[data, setData] = useState([])
 
  const handleAdd = () => {
  
  let total = Number(firstNumber) + Number(secondNumber)
  setResult(Number(firstNumber) + Number(secondNumber))
  setData([...data, {key: firstNumber + " + " + secondNumber + " = " + total}])
  }
  
  const handleSubtract = () => {
  
  let total = Number(firstNumber) - Number(secondNumber)
  setResult(Number(firstNumber) - Number(secondNumber))
  setData([...data, {key: firstNumber + " - " + secondNumber + " = " + total}])
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
            style={{ width:200, borderColor:'gray' , borderWidth: 1}}
            onChangeText={firstNumber => setFirstNumber(firstNumber)}
            value={firstNumber}
            keyboardType="numeric"/>
      <TextInput
            style={{ width:200, borderColor:'gray' , borderWidth: 1}}
            onChangeText={secondNumber => setSecondNumber(secondNumber)}
            value={secondNumber}
            keyboardType="numeric" />
   <View style={styles.buttonContainer}>
      <Pressable
            style={styles.button}
            onPress={handleAdd}>
      <Text style={styles.button}>+</Text>
      </Pressable> 
      <Pressable 
            style={styles.button}
            onPress={handleSubtract}>
      <Text style={styles.button}>-</Text>
      </Pressable>
   </View>
   <View style={styles.list}>
      <FlatList
      data={data}
      renderItem={({item}) => <Text>{item.key}</Text> }
      />
  </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    button: {
      flex:1.5,
      backgroundColor: 'pink',  
      alignItems: 'center',
      color: 'black',
      padding: '3%', 
      height: '40%'
      

  },
  buttonContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent:'space-around',
    padding:'12%',
    width: '40%'
  },
  list: {
    flex: 0.7,

  },
});
