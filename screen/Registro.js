import React,{ Component } from 'react';
import { Container,Content, Card, CardItem, Text, Body, Button, Input, Item, Icon} from 'native-base';
import {StyleSheet, Keyboard} from 'react-native';
import { ThemeProvider } from '@react-navigation/native';

class Registro extends Component{
    render(){
        const navegar = this.props.navigation;
        return(
            <Container>
                <Card>
                    <CardItem header bordered>
                    <Text style = {misEstilos.textCenter}>
                        {this.props.route.params.titulo}
                        {this.props.route.params.nombre}
                    </Text>
                    </CardItem>
                    <CardItem bordered>
                    <Body style = {misEstilos.content}>
                        <Item inlineLabel>
                        <Icon type = 'FontAwesome' name = 'user'></Icon>
                        <Input placeHolder='Nombre de usuario' keyboardType="email-address"/>
                        </Item>
                        <Item inlineLabel last>
                        <Icon type = 'FontAwesome' name = 'lock'></Icon>
                        <Input placeHolder='Contraseña' keyboardTyp="visible-password"/>
                        </Item>
                    </Body>
                </CardItem>
                <CardItem footer bordered>
                    <Button success style = {misEstilos.content} success onPress={() => navegar.navigate('Login')}>
                        <Text> Login </Text>
                    </Button>
                    <Button primary style = {misEstilos.content} success onPress={() => navegar.navigate('Inicio')}>
                    <Text> Entrar </Text>
                    </Button>
                </CardItem>
                </Card>
            </Container>
    );
    }
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton: {
    marginLeft: '70%',
  },
  body: {
    paddingVertical: 35,
  },
});

export default Registro;