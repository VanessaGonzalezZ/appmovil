import React,{Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class API2 extends Component{
    constructor(props){
        super(props);
        this.state = {isLoading: true}
    }

    async componentWillMount(){
        try{
            const response =
                await fetch('https://swapi.co/api/planets')
            const responseJson = await response.json()

            this.setState({
                isLoading: false,
                dataSource: responseJson.results,
            }, function(){
            });
        }
        catch (error){
            console.error(error);
        };
    }

    render(){
        if(this.state.isLoading){
            return(
                <View style={{flex:1, padding:20}}>
                    <ActivityIndicator/>
                </View>
            );
        }
        return(
            <View>
                <FlatList 
                data={this.state.dataSource}
                renderItem={({item}) => 
                <Text>{item.name}, {item.rotation_period}, {item.diameter}, 
                {item.climate}, {item.terrain}, {item.surface_water}, 
                {item.population}, {item.residents}, {item.films}</Text>}
                keyExtractor={({id},index) => id}
                />
            </View>
        );
    }

}

export default API2;