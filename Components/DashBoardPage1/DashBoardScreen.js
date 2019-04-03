import React from 'react';
import {CheckBox ,StyleSheet, Text, View, Button} from 'react-native';
import { Container, Header, Body, Right, Title, Content, Form, Item, Input, Label,Left, Icon} from 'native-base';
import DashHeader1 from './DashHeader1';
import TaskDash from './TaskDash';

export default class DashBoardapp extends  React.Component{
    
    render() {
      
        return (
            <View style={styles.container}>
           <DashHeader1 navigation={this.props.navigation}/>
            <TaskDash/>
            <Text/>
            <TaskDash/>
            <Text/>
            <TaskDash/>
            </View>
            );
    }

} 
const styles=StyleSheet.create( {

    container:{
        flex:1,
    }
})
