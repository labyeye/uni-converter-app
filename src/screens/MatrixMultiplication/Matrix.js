import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

const createEmptyMatrix = (rows, cols) => {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
};

const MatrixInput = ({ rows, cols, onChange }) => {
  const createMatrixInputs = () => {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(
          <TextInput
            key={`${i}-${j}`}
            style={[styles.inputField, styles.neumorphTextInput]}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#747474"
            onChangeText={(text) => onChange(i, j, text)}
          />
        );
      }
      matrix.push(
        <View key={i} style={styles.row}>
          {row}
        </View>
      );
    }
    return matrix;
  };

  return <View>{createMatrixInputs()}</View>;
};

const MatrixMultiplication = () => {
  const [rowsA, setRowsA] = useState(2);
  const [colsA, setColsA] = useState(2);
  const [rowsB, setRowsB] = useState(2);
  const [colsB, setColsB] = useState(2);
  const [matrixA, setMatrixA] = useState(createEmptyMatrix(2, 2));
  const [matrixB, setMatrixB] = useState(createEmptyMatrix(2, 2));
  const [resultMatrix, setResultMatrix] = useState(null);

  useEffect(() => {
    setMatrixA(createEmptyMatrix(rowsA, colsA));
  }, [rowsA, colsA]);

  useEffect(() => {
    setMatrixB(createEmptyMatrix(rowsB, colsB));
  }, [rowsB, colsB]);

  const handleMatrixChange = (matrixSetter) => (row, col, value) => {
    matrixSetter((prevMatrix) => {
      const newMatrix = [...prevMatrix];
      newMatrix[row][col] = parseFloat(value) || 0;
      return newMatrix;
    });
  };

  const handleDimensionChange = (setter, value) => {
    const intValue = parseInt(value);
    if (!isNaN(intValue) && intValue > 0) {
      setter(intValue);
    }
  };

  const multiplyMatrices = () => {
    if (colsA !== rowsB) {
      Alert.alert('Invalid matrix size', 'Columns of Matrix A must equal rows of Matrix B for multiplication.');
      return;
    }

    const result = createEmptyMatrix(rowsA, colsB);
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        for (let k = 0; k < colsA; k++) {
          result[i][j] += matrixA[i][k] * matrixB[k][j];
        }
      }
    }
    setResultMatrix(result);
  };

  const renderMatrix = (matrix) => {
    return matrix.map((row, i) => (
      <View key={i} style={styles.row}>
        {row.map((value, j) => (
          <Text key={j} style={styles.resultText}>
            {value}
          </Text>
        ))}
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.matrixSizesRow}>
          <View style={styles.matrixSizeContainer}>
            <Text style={styles.label}>Matrix A</Text>
            <View style={styles.dimensionRow}>
              <TextInput
                style={[styles.dimensionInput, styles.neumorphTextInput]}
                keyboardType="numeric"
                placeholder="Rows"
                placeholderTextColor="#747474"
                onChangeText={(text) => handleDimensionChange(setRowsA, text)}
              />
              <Text style={styles.label}>x</Text>
              <TextInput
                style={[styles.dimensionInput, styles.neumorphTextInput]}
                keyboardType="numeric"
                placeholder="Cols"
                placeholderTextColor="#747474"
                onChangeText={(text) => handleDimensionChange(setColsA, text)}
              />
            </View>
          </View>
          <View style={styles.matrixSizeContainer}>
            <Text style={styles.label}>Matrix B</Text>
            <View style={styles.dimensionRow}>
              <TextInput
                style={[styles.dimensionInput, styles.neumorphTextInput]}
                keyboardType="numeric"
                placeholder="Rows"
                placeholderTextColor="#747474"
                onChangeText={(text) => handleDimensionChange(setRowsB, text)}
              />
              <Text style={styles.label}>x</Text>
              <TextInput
                style={[styles.dimensionInput, styles.neumorphTextInput]}
                keyboardType="numeric"
                placeholder="Cols"
                placeholderTextColor="#747474"
                onChangeText={(text) => handleDimensionChange(setColsB, text)}
              />
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.label}>Matrix A</Text>
      <MatrixInput rows={rowsA} cols={colsA} onChange={handleMatrixChange(setMatrixA)} />

      <Text style={styles.label}>Matrix B</Text>
      <MatrixInput rows={rowsB} cols={colsB} onChange={handleMatrixChange(setMatrixB)} />

      <TouchableOpacity style={styles.calculateButton} onPress={multiplyMatrices}>
        <Text style={styles.calculateButtonText}>Multiply Matrices</Text>
      </TouchableOpacity>

      {resultMatrix && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Result Matrix</Text>
          {renderMatrix(resultMatrix)}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#1A1A1A',
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  matrixSizesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  matrixSizeContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  dimensionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dimensionInput: {
    color: '#747474',
    fontSize: 18,
    textAlign: 'center',
    width: 60,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1A1A1A',
    marginHorizontal: 5,
  },
  label: {
    color: '#FE7A36',
    fontSize: 20,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  resultText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    width: 40,
  },
  calculateButton: {
    backgroundColor: '#FE7A36',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
  },
  calculateButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 6,
    backgroundColor: '#1A1A1A',
  },
  resultLabel: {
    color: '#FE7A36',
    fontSize: 20,
    marginBottom: 10,
  },
  inputField: {
    color: '#747474',
    fontSize: 18,
    textAlign: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1A1A1A',
    marginHorizontal: 5,
  },
  neumorphTextInput: {
    shadowColor: '#1A1A1A',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default MatrixMultiplication;
