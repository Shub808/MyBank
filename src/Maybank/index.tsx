import React, { useState } from 'react';
import { Modal, View, StyleSheet } from 'react-native';

const CalculatorPopup = ({ visible, onClose }) => {
  const [marketValue, setMarketValue] = useState(1000000);
  const [financingAmount, setFinancingAmount] = useState(800000);
  const [interestRate, setInterestRate] = useState(5);
  const [term, setTerm] = useState(20);
  const [paidToDate, setPaidToDate] = useState(5);
  const [monthlyRepayment, setMonthlyRepayment] = useState(1200);
  const [outstandingBalance, setOutstandingBalance] = useState(350000);

  // Calculate the new outstanding balance
  const calculateOutstandingBalance = () => {
    // Implement the calculation logic here
  };

  // Update the outstanding balance when the paidToDate value changes
  React.useEffect(() => {
    calculateOutstandingBalance();
  }, [paidToDate]);

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={styles.container} onClick={onClose}>
        <View style={styles.popup}>
          <h2>Home Financing / Loan Calculator</h2>
          <View style={styles.inputContainer}>
            <View style={styles.inputLabel}>
              <Text>Market Value:</Text>
              <TextInput
                style={styles.inputField}
                value={marketValue}
                onChangeText={(text) => setMarketValue(text)}
              />
            </View>
            <View style={styles.inputLabel}>
              <Text>Financing Amount:</Text>
              <TextInput
                style={styles.inputField}
                value={financingAmount}
                onChangeText={(text) => setFinancingAmount(text)}
              />
            </View>
            <View style={styles.inputLabel}>
              <Text>Interest Rate (%):</Text>
              <TextInput
                style={styles.inputField}
                value={interestRate}
                onChangeText={(text) => setInterestRate(text)}
              />
            </View>
            <View style={styles.inputLabel}>
              <Text>Term (Years):</Text>
              <TextInput
                style={styles.inputField}
                value={term}
                onChangeText={(text) => setTerm(text)}
              />
            </View>
            <View style={styles.inputLabel}>
              <Text>Paid to Date:</Text>
              <TextInput
                style={styles.inputField}
                value={paidToDate}
                onChangeText={(text) => setPaidToDate(text)}
              />
            </View>
            <View style={styles.inputLabel}>
              <Text>Monthly Repayment:</Text>
              <TextInput
                style={styles.inputField}
                value={monthlyRepayment}
                onChangeText={(text) => setMonthlyRepayment(text)}
              />
            </View>
            <View style={styles.inputLabel}>
              <Text>Outstanding Balance:</Text>
              <TextInput
                style={styles.inputField}
                value={outstandingBalance}
                onChangeText={(text) => setOutstandingBalance(text)}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Close" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: '