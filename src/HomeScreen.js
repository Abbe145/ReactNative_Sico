import React from 'react';
import {Text,View,Image,StyleSheet,ImageBackground,Button,handlePress,TouchableOpacity} from 'react-native';



const HomeScreen= ({navigation}) => {

return(

                <View style={styles.backgroundContainer}>
                

                <ImageBackground style={styles.bakcgroundImage} source={require('../assets/background.png' )}>
                <Text style={styles.Text}>Utbildning och kariärr efter gymnasiet</Text>
                <TouchableOpacity style={styles.Button2}>
                <Text style= {{fontSize:26, color:'white'}}>Välj Kurs </Text></TouchableOpacity>
                <TouchableOpacity style={styles.Text2} onPress={() => navigation.navigate('Kontakt')} title='Kontakt'>
                <Text style= {{fontSize:26, color:'white'}}>Kontakt </Text></TouchableOpacity>
                 <TouchableOpacity  onPress={() => navigation.navigate('About')} title='Om oss'></TouchableOpacity>
                 <TouchableOpacity style={styles.Text2} onPress={() => navigation.navigate('Kontakt')} title='Kontakt'>
                <Text style= {{fontSize:26, color:'white'}}>Kontakt </Text></TouchableOpacity>
                 <TouchableOpacity  onPress={() => navigation.navigate('About')} title='Om oss'></TouchableOpacity>

                </ImageBackground>

                <ImageBackground style={styles.logo}  source={require('../assets/logo.png')} />
                <View>
                   
                </View>
                </View>
);

}
const styles= StyleSheet.create({

   
    backgroundContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
        
    }, 
    bakcgroundImage: {
        flex: 1, 
        width: null, 
        height: null,
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
     width: 300,
    height: 145,
    position: 'absolute',
    alignSelf:'center',
    marginTop:38
    },
    Button:{
     backgroundColor: 'black',
     color:'white',
     padding:6,
     shadowRadius:4,
     justifyContent: 'space-between',
     flexDirection: 'row',
     alignItems: 'center',
    justifyContent: 'space-around',
    },
    Text: {
        textAlign: 'center', 
        alignSelf:'center',
        fontSize: 28,
        color: 'white',
        flexDirection: 'row',

      },

      Text2:{
        width: '50%',
        height: 59,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
        borderRadius:10,    
        flexDirection: 'row',
      },
      Button2: {
        width: '60%',
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'purple',
        alignSelf:'center',
        borderRadius:90,    
        flexDirection: 'row',
        marginTop:50,




        

        
      }


    });





export default HomeScreen ;