import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FAFAFA',
        }}>
        <LinearGradient colors={['#009ffd', '#045de9']}>
          <TouchableOpacity
            style={{
              height: 30,
              flexDirection: 'row',
              paddingTop: '2%',
              paddingRight: '5%',
              marginTop: '7%',
              marginBottom: '5%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 'bold',
                marginLeft: '-15%',
              }}>
              Home
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <ScrollView>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ShayariScreen', {
                  category: 'Attitude',
                });
              }}
              style={{
                justifyContent: 'center',
                height: 130,
                width: 130,
                alignSelf: 'center',
                marginLeft: 2,
              }}>
              <ImageBackground
                source={require('../Images/Attitude.png')}
                resizeMode="cover"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  height: 130,
                  width: 130,
                  marginBottom: -20,
                  marginTop: 30,
                }}></ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ShayariScreen', {
                  category: 'Mahakal',
                });
              }}
              style={{
                justifyContent: 'center',
                height: 90,
                width: 130,
                alignSelf: 'center',
                marginTop: 80,
                marginLeft: 20,
              }}>
              <ImageBackground
                style={{ height: 130, width: 130 }}
                source={require('../Images/Mahakal.png')}></ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ShayariScreen', {
                  category: 'Sad',
                });
              }}
              style={{
                justifyContent: 'center',
                height: 100,
                width: 110,
                alignSelf: 'center',
                marginTop: 50,
                marginRight: 10,
                marginLeft: 5,
              }}>
              <ImageBackground
                style={{ height: 130, width: 130 }}
                source={require('../Images/Sad.png')}></ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ShayariScreen', {
                  category: 'Friends',
                });
              }}
              style={{
                justifyContent: 'center',
                height: 100,
                width: 140,
                alignSelf: 'center',
                marginTop: 50,
                marginLeft: 20,
              }}>
              <ImageBackground
                style={{ height: 150, width: 150 }}
                source={require('../Images/Friends.png')}></ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 18,}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ShayariScreen', {
                category: 'Motivation',
              });
            }}
            style={{
              justifyContent: 'center',
              height: 100,
              width: 140,
              alignSelf: 'center',
              marginTop: 60,
              marginRight: 10,
              marginLeft: -26,
              marginBottom: 15,
            }}>
            <ImageBackground
              style={{ height: 200, width: 200 }}
              source={require('../Images/Motivation.png')}></ImageBackground>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
