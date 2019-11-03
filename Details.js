import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';

export default class Details extends React.Component {
  
  static navigationOptions = {
    title:"Haberler",
  };
  render() {
        
    const item=this.props.navigation.getParam("item",null);
      
    return (
      <View style={styles.container}>
        <ScrollView> 
         <Text style={styles.title}>{item.title}</Text>
         <Image style={styles.foto} source={{ uri: item.urlToImage}} />
         <Text style={styles.title2}>{item.description}</Text>
       </ScrollView>
      </View>     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }, 
   title:{
    fontSize:25,
    textAlign:'center',   
  },
  title2:{
    fontSize:15, 
  },
  foto:{
   width:'100%',
   height:300,
   marginRight:5,
   marginLeft:5,
  }
});
