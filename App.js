import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Speech from 'expo-speech';
import CustomImage from './components/CustomImage';
import medica from './assets/medica.png';
import balanca from './assets/balanca.png';

export default function App() {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');

  function handleSubmit(){
    let msg = '';
    const alt = altura / 100;
    const imc = peso/ (alt * alt);
    console.log(imc)
    if(imc <= 0 || alt <= 0 || peso <= 0){
      Speech.speak('Dados Incorretos!' + ' Por favor, informe os campos. Exemplo: Peso: 40 (Kg), Altura: 150 (cm)', {language: 'pt-BR'});
      Alert.alert('Dados Incorretos!','Por favor, informe os campos. Exemplo: Peso: 40 (Kg), Altura: 150 (cm)');
    } else if(imc < 17){
      Speech.speak('Cálculo do I M CÊ - Resultado' + ` I M C = ${imc.toFixed(2)} \nVocê está MUITO ABAIXO do peso!`, {language: 'pt-BR'});
      Alert.alert('Cálculo IMC - Resultado',`IMC = ${imc.toFixed(2)} \nVocê está MUITO ABAIXO do peso!`);
    } else if(imc >= 17 && imc < 18.5){
      Speech.speak('Cálculo do I M CÊ - Resultado' + ` I M C = ${imc.toFixed(2)} \nVocê está ABAIXO do peso!`, {language: 'pt-BR'});
      Alert.alert('Cálculo IMC - Resultado',`IMC = ${imc.toFixed(2)} \nVocê está ABAIXO do peso!`);
    } else if(imc >= 18.5 && imc < 25){
      Speech.speak('Cálculo do I M CÊ - Resultado' + ` I M C = ${imc.toFixed(2)} \nVocê está com peso NORMAL!`, {language: 'pt-BR'});
      Alert.alert('Cálculo IMC - Resultado',`IMC = ${imc.toFixed(2)} \nVocê está com peso NORMAL!`);
    } else if(imc >= 25 && imc < 30){
      Speech.speak('Cálculo do I M CÊ - Resultado' + ` I M C = ${imc.toFixed(2)} \nVocê está com SOBREPESO!`, {language: 'pt-BR'});
      Alert.alert('Cálculo IMC - Resultado',`IMC = ${imc.toFixed(2)} \nVocê está com SOBREPESO!`);
    } else if(imc >= 30 && imc < 35){
      Speech.speak('Cálculo do I M CÊ - Resultado' + ` I M C = ${imc.toFixed(2)} \nVocê está OBESO (Ou seja, obesidade grau I)!`, {language: 'pt-BR'});
      Alert.alert('Cálculo IMC - Resultado',`IMC = ${imc.toFixed(2)} \nVocê está OBESO (Ou seja, obesidade grau I)!`);
    } else if(imc >= 35 && imc < 40){
      Speech.speak('Cálculo do I M CÊ - Resultado' + ` I M C = ${imc.toFixed(2)} \nVocê está com OBESIDADE SEVERA (Ou seja, obesidade grau II)!`, {language: 'pt-BR'});
      Alert.alert('Cálculo IMC - Resultado',`IMC = ${imc.toFixed(2)} \nVocê está com OBESOSIDADE SEVERA (Ou seja, obesidade grau II)!`);
    } else if(imc >= 40){
      Speech.speak('Cálculo do I M CÊ - Resultado' + ` I M C = ${imc.toFixed(2)} \nVocê está com OBESIDADE MÓRBIDA (Ou seja, obesidade grau III)!`, {language: 'pt-BR'});
      Alert.alert('Cálculo IMC - Resultado',`IMC = ${imc.toFixed(2)} \nVocê está com OBESIDADE MÓRBIDA (Ou seja, obesidade grau III)!`);
    }
  }

  function handleClear(){
      setAltura('');
      setPeso('');
  }
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="light" backgroundColor="#AD6200" />
      <View>
        <CustomImage
          fromWeb={false}
          image={balanca}
          title={'Calcule seu IMC'}
          width={147}
          height={168}
        />
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={(peso) => setPeso(peso)}
          placeholder="Digite o peso (Kg)"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={(altura) => setAltura(altura)}
          placeholder="Digite a altura (cm)"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <CustomImage
            fromWeb={false}
            image={medica}
            title={'Calcular'}
            width={125}
            height={213}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style ={{color: '#8D4600', fontSize:25, fontWeight:'bold'}}>Limpar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC300',
  },
  input: {
    backgroundColor: '#E59200',
    borderColor: '#AD6200',
    borderWidth:1,
    borderRadius: 10,
    marginTop: 15,
    marginHorizontal:30,
    padding: 10,
    color: '#FFF',
    fontSize: 23,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 30,
    backgroundColor: '#E59200',
    padding: 10,
    borderRadius: 10,
    borderColor: '#AD6200',
    borderWidth:1,
  },
});