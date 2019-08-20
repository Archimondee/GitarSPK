import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import {Header, Button, Right, Left, Body} from 'native-base';
import PickerModal from 'react-native-picker-modal-view';
import {Ionicons} from 'react-native-vector-icons'

//Data
import dataSenar from './data/dataSenar.json';
import dataMerk from './data/dataMerk.json';
import dataHarga from './data/dataHarga.json';
import dataBahan from './data/dataBahan.json';
import dataFrets from './data/dataFrets.json';

export default class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSenar:{},
      selectedMerk:{},
      selectedHarga:{},
      selectedBahan: {},
      selectedFrets: {}
    };
  }

  selectSenar(selectSenar){
    this.setState({
      selectedSenar : selectSenar
    })
  }
  onSelectSenar(selectSenar){
    this.setState({
      selectedSenar: selectSenar
      
    })
    return selectSenar;
  }

  selectMerk(selectMerk){
    this.setState({
      selectedMerk:selectMerk
    })
  }
  onSelectMerk(selectMerk){
    this.setState({
      selectedMerk:selectMerk
    })
    return selectMerk
  }

  selectHarga(selectHarga){
    this.setState({
      selectedHarga: selectHarga
    })
  }
  onSelectHarga(selectHarga){
    this.setState({
      selectedHarga: selectHarga
    })
    return selectHarga
  }

  selectBahan(selectBahan){
    this.setState({
      selectedBahan: selectBahan
    })
  }
  onSelectBahan(selectBahan){
    this.setState({
      selectedBahan: selectBahan
    })
    return selectBahan
  }

  selectFrets(selectFrets){
    this.setState({
      selectedFrets: selectFrets
    })
  }
  onSelectFrets(selectFrets){
    this.setState({
      selectedFrets: selectFrets
    })
    return selectFrets
  }


  render() {
    return (
      <View style={{paddingTop:24, flex:1}}>
        <Header style={{backgroundColor:'#08AE9E'}}>
          <Left>
            <TouchableOpacity>
              <Ionicons name="ios-arrow-back" size={32} color="white"/>
            </TouchableOpacity>
          </Left>
          <Body>
            <Text style={{fontSize:20, color:'white'}}>Pencarian Gitar</Text>
          </Body>
          <Right>
            <TouchableOpacity>
              <Ionicons name="ios-home" size={32} color="white"/>
            </TouchableOpacity>
          </Right>
        </Header>
        <ImageBackground style={{width:'100%', height:'100%'}} source={require('../../assets/bg.jpg')}>
          <View style={{flex:1, alignItems:'center', marginTop:20}}>
            <View style={{width:'80%', paddingBottom:10}}>
              <View style={{paddingLeft:5}}>
                <Text>Harga</Text>
              </View>
              <PickerModal
                onSelected={this.onSelectHarga.bind(this)}
                //onClosed={this.onClosed.bind(this)}
                //onBackButtonPressed={this.onBackButtonPressed.bind(this)}
                items={dataHarga}
                sortingLanguage={'tr'}
                showToTopButton={true}
                selected={this.selectHarga}
                autoGenerateAlphabeticalIndex={true}
                selectPlaceholderText={'Pilih harga .....'}
                onEndReached={() => console.log('list ended...')}
                searchPlaceholderText={'Pilih harga .....'}
                requireSelection={true}
                autoSort={false}
              />
            </View>
            <View style={{width:'80%', paddingBottom:10}}>
              <View style={{paddingLeft:5}}>
                <Text>Senar</Text>
              </View>
              <PickerModal
                onSelected={this.onSelectSenar.bind(this)}
                //onClosed={this.onClosed.bind(this)}
                //onBackButtonPressed={this.onBackButtonPressed.bind(this)}
                items={dataSenar}
                sortingLanguage={'tr'}
                showToTopButton={true}
                selected={this.selectSenar}
                autoGenerateAlphabeticalIndex={true}
                selectPlaceholderText={'Pilih senar .....'}
                onEndReached={() => console.log('list ended...')}
                searchPlaceholderText={'Pilih senar .....'}
                requireSelection={true}
                autoSort={true}
              />
            </View>
            <View style={{width:'80%', paddingBottom:10}}>
              <View style={{paddingLeft:5}}>
                <Text>Merek</Text>
              </View>
              <PickerModal
                onSelected={this.onSelectMerk.bind(this)}
                //onClosed={this.onClosed.bind(this)}
                //onBackButtonPressed={this.onBackButtonPressed.bind(this)}
                items={dataMerk}
                sortingLanguage={'tr'}
                showToTopButton={true}
                selected={this.selectMerk}
                autoGenerateAlphabeticalIndex={true}
                selectPlaceholderText={'Pilih merek .....'}
                onEndReached={() => console.log('list ended...')}
                searchPlaceholderText={'Pilih merek .....'}
                requireSelection={true}
                autoSort={true}
              />
            </View>
            
            <View style={{width:'80%', paddingBottom:10}}>
              <View style={{paddingLeft:5}}>
                <Text>Bahan</Text>
              </View>
              <PickerModal
                onSelected={this.onSelectBahan.bind(this)}
                //onClosed={this.onClosed.bind(this)}
                //onBackButtonPressed={this.onBackButtonPressed.bind(this)}
                items={dataBahan}
                sortingLanguage={'tr'}
                showToTopButton={true}
                selected={this.selectBahan}
                autoGenerateAlphabeticalIndex={true}
                selectPlaceholderText={'Pilih bahan .....'}
                onEndReached={() => console.log('list ended...')}
                searchPlaceholderText={'Pilih bahan .....'}
                requireSelection={true}
                autoSort={true}
              />
            </View>

            <View style={{width:'80%', paddingBottom:10}}>
              <View style={{paddingLeft:5}}>
                <Text>Frets</Text>
              </View>
              <PickerModal
                onSelected={this.onSelectFrets.bind(this)}
                //onClosed={this.onClosed.bind(this)}
                //onBackButtonPressed={this.onBackButtonPressed.bind(this)}
                items={dataFrets}
                sortingLanguage={'tr'}
                showToTopButton={true}
                selected={this.selectFrets}
                autoGenerateAlphabeticalIndex={true}
                selectPlaceholderText={'Pilih frets .....'}
                onEndReached={() => console.log('list ended...')}
                searchPlaceholderText={'Pilih frets .....'}
                requireSelection={true}
                autoSort={true}
              />
            </View>
            <View style={{paddingTop:20}}>
              <Button style={{width:200, alignContent:'center',alignItems:'center', justifyContent:'center', backgroundColor:'#08AE9E'}}>
                <Text style={{color:'white'}}>Cari Gitar</Text>
              </Button>
            </View>
          </View>        
        </ImageBackground>
        
      </View>
    );
  }
}
