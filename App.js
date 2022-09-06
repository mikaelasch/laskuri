import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

export default function App() {

  const [result, setResult] = useState(0);
  const[number1, onChangeNumber1] = useState(null);
  const[number, onChangeNumber] = useState(null)
  const handleAdd = () => setResult(Number(number) + Number(number1))
  const handleSubtract = () => setResult(Number(number) - Number(number1))

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
      style={{ width:200, borderColor:'gray' , borderWidth: 1}}
      onChangeText={number => onChangeNumber(number)}
      value={number}
      keyboardType="numeric"
      />
      <TextInput
      style={{ width:200, borderColor:'gray' , borderWidth: 1}}
      onChangeText={number1 => onChangeNumber1(number1)}
      value={number1}
      keyboardType="numeric"
      
      />
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
      <StatusBar style="auto" />
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
    button: {
      backgroundColor: 'blue',  
      alignItems: 'center',
      color: 'black',
      padding: '3%'
      

  },
  buttonContainer: {
    
    flexDirection: "row",
    justifyContent:'space-around',
    padding:'3%',
    width: '40%'
  }
});
