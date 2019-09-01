import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import {Header, Left, Right, Body, Card} from 'native-base';
import {Ionicons} from 'react-native-vector-icons';

export default class DescScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      bahan: this.props.navigation.getParam('bahan'),
      description: this.props.navigation.getParam('description'),
      ext_foto: this.props.navigation.getParam('ext_foto'),
      foto: this.props.navigation.getParam('foto'),
      frets: this.props.navigation.getParam('frets'),
      harga: this.props.navigation.getParam('harga'),
      nama_gitar: this.props.navigation.getParam('nama_gitar'),
      senar: this.props.navigation.getParam('senar'),
      id_gitar: this.props.navigation.getParam('id_gitar'),
    }
  }
  render() {
    return (
      <View style={{paddingTop:24, flex:1}}>
      <ImageBackground style={{width:'100%', height:'100%'}} source={require('../../assets/bgmerek.png')}>
        <Header style={{backgroundColor:'#08AE9E'}}>
          <Left>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={32} color="white"/>
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{color:'white'}}>{this.state.nama_gitar}</Text>
          </Body>
          <Right/>
        </Header>
        <View style={{flex:1, alignItems:'center', paddingLeft:10, paddingRight:10}}>
          <View style={{borderWidth:1, borderColor:'black', height:200, width:200, marginTop:20}}>
            <Image
              source={{uri: 'data:image/' + this.state.ext_foto + ';base64,' + this.state.foto}}
              style={{width: 190, height: 190}}
              resizeMode="contain"
            />

          </View>
          <View style={{paddingTop:15}}>
            <Text>{this.state.nama_gitar}</Text>
          </View>
          <Card style={{paddingTop:15, width:'100%'}}>
            <View style={{height:35, paddingLeft:10, borderBottomWidth:1, borderBottomColor:'black', marginLeft:10, marginRight:10, justifyContent:'center'}}>
              <Text>Informasi Barang</Text>
            </View>
            <View style={{paddingLeft:10, paddingTop:10}}>
              <Text>Harga : Rp. {this.state.harga}</Text>
            </View>
            <View style={{paddingLeft:10, paddingTop:10}}>
              <Text>Jumlah Fretz : {this.state.frets}</Text>
            </View>
            <View style={{ paddingLeft:10, paddingTop:10}}>
              <Text>Bahan Senar : {this.state.senar}</Text>
            </View>
            <View style={{paddingLeft:10, paddingTop:10}}>
              <Text>Bahan Gitar : {this.state.bahan}</Text>
            </View>
            <View style={{paddingLeft:10, paddingTop:10, paddingBottom:15}}>
              <Text>Deskripsi : </Text>
              <Text style={{paddingLeft:5}}>{this.state.description}</Text>
            </View>
          </Card>
        </View>
        </ImageBackground>
      </View>
    )
  }
}
