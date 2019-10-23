import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
    <View style={imgLoja.container}>
      <Image resizeMode="contain" style={img.stretch} source={require("./assets/sopa.jpg")} />
    </View>
    <View style={cento.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Luvizopa</Text>
        <Text style={{ fontSize: 10 }}>Basically a great and simple soup shop</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Button title=">> Clique aqui <<" onPress={() => Alert.alert("Temos mais de 20 opções de sopas, entre elas o nosso prato principal, sopa de camarão.")} /></View>
    </View>
    <View style={sobre.container}>
      <View style={{ flex:1 }}></View>
      <Text style={{ flex:10, justifyContent: 'center' }} >
        Estamos a aproximadamente 20 anos no ramo alimentício e recentemente entramos no ramo de sopas, obtendo uma avaliação ótima e recheada de elogios por todos os nossos clientes.
        
      </Text>
      <View style={{ flex:1 }}></View>
    </View>
  </View>
  );
}

const img = StyleSheet.create({
	stretch: {
		width: 470,
		height: 470,
		flex: 1
	}
});
const imgLoja = StyleSheet.create({
	container: {
		flex: 2,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
const cento = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
const sobre = StyleSheet.create({
	container: {
		flex: 2,
		flexDirection: 'row',
		backgroundColor: '#fff',
	},
});