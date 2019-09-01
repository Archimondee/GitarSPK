import React, { Component } from 'react';
import {View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import {Header, Button, Right, Left, Body, Content, Card, CardItem, Grid, Row, Col} from 'native-base';
import {Ionicons} from 'react-native-vector-icons'


export default class TentangScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <View style={{paddingTop:24, flex:1}}>
        <Header style={{backgroundColor:'#08AE9E'}}>
          <Left>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={32} color="white"/>
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{fontSize:20, color:'white'}}>Tentang</Text>
          </Body>
          <Right>
            
          </Right>
        </Header>
        <ImageBackground style={{width:'100%', height:'100%'}} source={require('../../assets/bg.jpg')}>  
        <Content padder>
          <Card>
            <CardItem header style={{borderBottomWidth: 0.5, marginLeft:10, marginRight:10}}>
              <Text>Pembuat Aplikasi</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Grid>
                  <Row>
                    <Text style={{paddingLeft: 20,textAlign: 'justify'}}>
                      Nama
                    </Text>
                    <Text style={{paddingLeft: 3,textAlign: 'justify'}}>
                      : Silvia Wahyuningtias
                    </Text>
                  </Row>
                  <Row style={{marginTop: 5}}>
                    <Text style={{paddingLeft: 20,textAlign: 'justify'}}>
                      NPM
                    </Text>
                    <Text style={{paddingLeft: 10,textAlign: 'justify'}}>
                      : 56415572
                    </Text>
                  </Row>
                  <Row style={{marginTop: 5}}>
                    <Text style={{paddingLeft: 20,textAlign: 'justify'}}>
                      Kelas
                    </Text>
                    <Text style={{paddingLeft: 7,textAlign: 'justify'}}>
                      : 4IA21
                    </Text>
                  </Row>
                  <Row style={{marginTop: 5}}>
                    <Text style={{paddingLeft: 20,textAlign: 'justify'}}>
                      Email
                    </Text>
                    <Text style={{paddingLeft: 7,textAlign: 'justify'}}>
                      : silvianingtias@gmail.com
                    </Text>
                  </Row>
                </Grid>
              </Body>
            </CardItem>
          </Card>
        </Content>    
        </ImageBackground>
      </View>  
    
    );
  }
}
