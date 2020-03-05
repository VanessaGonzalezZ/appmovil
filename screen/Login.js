import React,{ Component } from 'react';
import { Container, Card, CardItem, Text, Body, Button, Input, Item, Icon, View} from 'native-base';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Switch} from 'react-native';


class Login extends Component{
  state = {  
    switchValue: false  
};
      constructor(props){
        super(props);
        this.state={nombreU:'',contraseña:''};
      }
      state={
        showIndicator:false,
      }
      onButtonPress=()=>{
        this.setState({
          showIndicator:true
        }),
      this.props.navigation.navigate('Inicio',{nombreU:this.state.nombreU, contraseña:this.state.contraseña});
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
                    <Icon type = 'AntDesign' name = 'user'></Icon>
                    <Input placeHolder='Nombre de usuario' type="text" value={this.state.nombreU}
                      onChangeText={(nombreU) => this.setState({nombreU})}
                    />
                    </Item>
                    <Item inlineLabel last>
                    <Icon type = 'AntDesign' name = 'lock'></Icon>
                    <Input placeHolder='Contraseña' type="text" value={this.state.contraseña} 
                      onChangeText={(contraseña) => this.setState({contraseña})}
                    />
                    </Item>
                  </Body>
                </CardItem>
              </CardItem>
              <CardItem footer bordered>
                <Button success style = {misEstilos.content} onPress={this.onButtonPress} >
                  <Text> Entrar </Text>
                </Button>
                <Button success style = {misEstilos.content} onPress={() =>navegar.navigate('Inicio', 
                  {nombreU:this.state.nombreU, contraseña:this.state.contraseña})}>
                  <Text> Iniciar sesion </Text>
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