
import { View, Text, StyleSheet } from 'react-native';
import { Pressable, TextInput } from 'react-native-web';
import React, { useState, useEffect } from 'react';
import { db } from '../functions/firebase';
import { addDoc, collection } from 'firebase/firestore';


function Home({navigation}){
    const [titulo, tituloChange] = React.useState('');
      


    async function addConteudo(){
        console.log(titulo);
        const musicCollection = collection(db, "lista-musicas");

        const musica = await addDoc((musicCollection), {
            music: titulo,
            add_to_list: 0
        })
        

        // console.log("Id salvo da musica: ", musica.id);

    }


    return(
        <View style={styles.screen}>
            <Text>Insira a música abaixo</Text>
            <TextInput style={styles.textInput}
                        placeholder="https://open.spotify.com ..."
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