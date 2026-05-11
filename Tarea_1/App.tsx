import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';

const food = [
  { id: "1", food: "Hamburguesa" },
  { id: "2", food: "Papas" },
  { id: "3", food: "Refresco" },
  { id: "4", food: "Batido" },
  { id: "5", food: "Ketchup" },
];

export default function App() {
  const [name, setName] = useState("");

  const [age, setAge] = useState(0);

  const mensaje = ( age >= 18) ? "El usuario es mayor de edad" : "El usuario es menor de edad";

  console.log(mensaje);
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Introduzca su nombre"
        value={name}
        onChangeText={setName}
      />
    <Text style={styles.text}>Hola, {name || "invitado"}, ¿Como estas?</Text>

    <View style={styles.separador} />
      <TextInput
        style={styles.input}
        placeholder="Introduzca su edad"
        value={age.toString()}
        onChangeText={(text) => setAge(parseInt(text) || 0)}
        keyboardType='numeric'
      />
      
      <Text style={styles.text}>{mensaje}</Text>

      <View style={styles.separador} />

      <Text style={styles.text}>Menú de Hoy</Text>
      <View style={styles.container}>{food.map((item) => {
        return (
          <View>
            <Text style={styles.lista}>{item.food}</Text>
          </View>
        );
      })}</View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
    padding: 50,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1
  },
  text: {
    fontSize: 20,
    padding: 10,
  },
  separador: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  lista: {
    backgroundColor: '#fff',
    fontSize: 18,
    borderRadius: 12,
    padding: 10,
  },
});
