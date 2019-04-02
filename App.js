import React, { Component } from 'react';
import LoginScreen from './Components/The Rest/LoginScreen';
import SignUpScreen from './Components/The Rest/SignUpScreen';
//import DashBoard  from './Components/DashBoradPage1/DashBoard';
//import FirebaseTest from './Components/FirebaseTest';
import Orders from './Components/drawerPages/Orders';
import Myinformation from './Components/drawerPages/Myinformation';
import { createDrawerNavigator,createAppContainer,createStackNavigator} from 'react-navigation';
import * as firebase from 'firebase';
import DashBoardScreen from './Components/DashBoardPage1/DashBoardScreen';

const  config = {
  apiKey: "AIzaSyDMPfIrSkNGyyFwTCvqGwOck6ugsXuYfbM",
  authDomain: "acidlabsproject.firebaseapp.com",
  databaseURL: "https://acidlabsproject.firebaseio.com",
  projectId: "acidlabsproject",
  storageBucket: "acidlabsproject.appspot.com",
  messagingSenderId: "1017846561083"
};
firebase.initializeApp(config);

const Mydrawer = createDrawerNavigator({ 
  dash:{screen : DashBoardScreen},
  Orders:{screen : Orders},
  Myinformation:{screen :Myinformation}

}, 


{
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',

},

) 
const AppStackNavigator = createStackNavigator({
  Login:{
    screen :LoginScreen},
    SignUp:{
      screen :SignUpScreen},
    drawer:{
      screen :Mydrawer},
   
     
       
      
                 
  },{headerMode: 'none'});

const AppContainer = createAppContainer(AppStackNavigator);



export default class App extends React.Component {
  
  render() {
    return  (
  <AppContainer/>
  
    )  
  }
}