import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {RFPercentage} from "react-native-responsive-fontsize"
import COLORS from './colors'
import * as Linking from 'expo-linking';
export default function Card({book,navigation}) { 
  return (
    <View style={{width:"45%",height:RFPercentage(30),backgroundColor:COLORS.white,overflow:"hidden",borderRadius:RFPercentage(1),margin:RFPercentage(1),elevation: 50,}}>
      <TouchableOpacity onPress={()=>Linking.openURL(book.burl)}>
      <Image resizeMode='stretch' source={book.poster} style={{width:"100%",height:"100%"}}></Image>
      </TouchableOpacity>
    </View>
  )
}
