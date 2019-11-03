import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios'; 

export default class Categories extends React.Component {

static navigationOptions = {
    title:"NewsApp",
  };

render() {
  return (
      <View style={styles.container}>     
      <ScrollView>       

          <TouchableOpacity onPress={()=>this.props.navigation.navigate("news",{category:"business"})}>
            <Text style={[styles.btnStyle]}>
              İş Dünyası
            </Text>  
          </TouchableOpacity>   

          <TouchableOpacity onPress={()=>this.props.navigation.navigate("news",{category:"sports"})}>
            <Text style={[styles.btnStyle]}>
              Spor
            </Text> 
          </TouchableOpacity> 

         <TouchableOpacity onPress={()=>this.props.navigation.navigate("news",{category:"entertainment"})}>
            <Text style={[styles.btnStyle]}>
              Magazin
            </Text> 
          </TouchableOpacity> 

         <TouchableOpacity onPress={()=>this.props.navigation.navigate("news",{category:"health"})}>
            <Text style={[styles.btnStyle]}>
              Sağlık
            </Text> 
          </TouchableOpacity> 

          <TouchableOpacity onPress={()=>this.props.navigation.navigate("news",{category:"technology"})}>
            <Text style={[styles.btnStyle]}>
              Teknoloji
            </Text> 
          </TouchableOpacity> 

          <TouchableOpacity onPress={()=>this.props.navigation.navigate("news",{category:"science"})}>
            <Text style={[styles.btnStyle]}>
              Bilim
            </Text>
          </TouchableOpacity>     
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
  },
  btnStyle:{
    width: '100%',
    padding: 10,
    marginTop: 10,
    textAlign: 'center',
    borderWidth: 1,
    fontsize: 30,
    color:'#ffffff',
    borderColor: '#ffffff',    
    backgroundColor: '#4287f5',
    borderRadius:10,
  }
});
