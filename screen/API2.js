import React,{Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class API2 extends Component{
    constructor(props){
        super(props);
        this.state = {isLoading2: true
        }
    }

    async componentWillMount(){
        try{
            const reponse =
                await fetch('https://swapi.co/api/planets/')
            const reponseJson = await reponse.json()

            this.setState({
                isLoading2: false,
                dataSource: reponseJson.result,
            }, function(){
            });
        }
        catch (error){
            console.error(error);
        };
    }

    render(){
        const navegar = this.props.navigation;
        if(this.state.isLoading2){
            return(
                <View style={{flex:1, padding:20}}>
                    <ActivityIndicator/>
                </View>
            );
        }
        return(
            <View>
                <FlatList data={this.state.dataSource}
                renderItem={({item}) => 
                <Text>{item.name}, {item.rotation_period}, {item.orbital_period}, {item.diameter}, 
                {item.climate}, {item.gravity}, {item.terrain}, {item.surface_water}, 
                {item.population}, {item.residents}, {item.films}, {item.created},
                {item.edited}, {item.url}</Text>}
                />
            </View>
        );
    }

}

export default API2;
