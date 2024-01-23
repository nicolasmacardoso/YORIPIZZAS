import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { useNavigation, useRoute } from '@react-navigation/native'





export default function FinishOrder(){

    return(
      <View style={styles.container}>
        <Text style={styles.alert}>Você deseja finalizar esse pedido?</Text>
        <Text style={styles.title}>
          Mesa {route.params?.number}
        </Text>
  
        <TouchableOpacity style={styles.button} onPress={handleFinish}>
          <Text style={styles.textButton}>Finalizar pedido</Text>
          <Feather name="shopping-cart" size={20} color="#1d1d2e" />
        </TouchableOpacity>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1D2E',
        paddingVertical: '5%',
        paddingHorizontal: '4%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    alert: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 12,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 12,
      },
    button:{
        backgroundColor: '#3FFFA3',
        flexDirection: 'row',
        width: '65%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    textButton: {
        fontSize: 18,
        marginRight: 8,
        fontWeight: 'bold',
        color: '#1D1D2E'
    }
})