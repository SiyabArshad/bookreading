import { View, Text,SafeAreaView, ScrollView,TextInput,TouchableOpacity,Switch } from 'react-native'
import * as React from 'react'
import {RFPercentage} from "react-native-responsive-fontsize"
import COLORS from "../components/colors"
import Card from '../components/Card'
import library from '../../collection'
export default function Home({navigation}) {
  const [switchValue, setSwitchValue] = React.useState(false);
  const toggleSwitch = (value) => {
    //To handle switch toggle
    setSwitchValue(value);
    //State changes according to switch
  };

return (
<SafeAreaView style={{flex:1,backgroundColor:switchValue?COLORS.dark:COLORS.white,paddingTop:RFPercentage(5)}}>
<View style={{padding:RFPercentage(2),display:"flex",justifyContent:"space-between"}}>
 <View>
 <Text style={{fontWeight:"bold",color:switchValue?COLORS.white:COLORS.dark,fontSize:RFPercentage(3)}}>Ik BookReader</Text>
 </View>
 <View>
<Switch
          onValueChange={toggleSwitch}
          value={switchValue}
        />
 </View>
</View>
<ScrollView showsVerticalScrollIndicator={false}>
<View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",padding:RFPercentage(2)}}>      
 {
   library.map((item,i)=>{
      return(
      <Card key={i} book={item} navigation={navigation}></Card>
     )
   })
 }
</View>
    </ScrollView>
</SafeAreaView>    
  )

}