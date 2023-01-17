import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [input1, setInput1] = React.useState(0)
  const [input2, setInput2] = React.useState(0)
  const [result, setResult] = React.useState(0)
  const add = () => {
     let addedInputs = ((+input1) + (+input2))
     setResult(addedInputs)
  }
  const subtract = () => {
     let subtractedInputs = ((+input1) - (+input2))
     setResult(subtractedInputs)
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput 
        style={{ width: 150, borderColor: 'gray', borderWidth: 1 }}
        value={input1}
        onChangeText={input1 => setInput1(input1)}
        keyboardType='numeric'
      />
      <TextInput 
      style={{width: 150, borderColor: 'gray', borderWidth: 1}}
      value={input2}
      onChangeText={input2 => setInput2(input2)}
      keyboardType='numeric'
      />
      <View style={styles.button}>
        <Button id="add" title="+" onPress={add} />
        <Button id="subtract" title="-" onPress={subtract}/>
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
    flexDirection: 'row',
  }
 

});
