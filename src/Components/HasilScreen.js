import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import {Header,Content, List, ListItem, Thumbnail, Left, Body, Right, Button, Card} from 'native-base'
import {Ionicons} from 'react-native-vector-icons';

export default class HasilScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      data: this.props.navigation.getParam('data'),
      filter: this.props.navigation.getParam('filter'),
      isAvailable: this.props.navigation.getParam('isAvailable')
    }
  }

  componentDidMount(){
    //console.log(this.state.data)
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
            <Text style={{color:'white'}}> Hasil Pencarian</Text>
          </Body>
          <Right>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
              <Ionicons name="ios-home" size={32} color="white"/>
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={{flex:1}}>
        {this.state.data!=null?(
          this.state.data.map((items, i)=>{
           return(
             <Card key={i} style={{marginLeft:10, marginRight:10, marginTop:5}}>
             <List >
                <ListItem thumbnail>
                  <Left>
                    <Image
                    source={{ uri: 'data:image/' + items.ext_foto + ';base64,' + items.foto }}
                    style={{ width: 50, height: 50 }}
                    resizeMode="contain"
                  />
                  </Left>
                  <Body>
                    <Text>{items.nama_gitar}</Text>
                    <Text style={{color:'gray'}} note numberOfLines={1}>Rp. {items.harga}</Text>
                  </Body>
                  <Right>
                    <Button transparent onPress={()=>this.props.navigation.navigate('Desc',{
                      bahan: items.bahan,
                      description: items.description,
                      ext_foto: items.ext_foto,
                      foto: items.foto,
                      frets: items.frets,
                      harga: items.harga,
                      nama_gitar: items.nama_gitar,
                      senar: items.senar,
                      id_gitar: items.id_gitar
                    })}>
                      <Text>View</Text>
                    </Button>
                  </Right>
                </ListItem>
              </List>
              </Card>
           )
         })
        ):(
          <Card style={{paddingTop:10, paddingBottom:10, justifyContent:'center', alignItems:'center', marginLeft:10, marginRight:10}}>
            <Text style={{paddingTop:10}}>Data gitar tidak ditemukan</Text>
            <Text style={{paddingBottom:10}}>Silahkan pilih kategori yang lain</Text>
          </Card>
          )}
        </View>
        </ImageBackground>
      </View>
    )
  }
}
