import React, { Component } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import {Button} from 'native-base';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, paddingTop:30}}>
        <ImageBackground style={{width:'100%', height:'100%'}} source={require('../../assets/bgmerek.png')}> 
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <View style={{height:200, width:200}}>
              <Image source={require('../../assets/Logo.png')} resizeMode="contain" style={{width:200, height:200}}/>
            </View>
            <View style={{paddingTop:100}}>
              <Button style={{width:200,alignItems:'center', justifyContent:'center', backgroundColor:'#08AE9E'}}>
                <Text style={{color:'white'}}>Menu Utama</Text>
              </Button>
              <Button style={{width:200, paddingTop:10, marginTop:10, alignItems:'center', justifyContent:'center', backgroundColor:'#08AE9E'}}>
                <Text style={{color:'white'}}>Tentang</Text>
              </Button>
            </View>
          </View>
        </ImageBackground>
        
      </View>
    );
  }
}
