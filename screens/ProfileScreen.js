import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';

const ProfileScreen = ()=>{
    return(<View style={{flex:1,backgroundColor:'#fff'}}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    <View style={{flex: 1,marginHorizontal:10}}>
      
      <Text>Profile</Text>
      <Image 
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} 
        style={styles.imageStyle}
        />  
      <Text>User Name</Text>  
      <Text style={styles.textField}>Mac Miller</Text>
      <Text>Mobile Number</Text>
      <Text style={styles.textField}>9876543212</Text>

    </View>
  </View>)
}

export default ProfileScreen

const styles = StyleSheet.create({
  textField:{
    fontSize:18,fontWeight:'bold',marginBottom:10
  },
  imageStyle:{
    width: 100, height: 100, borderRadius:50,marginBottom:10
  }
})