import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const TotalAmount = ({ text = 'จำนวนเงินทั้งหมด', amount = 70000 }) => {
    return (
        <View style={styles.container}>
            <View style={styles.name}>
                    <Text style={styles.text_name}>{text}</Text>
            </View>
            <View style={styles.center}>
                <View style={styles.amount}>
                    <Text style={styles.text_amount}>{amount} <Text style={styles.text_name}>บาท</Text></Text>
                </View>
                
            </View>
        </View>
    )
}

export default TotalAmount

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#243748',
        height: 120,
        margin: 10,
        borderRadius: 10,
        elevation: 20,
        flexDirection: 'column',
        padding: 10,
    },
    center:{
        justifyContent: 'center',
        marginTop:10
    },
    name: {
    },
    amount: {
        alignItems: 'center',
    },
    text_name: {
        color: '#fff',
        fontFamily: 'Kanit-Medium',
        fontSize: 16,

    },
    text_amount: {
        color: '#fff',
        fontFamily: 'Kanit-Medium',
        fontSize: 32
    }
})