import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const AddNumbers = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [sum, setSum] = useState<number | string | null>(null);
  const isDarkMode = false;

  const handleAdd = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (!isNaN(num1) && !isNaN(num2)) {
      setSum(num1 + num2);
    } else {
      setSum('Invalid input');
    }
  };

  const onChangeFirstNumber = (value: string) => {
    setFirstNumber(value);
    setSum(null);
  };

  const onChangeSecondNumber = (value: string) => {
    setSecondNumber(value);
    setSum(null);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Number"
            placeholderTextColor="black"
            keyboardType="numeric"
            value={firstNumber}
            onChangeText={onChangeFirstNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="Second Number"
            placeholderTextColor="black"
            keyboardType="numeric"
            value={secondNumber}
            onChangeText={onChangeSecondNumber}
          />
          <View style={styles.buttonContainer}>
            <Button title="Add Two Numbers" onPress={handleAdd} />
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.sumText}>{sum !== null ? sum : ''}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 20,
    padding: 5,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
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

export default AddNumbers;
