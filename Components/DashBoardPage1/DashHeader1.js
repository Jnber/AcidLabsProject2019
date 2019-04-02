import React from 'react';
import {CheckBox ,StyleSheet, Text, View, Button} from 'react-native';
import { Container, Header, Body, Right, Title, Content, Form, Item, Input, Label,Left, Icon} from 'native-base';


export default class DashHeader1 extends  React.Component{
    
    render() {
      
        return (
            <View style={styles.container}>
<Header>
    <Left>
        <Icon name="menu" onPress = { ()=> this.props.navigation.openDrawer()} />
    </Left>
</Header>
            </View>
            );
    }

} 
const styles=StyleSheet.create( {

    container:{
        flex:1,
    }
})