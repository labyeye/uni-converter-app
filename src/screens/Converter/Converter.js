import React from "react";
import { View,Text, StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight,responsiveWidth } from "react-native-responsive-dimensions";
const Converter = () => {
    return(
        <View style={styles.container}>
           
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:50,
        alignItems:'center'
    },
    heading:{
        fontSize:responsiveFontSize(3),
    }
    
})

export default Converter;