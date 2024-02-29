import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username === '' && password === '') {
      try {
        await AsyncStorage.setItem('userToken', 'dummyToken');
        navigation.navigate('Home');
      } catch (error) {
        console.error('Error storing user token:', error);
        Alert.alert('Login Failed', 'Please try again later.');
      }
    } else {
      Alert.alert(
        'Invalid Credentials',
        'Please enter valid username and password.',
      );
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Implement Forgot Password functionality');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <Text style={styles.signInText}>Sign in to continue</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={[styles.signUpText, styles.signUpLink]}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontSize: 28,
    color: '#000000',
    marginBottom: 5,
  },
  signInText: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000000',
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#000000',
  },
  loginButton: {
    backgroundColor: '#1800FF',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  forgotPasswordText: {
    color: '#1800FF',
    fontSize: 16,
    marginBottom: 20,
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: '#000000',
  },
  signUpLink: {
    textDecorationLine: 'underline',
    marginLeft: 5,
    color: '#1800FF',
  },
});

export default Login;
