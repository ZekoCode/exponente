import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  
  const [base, setbase] = useState()
  const [exponente, setexponente] = useState()
  const [acumulador, setacumulador] = useState()
  const [resultado, setresultado] = useState()
  const [index, setindex] = useState()

  const elevar = () =>{
    setresultado("")  
    setacumulador(1)
    
    for (index == 0; index <= parseInt(exponente); setindex(index => index + 1)){
      setacumulador(parseFloat(acumulador)* parseFloat(base))
      
    }
    setresultado(parseFloat(acumulador))
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Elevar un exponente</Text>
      <TextInput
      style={styles.ingreso}
      placeholder='Base'
      keyboardType="decimal-pad"
      onChangeText={setbase}
      value={base}
      />

      <TextInput
      style={styles.ingreso}
      placeholder='Exponente'
      keyboardType="decimal-pad"
      onChangeText={setexponente}
      value={exponente}
      />

      <Button
        style={styles.botones}
        title='Elevar' 
        onPress={elevar}
        />
      <Text style={styles.titulo}>{resultado}</Text>
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

  titulo: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
  },

  ingreso: {
    fontSize: 30,
    color: "blue",
    borderWidth: 1,
    backgroundColor: "#ccffcc",
    width: "50%",
    height: 50,
    textAlign: "center",
    borderColor: "#ffffff",
  },

  botones: {
    fontSize: 45,
    color: "yellow",
    borderRadius: 20,
  },
});
