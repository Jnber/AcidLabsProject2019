import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Body, Right, Title, Text, Content, Form, Item, Input, Label, Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RaisedTextButton } from 'react-native-material-buttons';
import { TextField } from 'react-native-material-textfield';

import * as  firebase from 'firebase';
let styles = {
  scroll: {
    backgroundColor: '#E8EAF6',
  },

  container: {
    margin: 8,
    marginTop: 24,
    marginBottom:24
  },

  contentContainer: {
    padding: 8,
  },
};


export default class Login extends React.Component {
  componentDidMount (){
 
 }
    
    constructor(props) {
      super(props);
      this.state={
        INPUTEMAIL:'',
        INPUTPASS:'',
        a1:'',
        a2:''
      }
    }
    verif(){
      firebase.database().ref('user').on('value', (snapshot)=>{
        this.setState(  
        { a2:snapshot.val().Password}
  
  )
      })
      if (this.state.INPUTPASS != this.state.a2 )
      {
        alert('too bad');
        this.setState({a2:''})
      }
      else alert ('okay WELCOME')
    }
    
    
     render(){
        return (
     
         
        
          <Container>
            
              <Content>
               
                
              
                <Form>
                <TextField
             
              keyboardType='USERNAME'
              autoCapitalize='none'
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
             
              onChangeText={(text)=>this.setState({INPUTEMAIL:text})}
              
              returnKeyType='next'
              label='USER'
              
            />
                  <TextField
             
              autoCapitalize='none'
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              clearTextOnFocus={true}
              
              onChangeText={(text)=>this.setState({INPUTPASS:text})}
             
              returnKeyType='done'
              label='Password'
              
              title='Choose wisely'
              maxLength={30}
              characterRestriction={20}
          
            />
                </Form>
                <View style={styles.container}>
            <RaisedTextButton onPress={()=>this.verif()}title='login' color={TextField.defaultProps.tintColor} titleColor='white' />

            <RaisedTextButton   title='SignUp' onPress={()=>this.props.navigation.navigate('SignUp')} color={TextField.defaultProps.tintColor} titleColor='white' />
          </View> 
              </Content>
        </Container>
       
        );
      }
}