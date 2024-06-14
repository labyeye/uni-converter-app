import React from "react";
import { View,Text, StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight,responsiveWidth } from "react-native-responsive-dimensions";
const Dashboard = () => {
    return(
        <View style={styles.container}>
           
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1A1A1A',
        flex:1,
        alignItems:'center'
    },
    heading:{
        fontSize:responsiveFontSize(3),
    }
    
})

export default Dashboard;