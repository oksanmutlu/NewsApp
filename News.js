import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,Platform,FlatList,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios'; 

export default class News extends React.Component {

state ={
dt:[]
}

componentDidMount() {  
const { navigation } = this.props;
const category = navigation.getParam('category', '');
const url="https://newsapi.org/v2/top-headlines?country=tr&category="+category+"&apiKey=de3404b50b694f2abac1ac8bb9d352e3"
axios.get(url).then(res=>{ //,{params:data}
  this.setState({dt:res.data.articles})
})
}

static navigationOptions = {
    title:"Kategoriler",
  };

render() {   
   return (
      <View style={styles.container}>     
      <ScrollView> 
        <FlatList
         data={this.state.dt}
         contentContainerStyle={{flex:1,marginTop:10}} 
         keyExtractor={ item=> item.source.name }  
         renderItem={({item}) => (
           <TouchableOpacity onPress={ ()=> this.props.navigation.navigate("details",{item:item})}>
           <View style={{flexDirection:'row',borderWidth:1,borderColor:'#09b01a',borderRadius:5,marginBottom:10,}}>       
           <Image style={{ width:75,height:75, marginRight:5,marginLeft:5}} source={{ uri: item.urlToImage}} />
            <View>     
             <Text style={{fontSize:16,fontWeight:'bold'}}>{item.title}</Text>
             <Text>{item.description}</Text>      
            </View>
           </View>
           </TouchableOpacity>
         )}
         />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'Center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
