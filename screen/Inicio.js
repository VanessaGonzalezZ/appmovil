import React,{ Component } from 'react';
import { Container,Content, Card, CardItem, Text, Body, Button, Input, Item, Icon} from 'native-base';
import {StyleSheet, ScrollView} from 'react-native';
import { ThemeProvider } from '@react-navigation/native';

class Inicio extends Component{
    render(){
        const navegar = this.props.navigation;
        return(
            <Container>
                <Card>
                    <CardItem header bordered>
                    </CardItem>
                    <CardItem bordered>
                    <Body style = {misEstilos.content}>
                        <Item inlineLabel>
                        <CardItem bordered>
                          <Text style={misEstilos.textCenter}>
                            Tu nombre es:{this.props.route.params.nombreU}
                          </Text>
                        </CardItem>
                        </Item>
                        <Item inlineLabel>
                        <CardItem bordered>
                          <Text style={misEstilos.textCenter}>
                            Tu contraseña es:{this.props.route.params.contraseña}
                          </Text>
                        </CardItem>
                        </Item>
                    </Body>
                </CardItem>
                <CardItem footer bordered>
                    <Button primary style = {misEstilos.content} success onPress={() => navegar.navigate('Login')}>
                    <Text> Regresar </Text>
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

export default Inicio;