import React from 'react';
import {  Text, View, Image , Button  } from 'react-native';


class TaskDash extends React.Component {
   state={
     num:1,
     time:'13:00',
     cate:'Uber'
   }
  render() {
      return (
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'}}>
          <Text >#Client {this.state.num} </Text>
          <Text/><Text/><Text/><Text/>
          <Button title="Accept" />
        </View>
        <View>
          <Text>{this.state.time}</Text>
          <Text/><Text/><Text/>
          <Text>{this.state.cate}</Text>
          <Button title='Fournisseur'/>
        </View>
      </View>
      );
   
  }
}
