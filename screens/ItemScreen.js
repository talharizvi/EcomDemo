import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,Image,
  View,ScrollView,ActivityIndicator,Button,TouchableOpacity,TextInput
} from 'react-native';
import { increaseCount, addItem, addAmount } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';

const ItemScreen =(props)=>{
    
    const dispatch = useDispatch()
    const modifyCount = note => dispatch(increaseCount(note))

    const addItemToCart = item => dispatch(addItem(item))

    const addPrice = price => dispatch(addAmount(price))

    const[list,setList] = useState([]);
    const[category,setCategory] = useState(props.route.params.category);
    const[loaderVisible,setLoader] = useState(false);

    useEffect(() => {
      
        getDataFromApi();
    
    },[]);
    
    const getDataFromApi = () => {
        setLoader(true)
        return fetch('https://fakestoreapi.com/products')
          .then((response) => response.json())
          .then((json) => {
            let filteredResult = json.filter(item => item.category == category);
            setList(filteredResult)
            setLoader(false)
          })
          .catch((error) => {
            setLoader(false)
            console.error(error);
          });
    };

    const renderItem =(item)=>{
        return(
        <View key={item.id} style={{marginHorizontal:15,marginVertical:15}}>
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
                    addItemToCart(item)
                    modifyCount()
                    addPrice(item.price)
                    props.navigation.navigate('CheckOut')
                }}
                >
                    <Text>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }

    return(
    <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
        
        {
            loaderVisible ? 
            <View style={{flex:1,height:'100%',justifyContent:'center',alignItems:'center',}}>
                <ActivityIndicator size="large" color="#0000ff" /> 
            </View>
            
            : null
        }

        {
            list.map((item)=>renderItem(item))
        }

    </ScrollView>)
}

export default ItemScreen