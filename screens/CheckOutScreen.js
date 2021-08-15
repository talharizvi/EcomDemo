import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Image, View,TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, deleteAmount, decreaseCount } from '../redux/action';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

const CheckOutScreen = (props)=>{

    const data = useSelector(state => state)
    const dispatch = useDispatch()

    const deleteItemFromCart = index => dispatch(deleteItem(index))
    const deleteCount =()=>dispatch(decreaseCount())
    const substractAmount = (price)=>dispatch(deleteAmount(price))
    
    let cartItems = data.cartItems.cartItems
    const[list,setList] = useState(cartItems);
    
    useEffect(() => {
      
      setList(cartItems)
  
    },[cartItems]);

    const renderItem =(item,index)=>{
      return(
      <View key={index} style={{marginHorizontal:15,marginVertical:15}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image
              style={{height:50,width:50,flex:1}}
              source={{
              uri: item.image,
              }}
              />
              <Text style={{fontSize:18,fontWeight:'bold',flex:3,marginLeft:10}}>{item.title}</Text>
          </View>
          
          <Text>{item.description}</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{marginTop:5,color:'red'}}>Rs {item.price}</Text>
              <TouchableOpacity 
              onPress={()=>{
                  deleteItemFromCart(index)
                  deleteCount()
                  substractAmount(item.price) 
              }}
              >
                  <Text>Remove</Text>
              </TouchableOpacity>
          </View>
      </View>
      )
  }

  const leftComponent = ()=>{
    return(<TouchableOpacity onPress={()=>props.navigation.navigate('HomeTabs')}>
      <Icon name="arrowleft" size={30} color='#fff' />
    </TouchableOpacity>)
  }

  const rightComponent = ()=>{
    return(<View style={{flexDirection:'row',justifyContent:'space-between',}}>
      <Text style={{marginRight:10}}>Count: {data.count.count}</Text>
      <Text>Price: {data.amount.amount}</Text>
    </View>)
  }

    return(<ScrollView style={{flex:1,backgroundColor:'#fff'}}>
      <Header
            leftComponent={leftComponent}
            centerComponent={{ text: 'Checkout', style: { color: '#fff' } }}
            rightComponent={rightComponent}
        />
    {
            list.map((item,index)=>renderItem(item,index))
    }
  </ScrollView>)
}

export default CheckOutScreen