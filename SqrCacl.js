import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function SqrCalc() {
  const [calcData, setCalcData] = useState({ num: "", result: null });

  const doCalc = () => {
    const num = parseFloat(calcData.num);

    if (isNaN(num)) {
      setCalcData({ ...calcData, result: "Invalid Number" });
      return;
    }

    const sqr = num * num;
    setCalcData({ ...calcData, result: `Result: ${sqr}` });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is Square Calc App</Text>

      <TextInput
        value={calcData.num}
        keyboardType="numeric"
        placeholder="Enter number"
        style={styles.input}
        onChangeText={(data) => setCalcData({ ...calcData, num: data })}
      />

      <Button title="Find Square" onPress={doCalc} />

      {calcData.result && (
        <Text style={styles.result}>{calcData.result}</Text>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2c5efdf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: 200,
    borderWidth: 1,
    padding: 8,
    backgroundColor: 'white',
    marginBottom: 15
  },
  result: {
    fontSize: 18,
    marginTop: 15
  }
});