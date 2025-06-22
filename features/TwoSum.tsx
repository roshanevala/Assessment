import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const TwoSum = () => {
  const [numbersInput, setNumbersInput] = useState('');
  const [target, setTarget] = useState('');
  const [result, setResult] = useState<number[] | null>(null);

  const handleTwoSum = () => {
    const numbers = numbersInput.split(',').map(n => parseFloat(n.trim()));
    const t = parseFloat(target);

    if (numbers.length < 2 || numbers.some(isNaN) || isNaN(t)) {
      Alert.alert('Invalid Input', 'Enter a valid sorted list and target.');
      return;
    }

    let left = 0,
      right = numbers.length - 1;
    while (left < right) {
      const sum = numbers[left] + numbers[right];
      if (sum === t) {
        setResult([left + 1, right + 1]);
        return;
      } else if (sum < t) {
        left++;
      } else {
        right--;
      }
    }

    Alert.alert('No Match', 'No two numbers add up to the target.');
    setResult(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Two Sum - Input Array</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter sorted numbers (e.g. 1,2,4,6)"
        value={numbersInput}
        onChangeText={setNumbersInput}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter target number"
        value={target}
        onChangeText={setTarget}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Find Indices" onPress={handleTwoSum} />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.totalText}>Result:</Text>
        {result && (
          <Text style={styles.sumText}>
            [{result[0]}, {result[1]}]
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#888',
    padding: 5,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    height: 40,
    borderRadius: 5,
  },
  resultContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'flex-start',
    width: '100%',
    height: 40,
    borderRadius: 5,
  },
  totalText: {
    textAlign: 'center',
  },
  sumText: {
    textAlign: 'center',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default TwoSum;
