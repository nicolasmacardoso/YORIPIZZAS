import React, { useContext, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from "react-native";

import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard(){
    const { signOut } = useContext(AuthContext);
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Novo pedido</Text>
        
            <TextInput 
                placeholder="Número da mesa"
                placeholderTextColor="white"
                style={styles.input}
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Abrir mesa</Text>
            </TouchableOpacity>
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#1D1D2E'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 24,
    },
    input: {
        width: '90%',
        height: 60,
        backgroundColor: '#101026',
        borderRadius: 4,
        paddingHorizontal: 8,
        textAlign: 'center',
        fontSize: 22,
        color: 'white',
    },
    button: {
        width: '90%',
        height: 40,
        backgroundColor: '#3FFFA3',
        borderRadius: 4,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#101026',
        fontWeight: 'bold',
    }
})