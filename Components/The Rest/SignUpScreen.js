import React, {Component} from 'react';
import { View, StyleSheet,ScrollView , CheckBox ,Button,TextInput } from 'react-native';
import { Container, Header, Body, Right, Title, Text, Content, Form, Item, Input, Label} from 'native-base';
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
  },

  contentContainer: {
    padding: 8,
  },
};

//connection with firebase (web not android or ios )

export default class Signup extends Component {
  static navigationOptions = {
    header:null
  };
  componentDidMount(){
    // create data
    firebase.database().ref('user').set({
           email:'oussema.mouhib.hichri@gmail.com',
           Password:'azerty123',
           FirstName:'Oussema',
           LastName:'Hichri'
    });
     //get the data
    firebase.database().ref('user').on('value', (snapshot)=>{
        this.setState ({
            a1:snapshot.val().email,
        a2:snapshot.val().Password,
        a3:snapshot.val().FirstName,
        a4:snapshot.val().LastName})
 });


  }
  yalla (){

    //change the data        
    firebase.database().ref(this.state.Livreur).set({
     email:this.state.a1,
     Password:this.state.a2,
     FirstName:this.state.a3,
     LastName:this.state.a4
     
        });
  }
  gotodash = () => {
    this.props.navigation.navigate('dash');
}
    constructor(props) {
      super(props);

     /* this.onFocus = this.onFocus.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      //this.onChangeText = this.onChangeText.bind(this);

      this.onSubmitFirstName = this.onSubmitFirstName.bind(this);
      this.onSubmitLastName = this.onSubmitLastName.bind(this);
      //this.onSubmitAbout = this.onSubmitAbout.bind(this);
      this.onSubmitEmail = this.onSubmitEmail.bind(this);
      this.onSubmitPassword = this.onSubmitPassword.bind(this);

      this.onAccessoryPress = this.onAccessoryPress.bind(this);

      this.firstnameRef = this.updateRef.bind(this, 'firstname');
      this.lastnameRef = this.updateRef.bind(this, 'lastname');
     // this.aboutRef = this.updateRef.bind(this, 'about');
      this.emailRef = this.updateRef.bind(this, 'email');
      this.passwordRef = this.updateRef.bind(this, 'password');

      this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);*/

      this.state = {
       // about: '',
       check:false,
       check1:false,
       check2:false,
       
           food:'',
           Uber:'',
           tek:'',
           a1:'',
      a2:'',
      a3:'',
      a4:'',
      Livreur:'',
        secureTextEntry: true
   
      };
    }
    checkBoxTest(){
      this.setState({
          check:!this.state.check
         
      })
      if (!this.state.check) 
      this.setState({
          food:'Food'
         
      }); 
          //{alert('Delivery food')}
      else {
          this.setState({
              food:''
             
          }); 
      }
  }

  check1BoxTest(){
      this.setState({
          check1:!this.state.check1
      })
      if (!this.state.check1) 
          
      {
          this.setState({
              Uber:'Uber'
             
          });
       }
  else {
      this.setState({
          Uber:''
         
      });
  }
  }
  check2BoxTest(){
      this.setState({
          check2:!this.state.check2
      })
      if (!this.state.check2) 
          
      {this.setState({
          tek:'Tek'
         
      }); }
  else {
      this.setState({
          tek:'',
         
      });
  }
  }
   

   
render(){

      return (
        <Container>
             <Content>
                <Form>
                <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps='handled'
        >
          <View style={styles.container}>
            <TextField
              //ref={this.firstnameRef}
              //value={data.firstname}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              //onFocus={this.onFocus}
              onChangeText={(text)=>this.setState({a4:text})}
              //onSubmitEditing={this.onSubmitFirstName}
              returnKeyType='next'
              label='First Name'
              //error={errors.firstname}
            />

            <TextField
              //ref={this.lastnameRef}
             // value={data.lastname}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
             // onFocus={this.onFocus}
              onChangeText={(text)=>this.setState({a3:text})}
             // onSubmitEditing={this.onSubmitLastName}
              returnKeyType='next'
              label='Last Name'
             // error={errors.lastname}
            />

            

            <TextField
             // ref={this.emailRef}
             // value={data.email}
              //defaultValue={defaultEmail}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={(text)=>this.setState({a1:text})}
              //onSubmitEditing={this.onSubmitEmail}
              returnKeyType='next'
              label='Email Address'
            //  error={errors.email}
            />

            <TextField
             // ref={this.passwordRef}
             // value={data.password}
              //secureTextEntry={secureTextEntry}
              autoCapitalize='none'
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              clearTextOnFocus={true}
             // onFocus={this.onFocus}
              onChangeText={(text)=>this.setState({a2:text})}
             // onSubmitEditing={this.onSubmitPassword}
              returnKeyType='done'
              label='Password'
             // error={errors.password}
              title='Choose wisely'
              maxLength={30}
              characterRestriction={20}
              //renderAccessory={this.renderPasswordAccessory}
            />

<TextInput label='Password' onChangeText={(text)=>this.setState({Livreur:text})}/>
<CheckBox value={this.state.check} onChange={()=>this.checkBoxTest()}  />
               <Text>Delivery Food</Text>
               <CheckBox value={this.state.check1} onChange={()=>this.check1BoxTest()}/>
               <Text>Uber</Text>
               <CheckBox value={this.state.check2} onChange={()=>this.check2BoxTest()}/>
               <Text>Delivery tek</Text>
               <Text>{this.state.tableau}</Text>
               
          </View>

          <View style={styles.container}>
            <RaisedTextButton onPress={()=>this.yalla()} title='submit' color={TextField.defaultProps.tintColor} titleColor='white' />
          </View>
          <View style={styles.container}>
            <RaisedTextButton onPress={this.gotodash} title='go to dash' color={TextField.defaultProps.tintColor} titleColor='white' />
          </View>
          
        </ScrollView>
                </Form>
        </Content>
        </Container>
      );
    }
  } styles

