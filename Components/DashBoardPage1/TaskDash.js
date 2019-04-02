import React from 'react';
import {CheckBox , Text, View, Button} from 'react-native';
import DashClient from './TaskDash/DashClient';
import DashTime from './TaskDash/DashTime';
import DashTypeTask from './TaskDash/DashTypeTask';
import DashAcceptButton from './TaskDash/DashAcceptButton';

export default class DashBoard extends  React.Component{
    constructor(props) {
        super(props);
       this.state={
       }
    }
    
   
    
    render() {
      
        return (
            <View >
            <DashClient/>
            <DashTime/>
            <DashTypeTask/>
            <DashAcceptButton/>
            </View>
            );
    }

} 