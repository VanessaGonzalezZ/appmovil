import React, { Component } from 'react';
import { Container, Card, CardItem, Text, Body, Button, Input, Item, Icon, View} from 'native-base';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Switch} from 'react-native';
import api from '../api';


class Login extends Component{
  state = {  
    switchValue: false  
};
  constructor(props){
    super(props);
    this.state = {
      username:'',
      pass:''}
  }

  login = async () => {
    let validarLog = await api.validarLog(this.state.username, this.state.pass)

    if(validarLog.status == 1){
      this.props.navigation.navigate('Principal');
    }
    else{
      Alert.alert('Usuario o clave invalidos');
    }
  }
    
  render(){
    const navegar = this.props.navigation;
     if(this.state.showIndicator){
        return(
            <View style={misEstilos.content}>
              <ActivityIndicator size="large" color="FFFFFF"></ActivityIndicator>
            </View>
        );
        }else{
        return(
        <>
          <Container>
            <Card>
              <CardItem header bordered>
                <CardItem bordered>
                  <Body style = {misEstilos.content}>
                    <Item inlineLabel>
                    <Icon type = 'AntDesign' name = 'user' style={{paddingVertical:35}}></Icon>
                    <Input placeholder='Nombre de usuario' 
                      onChangeText = {(username) =>this.setState({username})}
                    />
                    </Item>
                    <Item inlineLabel last>
                    <Icon type = 'AntDesign' name = 'lock'></Icon>
                    <Input placeholder='Contraseña'
                      onChangeText = {(pass) => this.setState({pass})}
                    />
                    </Item>
                  </Body>
                </CardItem>
              </CardItem>
              <CardItem footer bordered>
                  <Button success style = {misEstilos.content} 
                        onPress ={() => navegar.navigate('Registro',{
                                pass: this.state.pass,
                                username: this.state.username})}>
                        <Text>Realizar Registro</Text>
                        </Button>


                    <Button success style = { misEstilos.content}
                        onPress={() => {this.login() }} >
                        <Text> Entrar </Text>
                    </Button>
              </CardItem>
              <View style={misEstilos.container}>
               <Switch  
                  value={this.state.switchValue}  
                  onValueChange ={(switchValue)=>this.setState({switchValue})}/>  
              </View> 
            </Card>
          </Container>
          </>
    );
    
    }
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
  ActivityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Login;