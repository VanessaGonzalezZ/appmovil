import React,{ Component } from 'react';
import { Container,Content, Card, CardItem, Text, Body, Button, Input, Item, Icon} from 'native-base';
import {StyleSheet} from 'react-native';


class Login extends Component{
    render(){
        const navegar = this.props.navigation;
        return(
            <Container>
              <Content padder contentContainerStyle = {misEstilos.content}>
                <Card>
                  <CardItem header bordered>
                    <Text>Página de Inicio</Text>
                  </CardItem>
                  <CardItem>
                    <Text>Logueate con tu red social o Email</Text>
                  </CardItem>
                  <CardItem bordered>
                  <Body style = {misEstilos.content}>
                      <Item inlineLabel>
                        <Button primary style ={misEstilos.content}>
                        <Icon type = 'FontAwesome' name = 'facebook'></Icon>
                        </Button>
                        <Button danger style ={misEstilos.content}>
                        <Icon type = 'FontAwesome' name = 'google'></Icon>
                        </Button>
                      </Item>
                    </Body>
                </CardItem>
                <CardItem footer bordered>
                    <Text style = {misEstilos.content}>                                        OR </Text>
                </CardItem>
                <CardItem bordered>
                  <Body style = {misEstilos.content}>
                      <Item inlineLabel>
                        <Icon type = 'FontAwesome' name = 'user'></Icon>
                        <Input placeHolder='Nombre de usuario' type="text" value={this.state.nombre}/>
                        <Icon type = 'Feather' name = 'user-check'></Icon>
                        <Input placeHolder='Nombre de usuario'/>
                      </Item>
                      <Item inlineLabel>
                        <Icon type = 'MaterialIcons' name = 'email'></Icon>
                        <Input placeHolder='Email'/>
                      </Item>
                      <Item inlineLabel>
                        <Icon type = 'FontAwesome' name = 'lock'></Icon>
                        <Input placeHolder='password'/>
                        <Button><Icon type = 'Feather' name = 'eye'></Icon></Button>
                      </Item>
                    <CardItem footer bordered>
                        <Button primary onPress={() => { navegar.navigate('Registro', {
                            titulo:'Registro usuario',
                            nombre: 'Vanessa' 
                            })}
                        }>
                          <Text> Registrase </Text>
                        </Button>
                        <Button success style = {misEstilos.content}>
                          <Text> Guardar </Text>
                        </Button>
                    </CardItem>
                    </Body>
                </CardItem>
              </Card>
            </Content>
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

export default Login;