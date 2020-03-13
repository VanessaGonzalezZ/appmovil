import React,{ Component } from 'react';
import { Container,Content, Card, CardItem, Text, Body, Button, Input, Item, Icon} from 'native-base';
import {StyleSheet} from 'react-native';


class Registro extends Component{
  constructor(props){
    super(props);
    this.state = {
      nombreU: '',
      email: '',
      contraseña: ''
    };
  }


  regisU = () =>{
    const {nombreU} = this.state;
    const {correo} = this.state;
    const {contraseña} = this.state;

    fetch('http://hardeepcoder.com/react/register.php',{
      method: 'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        nombreU:nombreU,
        correo: correo,
        contraseña:contraseña,
      })
    })
    .then((response) => response.json)
      .then((response) =>{
        alert(responseJson);
      })
      .catch((error) =>{
        console.error(error);
      });
  }
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
                        <Icon type = 'Entypo' name = 'facebook'></Icon>
                        </Button>
                        <Button danger style ={misEstilos.content}>
                        <Icon type = 'AntDesign' name = 'google'></Icon>
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
                        <Icon type = 'AntDesign' name = 'user'></Icon>
                        <Input placeholder='Nombre de usuario' 
                        onChangeText={nombreU=>this.setState({nombreU})}/>
                      </Item>
                      <Item inlineLabel>
                        <Icon type = 'MaterialIcons' name = 'email'></Icon>
                        <Input placeholder='Email'
                          onChangeText={correo=>this.setState({correo})}
                        />
                      </Item>
                      <Item inlineLabel>
                        <Icon type = 'AntDesign' name = 'lock'></Icon>
                        <Input placeholder='password'
                          onChangeText={contraseña=>this.setState({contraseña})}
                        />
                        <Button><Icon type = 'Feather' name = 'eye' ></Icon></Button>
                      </Item>
                    <CardItem footer bordered>
                        <Button primary onPress={() => { navegar.navigate('Login', {
                            titulo:'Registro usuario',
                            nombre: 'Vanessa' 
                            })}
                        }>
                          <Text> Loguearse </Text>
                        </Button>
                        <Button success style = {misEstilos.content} 
                        onPress={this.userRegister}>
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

export default Registro;