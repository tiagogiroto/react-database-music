
import { View, Text, StyleSheet } from 'react-native';
import { Pressable, TextInput } from 'react-native-web';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById("root"));

function Home({navigation}){
    const [titulo, tituloChange] = React.useState('');

    async function addConteudo(){

    }


    return(
        <View style={styles.screen}>
            <Text>Insira a música abaixo</Text>
            <TextInput style={styles.textInput}
                        placeholder="Música"
                        onChangeText={tituloChange}
            />
            <Pressable onPress={()=> addConteudo() }style={styles.btnSalvar}>
                <Text style={styles.textBtn}>Enviar</Text>
            </Pressable>   
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
        width: '80%',
        borderRadius: 35,
        marginTop: 5,
        borderWidth: 1,
        height: 10,
        padding: 15,
        textAlign: 'center',
        // opacity: "0.25"
    },
    btnSalvar :{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: 20
    },
    textBtn: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});


export default Home;