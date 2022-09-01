
import React, { useState, useEffect } from 'react';
import { db } from '../functions/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';



function Home({navigation}){
    const [titulo, tituloChange] = useState('');
    const [msgReturn, msgReturnChange] = useState('');

    async function addConteudo(){

        const musicCollection = collection(db, "lista-musicas");

        const musica = await addDoc((musicCollection), {
            music: titulo.target.value,
            add_to_list: 0
        })
        
        if(musica.id){
            console.log('Id no sistema : ',music.id);
        } else {
            console.log('Erro');
        }

        console.log("Id salvo da musica: ", titulo.target.value);

    }


    return(
        <div style={styles.screen}>
            <Container fluid="md ">
                <Form className="p-0">
                    <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                        {/* <Pressable onPress={()=> addConteudo() }style={styles.btnSalvar}>
                            <Text style={styles.textBtn}>Enviar</Text>
                        </Pressable>    */}

                        <Col>

                            <a>Insira a música abaixo</a>

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Control type="text" placeholder="https://open.spotify.com ..." onChange={tituloChange} />
 
                                <Button variant="primary" type="submit"> Adicionar  </Button>
                            </Form.Group>
                        
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}


const styles = {

    content:{  
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '-50px 0 0 -50px'
    },
    screen: {
        backgroundColor: '#282c34',
        height: '100vh',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
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
};


export default Home;